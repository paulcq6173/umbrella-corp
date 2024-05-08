import { Document, PaginateResult } from 'mongoose';

export enum OrderDirection {
  ASC = 'asc',
  DESC = 'desc',
}

interface IOrder {
  orderDirection: OrderDirection;
}

interface IOption {
  before?: string;
  after?: string;
}

const cursorPaginate = (
  result: PaginateResult<Document<unknown>>,
  docArray: Array<{
    node: Document<unknown>;
    cursor: string;
  }>,
  orderOptions: IOption
) => {
  let paginatedResult = {};
  let edges = docArray;
  const { totalDocs, hasPrevPage, hasNextPage } = result;
  const { before, after } = orderOptions;

  const parsedCursor = after
    ? parseCursor(after)
    : before
    ? parseCursor(before)
    : null;

  if (parsedCursor) {
    edges = edges.filter((node) =>
      after
        ? parseCursor(node.cursor) > parsedCursor[0]
        : before
        ? parseCursor(node.cursor) < parsedCursor[0]
        : node
    );
  }

  const length = edges.length;

  paginatedResult = {
    totalCount: totalDocs,
    pageInfo: {
      hasPreviousPage: hasPrevPage,
      hasNextPage,
      startCursor: length > 0 ? edges[0].cursor : null,
      endCursor: length > 0 ? edges[length - 1].cursor : null,
    },
    edges,
  };

  return paginatedResult;
};

export const createCursor = (param: string, orderOption: Array<IOrder>) => {
  const payload = orderOption.map(() => param);

  return serializeCursor(payload);
};

const serializeCursor = (param: object) =>
  Buffer.from(JSON.stringify(param)).toString('base64');

const parseCursor = (cursor: string) => {
  if (!cursor) {
    return null;
  }

  try {
    return JSON.parse(Buffer.from(cursor, 'base64').toString('utf8'));
  } catch (error) {
    return null;
  }
};

export default cursorPaginate;

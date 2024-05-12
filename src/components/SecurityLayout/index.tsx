import { AllProjectsOrderBy, ISortProps } from '@/@types/types';
import { SendNotify } from '@/components/NotifyHandler';
import ProjectCard from '@/components/ProjectCard';
import SearchInterface from '@/components/SecurityLayout/SearchInterface';
import UmbrellaLabel from '@/components/UmSysCtrl/UmbrellaLabel';
import { FragmentType, getFragmentData } from '@/gql';
import { AllProjectsQueryDocument, OrderDirection } from '@/gql/graphql';
import { PageInfoFragment } from '@/graphql/fragments';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

const SecurityLayout = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [sortOption, setSortOption] = useState<ISortProps>({
    column: AllProjectsOrderBy.CreatedAt,
    direction: OrderDirection.Desc,
  });

  const { column, direction } = sortOption;
  const variables = {
    first: 4,
    searchKeyword: keyword,
    orderBy: column,
    orderDirection: direction,
  };
  const { data, loading, fetchMore } = useQuery(AllProjectsQueryDocument, {
    variables,
    fetchPolicy: 'cache-and-network',
    onError: (error) => {
      SendNotify({ message: error.message });
    },
  });

  if (loading) {
    return (
      <div className="w-full h-48">
        <div className="animate-pulse flex flex-col">
          <div className="flex-1 space-y-6 py-1 text-center italic">
            Welcome to Umbrella Secure Data Center
          </div>
          <div className="space-y-6">
            <div className="h-4">Validation succeed …</div>
            <div className="h-4">Request accepted …</div>
            <div className="h-4">searching …</div>
          </div>
        </div>
      </div>
    );
  }

  if (!data || !data.allProjects) {
    return (
      <div className="w-full h-1/2">
        <p className="text-black">No data found</p>
      </div>
    );
  }

  // Refers https://github.com/apollographql/apollo-client/issues/5903
  // Note that you cannot directly change read-only cache.

  const projectNodes = data?.allProjects
    ? data?.allProjects?.edges.map((e) => e?.node)
    : [];
  const pageInfoField: FragmentType<typeof PageInfoFragment> =
    data?.allProjects?.pageInfo;
  const pageInfo = getFragmentData(PageInfoFragment, pageInfoField);

  const PaginatedContent = () => {
    const onLoadMore: React.UIEventHandler<HTMLDivElement> = (e) => {
      const allowFetchMore: boolean = !loading && pageInfo.hasNextPage;

      if (!allowFetchMore) {
        return;
      }

      const endReached: boolean =
        e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
        e.currentTarget.clientHeight;

      if (endReached) {
        fetchMore({
          variables: {
            after: pageInfo.endCursor,
            ...variables,
          },
        });
      }
    };

    return (
      <div onScroll={onLoadMore} className="overflow-y-auto">
        <ul className="pl-2 style-inside italic text-sm sm:text-base text-red-800">
          {projectNodes.length > 0 ? (
            projectNodes.map(
              (node, i) =>
                node && <ProjectCard key={`project-${i}`} project={node} />
            )
          ) : (
            <p className="font-medium">No data found</p>
          )}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <SearchInterface
        keyword={keyword}
        setKeyword={setKeyword}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="w-full mt-4 m-auto border-2 rounded-sm border-transparent dark:bg-black">
        <UmbrellaLabel title="File List" />
      </div>

      <PaginatedContent />
    </div>
  );
};

export default SecurityLayout;

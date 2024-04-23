import { Types } from 'mongoose';

// Define omit type for unions
// Refer to https://github.com/microsoft/TypeScript/issues/42680
type UnionOmit<T, K extends string | number | symbol> = T extends unknown
  ? Omit<T, K>
  : never;

export interface IFounder {
  id: number;
  founderName: string;
  portrait: string;
  occupation: string[];
  intro: string;
}

export interface IProduct {
  id: number;
  gtin: string;
  name: string;
  slogan?: string;
  imgUrl: string;
  description: string;
  details: {
    pulishedDate: string;
    manufacturer: string;
  };
  genre: string;
  listPrice: number;
  ratings: number;
}

//============== Back-end ==============
interface IBaseUser {
  username: string;
  email?: string;
  phone?: string;
  fullName?: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface IRegUser extends IBaseUser {
  password: string;
}

// Mongoose Schema interface
export interface IUserSchema extends IBaseUser {
  passwordHash: string;
  // Use `Types.ObjectId` in document interface
  organization?: Types.ObjectId;
  id: string;
}

export interface IEmployeeSchema {
  organizationName: string;
  employeeName: string;
  employeeNumber: string;
  sex: string;
  unit: string;
  idCard: {
    cardNumber: number;
    securityLevel: string;
  };
  createdAt: Date;
  updatedAt?: Date;
}

export interface IUpdateUserInfo
  extends UnionOmit<IUserSchema, 'username' | 'passwordHash'> {
  password: string;
}

export type TLoginInfo = Pick<IRegUser, 'username' | 'password'>;

export interface IServerContext {
  currentUser?: IUserSchema;
}
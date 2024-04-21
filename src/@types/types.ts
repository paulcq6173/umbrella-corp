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

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
}

export type Request<T> = {
  path: string;
  method: HttpMethod;
  body?: T;
  headers?: Record<string, string>;
  params?: Record<string, string>;
};

export type Response<T> = {
  isError: boolean;
  statusCode: number;
  body: T;
};

export type GetSingleSearchShows = {
  q: string;
};

export interface Rating {
  average: number;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Self {
  href: string;
}

export interface Links {
  self: Self;
}

export type Show = {
  id: number;
  language: string;
  name: string;
  status: string;
  image: Image;
  rating: Rating;
  summary: string;
  network: {
    name: string;
    country: {
      name: string;
    };
  };
};

export interface Season {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: Date;
  runtime: number;
  rating: Rating;
  image: Image;
  summary: string;
  _links: Links;
}

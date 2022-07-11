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

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite?: any;
}

export type Show = {
  id: number;
  language: string;
  name: string;
  status: string;
  image: Image;
  rating: Rating;
  summary: string;
  network: Network;
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

export interface Episode {
  id: number;
  url: string;
  number: number;
  name: string;
  episodeOrder: number;
  premiereDate: string;
  endDate: string;
  network: Network;
  webChannel?: any;
  image: Image;
  summary: string;
  _links: Links;
}

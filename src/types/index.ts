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

export type SingleSearchShowResult = {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
};

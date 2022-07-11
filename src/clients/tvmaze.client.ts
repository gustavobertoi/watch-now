import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

import constants from "../constants";
import {
  HttpMethod,
  Request,
  Response,
  GetSingleSearchShows,
  Show,
  Season,
  Episode,
} from "../types";

export class TvMazeClient {
  private static instance: TvMazeClient;

  private client: AxiosInstance;

  private constructor() {
    this.client = axios.create({
      baseURL: constants.services.tvMaze.url,
    });
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new TvMazeClient();
    }
    return this.instance;
  }

  get seasons() {
    const self = this;

    async function episodes(seasonId: number) {
      return self.request<Episode[]>({
        path: `/seasons/${seasonId}/episodes`,
        method: HttpMethod.GET,
      });
    }

    return { episodes };
  }

  get shows() {
    const self = this;

    async function list() {
      return self.request<Show[]>({
        path: "/shows",
        method: HttpMethod.GET,
      });
    }

    async function seasons(showId: number) {
      return self.request<Season[]>({
        path: `/shows/${showId}/seasons`,
        method: HttpMethod.GET,
      });
    }

    return { list, seasons };
  }

  get singlesearch() {
    const self = this;

    async function shows({ q }: GetSingleSearchShows) {
      return self.request<Show>({
        path: "/singlesearch/shows",
        method: HttpMethod.GET,
        params: {
          q,
        },
      });
    }

    return { shows };
  }

  private async request<ResponseBody, RequestBody = any>({
    path,
    method,
    ...request
  }: Request<RequestBody>): Promise<Response<ResponseBody>> {
    try {
      const { status, data } = await this.client.request({
        url: path,
        method,
        ...(request?.body && {
          data: request.body,
        }),
        ...(request?.headers && {
          headers: request.headers,
        }),
        ...(request?.params && {
          params: request.params,
        }),
      });
      return {
        isError: false,
        statusCode: status,
        body: data,
      };
    } catch (error) {
      const { response } = error as AxiosError;
      const { status, data } = response as AxiosResponse;
      return {
        isError: true,
        statusCode: status,
        body: data,
      };
    }
  }
}

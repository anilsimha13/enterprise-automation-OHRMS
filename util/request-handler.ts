import { APIRequestContext, test } from "@playwright/test";

export class RequestHandler {
  private request: APIRequestContext;
  private baseURL: string | undefined;
  private apiBaseUrl: string;
  private apiPath: string = "";
  private queryParams: object = {};
  private apiHeaders: Record<string, string> = {};
  private apiBody: object = {};

  constructor(request: APIRequestContext, apiBaseUrl: string) {
    this.request = request;
    this.apiBaseUrl = apiBaseUrl;
  }

  url(baseUrl: string) {
    this.baseURL = baseUrl;
    return this;
  }
  path(apiPath: string) {
    this.apiPath = apiPath;
    return this;
  }
  params(queryParams: object) {
    this.queryParams = queryParams;
    return this;
  }
  headers(apiHeaders: Record<string, string>) {
    this.apiHeaders = apiHeaders;
    return this;
  }
  body(apiBody: object) {
    this.apiBody = apiBody;
    return this;
  }

  async getRequest() {
    let response: any;
    await test.step(`GET request to: ${this.apiBaseUrl}`, async () => {
      response = await this.request.get(this.apiBaseUrl, {
        headers: this.apiHeaders,
      });
    });
    return response;
  }
}

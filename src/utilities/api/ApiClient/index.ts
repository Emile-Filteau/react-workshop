import ResponseError from "./ResponseError";

export { ResponseError };
export default class ApiClient {
  protected headers: { [key: string]: string };
  private host: string;

  constructor(host: string, headers = {}) {
    this.host = host;

    this.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers
    };
  }

  get(url: string) {
    return this.request("GET", url, null);
  }

  post(url: string, body: Object | Array<{}>) {
    return this.request("POST", url, body);
  }

  patch(url: string, body: Object | Array<{}>) {
    return this.request("PATCH", url, body);
  }

  put(url: string, body: Object | Array<{}>) {
    return this.request("PUT", url, body);
  }

  protected async request(
    method: string,
    url: string,
    body: Object | Array<{}>
  ) {
    const requestObject = buildRequest(method, body, this.headers);

    let requestUrl;
    if (url[0] === "/" && this.host) {
      requestUrl = `https://${this.host}${url}`;
    } else {
      requestUrl = url;
    }

    let response = await fetch(requestUrl, requestObject);

    return handleResponse(response);
  }
}

function handleResponse(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new ResponseError(response);
  }
}

function buildRequest(method: string, body: any, headers: {}): RequestInit {
  return {
    method,
    headers,
    body: body ? JSON.stringify(body) : null
  };
}

export default class ResponseError extends Error {
  response: Response;

  constructor(response: Response) {
    super();
    this.response = response;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ResponseError);
    }
  }
}

import ApiClient from "./ApiClient";

export default class MyBnB extends ApiClient {
  constructor() {
    super("mybnb-workshop.herokuapp.com");
  }

  async getListings() {
    const response = await this.get("/listings");
    return await response.json();
  }
}

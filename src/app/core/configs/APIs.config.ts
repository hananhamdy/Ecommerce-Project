import { environment } from "../../../environments/environment";

export class APIs {
  //server
  public static apiUrl = environment.apiUrl;

  public static Products = {
    GetProductsList: `${this.apiUrl}/products`,
    GetProduct: 'https://fakestoreapi.com/products/',
  };
}

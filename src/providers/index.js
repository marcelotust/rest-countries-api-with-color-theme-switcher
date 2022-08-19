import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1/";

//export const ApiController = new AbortController();
//const CancelToken = axios.CancelToken;
////const source = CancelToken.source();

export const Api = axios.create({
  baseURL: BASE_URL,
  //cancelToken: source.token,
  //signal: ApiController.signal,
});

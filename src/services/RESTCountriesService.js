import { Api } from "../providers";

const getCountriesData = (term) => {
  return Api.get(term);
};

export const RESTCountriesService = {
  getCountriesData,
};

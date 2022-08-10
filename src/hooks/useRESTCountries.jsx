import { useCallback, useState } from "react"
import { RESTCountriesService } from "../services/RESTCountriesService";

export const useRESTCountries = () => {
    const [dataResponse, setDataResponse] = useState();

    const getRESTCountries = useCallback( async (term) => {
        const {status, data} = await RESTCountriesService.getCountriesData(term);

        if (status != 200) throw new Error();
        setDataResponse(data);
    }, [])

    return {
        dataResponse,
        getRESTCountries,
    }
}
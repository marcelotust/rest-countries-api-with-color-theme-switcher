import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import InfoCountry from "../../components/InfoCountry/InfoCountry";
import { useRESTCountries } from "../../hooks/useRESTCountries";

const DetailPage = () => {
  const params = useParams();

  const { dataResponse, getRESTCountries } = useRESTCountries();
  const [country, setCountry] = useState();

  useEffect(() => {
    getRESTCountries(`name/${params.countryId}`);
    //getRESTCountries(`alpha?codes=${params.countryId}`);
  }, []);

  useEffect(() => {
    if (dataResponse && dataResponse.length > 0) {
      console.log(">>>>>>  " + dataResponse[0]);
      setCountry(dataResponse[0]);
    }
  }, [dataResponse]);

  return (
    <section>
      <Link to="/list">Back</Link>
      {country && <InfoCountry country={country} />}
    </section>
  );
};

export default DetailPage;

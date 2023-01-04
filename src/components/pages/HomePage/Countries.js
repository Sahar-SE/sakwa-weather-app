import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Country from './Country';
import { getCountries } from '../../../redux/CountriesState/countriesState';

const Countries = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, []);
  const countries = useSelector((state) => (state.countries));
  return (
    <div className="countriesPage" data-testid="countriesContent">
      <div className="homePageCover">
        <div className="title">
          <h1>Weather Condition</h1>
          <p>Select the country you wanna see its weather</p>
        </div>
      </div>
      <div className="padding">
        <h2 className="countriesHeader">Countries List</h2>
      </div>
      <div className="padding countries">
        {Object.values(countries).map((country) => (
          <Country
            key={country.iso3}
            name={country.name}
            states={country.states}
            iso3={country.iso3}
          />
        ))}
      </div>
      <small>developed by SaharSaba Amiri</small>
    </div>
  );
};

export default Countries;

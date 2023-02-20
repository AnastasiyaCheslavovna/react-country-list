import React from 'react';
import { Country } from '../types';
import { CountryItem } from './CountryItem';

interface CountryListProps {
  countries: Country[];
}
export const CountryList = ({ countries }: CountryListProps) => {
  return (
    <ul className='list-group'>
      {countries.map((country) => (
        <CountryItem country={country} key={country.name} />
      ))}
    </ul>
  );
};

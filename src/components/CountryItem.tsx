import React from "react";
import { Color } from "../ui/colors";
import { Country } from "../types";
import { Badge } from "./Badge";

interface CountryItemProps {
  country: Country;
}
export const CountryItem = ({
  country: { flagImg, name, capital, region, area, population },
}: CountryItemProps) => {
  return (
    <li className="row row-cols-6 align-items-center">
      <img src={flagImg} alt="flag" />
      <span>{name}</span>
      <span>{capital}</span>
      <span>{region}</span>
      <Badge color={Color.PRIMARY} label="area" value={area} />
      <Badge color={Color.SECONDARY} label="population" value={population} />
    </li>
  );
};

export interface CountryApi {
  flags: CountryFlags;
  name: CountryName;
  capital: string[];
  region: string;
  area: number;
  population: number;
}
export interface CountryFlags {
  png: string;
  svg: string;
}
export interface CountryName {
  common: string;
  official: string;
  nativeName: CountryNativeName;
}
export interface CountryNativeName {
  [name: string]: CountryLangName | undefined;
}
export interface CountryLangName {
  official: string;
  common: string;
}
export interface Country {
  flagImg: string;
  name: string;
  capital: string;
  region: string;
  area: number;
  population: number;
}
export type BadgeLabel = 'area' | 'population';
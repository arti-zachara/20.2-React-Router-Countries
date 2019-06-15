export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const DELETE_COUNTRY = "DELETE_COUNTRY";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
export const SET_CONTINENT = "SET_CONTINENT";

// --- action creator: get all the countries
export function getCountries() {
  return {
    type: GET_COUNTRIES
  };
}

// --- action creator: delete specific country
export function deleteCountry(id) {
  return {
    type: DELETE_COUNTRY,
    id
  };
}

// --- action creator: get specific country
export function getCountry(id) {
  return {
    type: GET_COUNTRY,
    id
  };
}

// --- action creator: show countries with searchText as substring
export function searchCountries(searchText) {
  return {
    type: SEARCH_COUNTRIES,
    searchText
  };
}

// --- action creator: set continent name to list the countries
export function setContinent(name) {
  return {
    type: SET_CONTINENT,
    name
  };
}

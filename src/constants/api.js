//общие
export const HTTPS = 'https://';
export const HTTP = 'http://';
//SWAPI
export const SWAPI_ROOT = 'swapi.dev/api/';
export const SWAPI_PEAPLE = 'people';
export const SWAPI_PARAM_PAGE = '/?page=';
export const SWAPI_PARAM_SEARCH = '/?search=';

export const API_PEOPLE = HTTPS+SWAPI_ROOT+SWAPI_PEAPLE+SWAPI_PARAM_PAGE;
export const API_PERSON = HTTPS+SWAPI_ROOT+SWAPI_PEAPLE;
export const API_SEARCH = HTTPS+SWAPI_ROOT+SWAPI_PEAPLE+SWAPI_PARAM_SEARCH;

//VG
const GUIDE_ROOT_IMAGE = 'https:/starwars-visualguide.com/assets/img/'
const GUIDE_PEOPLE = 'characters'
export const GUIDE_IMG_EXTENSIONS = '.jpg'

export const URL_IMG_PERSON = GUIDE_ROOT_IMAGE+GUIDE_PEOPLE
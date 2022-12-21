import {HTTP, HTTPS} from "@constants/api";

/**
 *
 * @param {String} url - url для изменения
 * @returns {String} - url с HTTPS
 */
export const changeHTTP = url => {
   const result = url ? url.replace(HTTP, HTTPS) : url;
   return result
}

/*export const getApiResource = (url) => {
   fetch(url)
       .then(res => res.json())
       .then(body => console.log(body))
       .catch(error => console.log(error.message))

}*/
/**
 * отправляет fetch
 * @param {string} url - url для запроса
 * @returns {Promise} - Propmise с результатом запроса
 */
export const getApiResource = async (url) => {
   try {
      const res = await fetch(url)

      if (!res.ok){
         console.error('Could not fetch', res.status)
         return false
      }
      return await res.json()
   }catch (error){
      console.error('Could not fetch', error.message)
      return false
   }
}
/*ТАК МОЖНО ИСПОЛЬЗОВАТЬ
getApiResource(SWAPI_ROOT+SWAPI_PEAPLE)
.then(body => console.log(body))*/

/*
const body = getApiResource(SWAPI_ROOT+SWAPI_PEAPLE)
console.log(body)
*/


/*(async () => {
   const body = await getApiResource(SWAPI_ROOT+SWAPI_PEAPLE)
   console.log(body)
})();*/

export const makeCuncurrentResponse = async (array_of_url) => {
   const res = await Promise.all(array_of_url.map(res => {
      return fetch(res).then(res => res.json())
   }))

   return res
}

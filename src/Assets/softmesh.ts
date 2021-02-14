//Add to LocalStorage
export const addToStore = (key: string, data: any, status: any) => {
  if ('development' === process.env.NODE_ENV) {
      console.log('boop');
      //check if user wants to encode (if encode is true)
    if (status) {
          //this code encode the const encodedStringBtoA
          const encodedStringBtoA = btoa(key);
          
          // console.log({encode: encodedStringBtoA})
          //add the localstorage after encoded
          // const Data = btoa(data)
          return localStorage.setItem(encodedStringBtoA, btoa(JSON.stringify(data)));
      } else return localStorage.setItem(key, JSON.stringify(data)); // add to localstorage without encoding
      
  }
} // adding to localstorage ends


export const removeFromStore = (key: string, status: any) => {
  if ('development' === process.env.NODE_ENV) {
      console.log('boop');
      if (status) {
           //this code encode the const encodedStringBtoA
        const encodedString = btoa(key);
          const parseData = localStorage.getItem(encodedString)
          //  return atob(parseData)
      } else return localStorage.getItem(key)
  }
}

export async function dataFetch(location, input, sort){
    
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer lyBxVwoCuqftdCC9QKTgDerCJJhc0ClCWL_NcgeXrjDFM5P4fdBRU5W7oHFRsLmGnWn0OYDKf010Tn4wmovngbjGegrX5yA-VClm_gAVoJcNAeHrcBEeI5c6t1nWZnYx'
        }
      };
    const response = await fetch(`https://api.yelp.com/v3/businesses/search?location=${location}&term=${input}&sort_by=${sort}&limit=20`, options);

    const data = await response.json()

    //console.log(data);

    const dataArray = Object.values(data)[0];

    //console.log(dataArray);

    return dataArray;
}
    


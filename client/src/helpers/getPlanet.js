import axios from 'axios';

export const getPlanet = (planet) => {
      return axios.get(`https://images-api.nasa.gov/search?keywords=${planet}&media_type=image&year_start=2010`)
        .then(function (response) {
          const filteredItems = response.data.collection.items.filter((item => {
            return item.data[0].location === undefined;
          }));
        console.log(filteredItems);
          return filteredItems;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
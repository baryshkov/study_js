const apiKey = process.env.REACT_APP_YELP;

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
                 {
                   headers: {
                     Authorization: `Bearer ${apiKey}`
                   }
                 })
        .then(response => response.json())
        .then(jsonResponse => {
          if (jsonResponse.hasOwnProperty('businesses')) {
            return jsonResponse.businesses.map((item) => {
              return {
                id: item.id,
                imageSrc: item.image_url,
                name: item.name,
                adress: item.location.adress1,
                city: item.location.city,
                state: item.location.state,
                zipCode: item.location.zip_code,
                rating: item.rating,
                reviewCount: item.review_count
              }
            })
          }
        });
  }
};

export default Yelp;
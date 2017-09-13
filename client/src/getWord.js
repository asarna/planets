import axios from 'axios';

const apiKey = 'ba482adf6d82b6a2fab24e74b639cc01';

const getWord = (word, cb) => {
    axios.get(`http://words.bighugelabs.com/api/2/${apiKey}/${word}/json`)
    .then(cb)
    .catch(function (error) {
        console.log(error);
    });
};

export default getWord;
import axios from 'axios';
import config from './OmniConfig';

const { environment_getCookies, environment_setCookies } = config;

axios
  .all([axios(environment_setCookies), axios(environment_getCookies)])
  .then(
    axios.spread((res1, res2) => {
      console.log({ res1, res2 });
      // console.log(
      //   `Request 1 response SETCOOK \n Status: ${res1.status} \n Body: ${
      //     res1.data
      //   } \n `
      // );
      // console.log(
      //   `Request 2 response GETCOOK \n Status: ${res2.status} \n Body: ${
      //     res2.data
      //   } \n `
      // );
    })
  )
  .catch(error => {
    console.log(error);
  });

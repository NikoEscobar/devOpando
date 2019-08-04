import axios from 'axios';

//Exemplo de uso do Axios na api do GitHub

axios
  .get('https://api.github.com/repos/nikoescobar/javascript-webdriverio')
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.log(err);
  });

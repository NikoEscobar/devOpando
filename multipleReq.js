import axios from 'axios';
import config from './OmniConfig';

//Desestrutura cada config de requisição de cada ambiente para uso.
const { environment_01, environment_02, environment_03 } = config;

//Lança todas as requisições simultaneamente.
//Caso exista a necessidade de ordenação de envio, é possivel implementar uma 
//condição de espera pelo status 200 de uma requisição para então iniciar a proxima.
axios
  .all([
    axios(environment_01),
    axios(environment_02),
    axios(environment_03)
  ])
  .then(
    axios.spread((res1, res2, res3) => {
      console.log(`Request 1 response \n Status: ${res1.status} \n Body: ${res1.data.data} \n `);
      console.log(`Request 2 response \n Status: ${res2.status} \n Body: ${res2.data.data} \n `);
      console.log(`Request 3 response \n Status: ${res3.status} \n Body: ${res3.data.data} \n `);
    })
  )
  .catch(error => {
    console.log(error);
  });

  //Talvez exista forma melhor de atingir esse mesmo objetivo de forma mais performatica e elegante, 
  //Mas meu nome não é Botti!

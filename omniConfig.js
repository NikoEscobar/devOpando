/* Cada arquivo desse pode conter a config desejada para a execução de multiplas requisições. */

/*
  Aqui você pode unificar variaveis de mesmo valor, como o projectName, caso todos os ambientes possuam o mesmo,
  e elas serão enviadas no body de cada requisição respeitando os respectivos esquemas de payload.
*/

const projectName = 'Que Delicia!';
const projectDescription = 'Que absurdo!';

/*
  Esse é um objeto contendo a configuração para cada requisição.
  Partindo do pressuposto que cada ambiente possua a sua propria estrutura de criação.
  Aqui você irá defini-la.
  
  Nesse exemplo usei a mesma config para as 3 requisições, só alterei 1 parametro de cada payload
  para validação no debug de execução.
  
  Url: Um site de testes para requisições, no caso retornara o que receber.
  Data: É o body do payload do metodo POST.

  Para mais info sobre quais parametros o Axios aceita e sua forma de uso:
  https://github.com/axios/axios
*/

const config = {
  environment_01: {
    method: 'post',
    url: 'http://httpbin.org/post',
    headers: {},
    data: {
      projectName,
      projectDescription,
      batataFrita: '10 reais'
    }
  },
  environment_02: {
    method: 'post',
    url: 'http://httpbin.org/post',
    headers: {},
    data: {
      projectName,
      projectDescription,
      bacon: '100 reais'
    }
  },
  environment_03: {
    method: 'post',
    url: 'http://httpbin.org/post',
    headers: {},
    data: {
      projectName,
      projectDescription,
      infarto: 'não tem preço'
    }
  }
};

export default config;

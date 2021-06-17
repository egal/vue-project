## base-url.config.js

Конфигурирует `$config.apiBaseUrl`, которая определяется следующим
образом:
* Если это `npm run serve` - выставляется значение переменной окружения
  `API_BASE_URL` (default value - `http://domain`).
* Если это после `npm run build` - выставляется текущий домен с URL
  `/api`.

Примеры:
* Допустим сделан build и он находится по адресу `https://test.com/`,
  тогда значением `$config.apiBaseUrl` будет `https://test.com/api`.
* Допустим мы сервим приложение и задали `API_BASE_URL=https://api.com`,
  тогда значением `$config.apiBaseUrl` будет `https://api.com`.
* Допустим мы сервим приложение и не задали `API_BASE_URL`, тогда
  значением `$config.apiBaseUrl` будет `http://domain`.


## axios.config.js

Задает `baseUrl` у `$axios`, значением которого является
`$config.apiBaseUrl`.

При вызове методов `axios` без указания `baseUrl`, будет использоваться
значение по стандарту, определенное в плагине.

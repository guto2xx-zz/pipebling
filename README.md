
# PipeBling

Integração entre as plataformas [Bling](https://www.bling.com.br/home) e [Pipedrive](https://www.pipedrive.com)

## Iniciando

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Pré-requisitos

Será necessário ter o [Adonis](https://adonisjs.com/) instalado:

```
npm i -g @adonisjs/cli
```

Também é necessario ter chaves de acesso as plataformas:

* Appkey da plataforma [Bling](https://ajuda.bling.com.br/hc/pt-br/articles/360046937853-Introdu%C3%A7%C3%A3o-para-a-API-do-Bling-para-desenvolvedores-)
* Appkey da plataforma [Pipedrive](https://developers.pipedrive.com/docs/api/v1/)
* String de conexão ao [MongoDB](https://cloud.mongodb.com/)



### Rodando

Depois de instalado o Adonis de o comando para iniciar o projeto:

```
adonis serve --dev
```

lembre-se que o arquivo .End.example deve ser editado, retirando o ".exemple" de seu nome e preenchendo os campos:

```
DB_CONNECTION_STRING=
PIPEDRIVE_KEY=
BLING_KEY=
```


## Built With

* [AdonisJS](https://adonisjs.com/)- Framework usado no desenvolvimento
* [MongoDB](https://cloud.mongodb.com/) - Banco de dados
* [Lucid Mongo](https://github.com/duyluonglc/lucid-mongo) - Integração entre MongoDB e AdonisJS
* [Axios](https://github.com/axios/axios) - Chamadas em API
* [Js2xmlparser](https://www.npmjs.com/package/js2xmlparser) - Conversos de JSON para XML
* [MomentoJS](https://momentjs.com/) - Formatação de datas


## Authors

* **Guto Macedo** -  [guto2xx](https://github.com/guto2xx)

# Auth mock for PicPay users api

Mock criado para autorizar ou invalidar transações. 

## Função
Autorizar transações com o valor abaixo de 100.


## Setup

```shell
	$ npm install
```
## Running

```shell
	$ npm start
```

## Example

[Api Url on Heroku](https://peaceful-badlands-17242.herokuapp.com/transactions/authorization)


## Api Routes

http://localhost:3000/transactions/authorization

Body data example

```json
{
    "payee_id": 0,
    "payer_id": 0,
    "transaction_date": "date",
    "value": 99
}
```
Response code: 200
```json
{
    "payee_id": 0,
    "payer_id": 0,
    "transaction_date": "date",
    "value": 99
}
```
Response code: 500
```json
{
	"code": "401",
	"message": "Unauthorized"
}
```

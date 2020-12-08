# Bank-System-API
Bank System using nodeJS and mongoDB

First, clone the repository: git clone https://github.com/mateuscdiniz/Bank-System-API.git

Then install it using the dependecy manager of your preference like NPM: npm install

# /auth (POST)

{
    "cpf": "22244455567",
    "password": "teste"
}

# /bank/create (POST)

{
    "owner": "mateus",
    "cpf": "22244455567",
    "password": "teste"
}

# /bank/deposit (POST)

{
    "account": 000,
    "value": 3000
}

# /bank/withdraw (POST)

{
    "owner": "mateus",
    "account": 000,
    "value": 3000
}

# /bank (GET)
- Lista todas as contas cadastradas com seus respectivos saldos.

# /bank/:account (GET)
- Mostra as informações da conta passada.

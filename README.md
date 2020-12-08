# Bank-System-API
Bank System using nodeJS and mongoDB

First, clone the repository: git clone https://github.com/mateuscdiniz/Bank-System-API.git

Then install it using the dependecy manager of your preference like NPM: npm install

# /auth (post)

{
    "cpf": "22244455567",
    "password": "teste"
}

# /bank/create (post)

{
    "owner": "mateus",
    "cpf": "22244455567",
    "password": "teste"
}

# /bank/deposit (post)

{
    "account": 000,
    "value": 3000
}

# /bank/withdraw (post)

{
    "owner": "mateus",
    "account": 000,
    "value": 3000
}

# /bank (get)
- Lista todas as contas cadastradas com seus respectivos saldos.



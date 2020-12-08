# Bank-System-API
Bank System using nodeJS and mongoDB

First, clone the repository: git clone https://github.com/mateuscdiniz/Bank-System-API.git

Then install it using the dependecy manager of your preference like NPM: npm install

# /Auth

{
    email: teste@teste.com,
    password: "teste"
}

# /bank/create

{
    "owner": "mateus",
    "cpf": "22244455567",
    "password": "teste"
}

# /bank/deposit

{
    "account": 000,
    "value": 3000
}

# /bank/withdraw

{
    "owner": "mateus",
    "account": 000,
    "value": 3000
}



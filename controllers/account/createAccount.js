const Account = require('../../models/account-model');

module.exports = async(req, res) => {
    function generateAccountNumber() {
        let num = ''
        while (num.length < 4) {
            num += Math.floor(Math.random() * 10)
        }
        return num
    }
    
    const numberCreated = generateAccountNumber();

    let userToCreate = {
        account: numberCreated,
        value: 0,
        owner: req.body.owner,
        password: req.body.password,
        cpf: req.body.cpf,
        admin: req.body.admin ? req.body.admin : true 
    }

    try {
        const userExistsAlready = await Account.find({ cpf: userToCreate.cpf });
        if (userExistsAlready.length > 0) res.status(401).json({ msg: 'CPF já cadastrado.'})
        
        const creation = await Account.create(userToCreate)
        return res.status(201).send(creation)
    }  catch(err) {
        console.log(err)
        res.status(500).json({ msg: 'Algum erro de comunicação no processo de criação de conta ocorreu. Tente novamente.' })
    }
}
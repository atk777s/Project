const model = require('../db/models');
const uuid = require('uuid');

async function createUser(req, res) {
  try {

    const { name, email, password } = req.body;

    if (name && email && password) {
      let id = uuid.v4();
      const newUser = await model.User.create({
        name, email, password, id
      });

      return res.status(200).json({ newUser });
    }
    return res.status(200).json({ msg: 'Faltam dados obrigatórios...' });

  } catch (error) {
    console.log(error)
    return res.status(200).json({ msg: 'Erro inesperado, tente novamente mais tarde.' });
  }
}

async function logUser(req, res) {
  try {
    const { name, email, password } = req.body;


    if (name && email && password) {
      if (typeof name == 'string' && typeof email == 'string' && typeof password == 'string') {
        const loggedInUser = await model.User.findOne({
          where: { email }
        });
        if (loggedInUser === null) {
          return res.status(200).json({ msg: 'cadastre-se...' })
        }
        return res.status(200).json({ msg: 'Usuário cadastrado, faça login !' });
      } else {
        return res.status(200).json({ msg: 'Há algo de estranho, volte e tente novamente.' });
      }
    }
    return res.status(200).json({ msg: 'Faltam dados obrigatórios...' });
  } catch (error) {
    return res.status(200).json({ msg: 'Erro inesperado, tente novamente mais tarde.' });
  }
}

module.exports = {
  createUser, logUser
};
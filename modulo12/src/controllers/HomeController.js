import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Kauan',
      sobrenome: 'Hindlmayer',
      email: 'kauanhindlmayer07@gmail.com',
      idade: 17,
      peso: 76.5,
      altura: 1.82,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();

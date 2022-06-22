exports.paginaInicial = (req, res) => {
  // req.session.usuario = { nome: 'Kauan', logado: true }
  req.flash('info', 'Olá, Mundo!');
  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
}
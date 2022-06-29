const Contato = require('../models/contatoModel');

exports.index = (req, res) => {
  res.render('contato');
}; 

exports.register = async (req, res) => {
  const contato = new Contato(req.body);
  await contato.register();

  if(contato.errors.length > 0) {
    req.flash('errors', contato.errors);
    req.session.save(() => res.redirect('/contato/index'));
    return;
  }
};  
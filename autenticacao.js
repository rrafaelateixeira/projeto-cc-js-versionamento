function autenticarUsuario(email, senha) {
  if (email === "aluno@exemplo.com" && senha === "senha123") {
      return "Autenticação bem-sucedida";
  }
  return "Falha na autenticação";
}
 module.exports = { autenticarUsuario };

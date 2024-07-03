const fs = require('fs');

fs.readFile('usuarios.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const usuarios = JSON.parse(data).usuarios;
    usuarios.forEach(usuario => {
        console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}, CPF: ${usuario.cpf}, Telefone: ${usuario.telefone}`);
    });
});


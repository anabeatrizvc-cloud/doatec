var usuarios = [
    {
        nome: "Ana Beatriz",
        email: "anabeatrizicm@gmail.com",
        senha: "12345",
        tipo: "Receptor",
        telefone: "81993776474",
        cnpj: "74824596210"
    },
      {
        nome: "Emmanuelly Creio",
        email: "emconsultora21@gmail.com",
        senha: "12345",
        tipo: "Receptor",
        telefone: "81984673615",
        cnpj: "12345678910"
      },
       {
        nome: "Luiz Fernando",
        email: "euluizfernandoh@gmail.com",
        senha: "12345",
        tipo: "Doador",
        telefone: "81988199695",
        cnpj: "12345678901"
       }, 
        
       { 
        nome: "Brunno Victor",
        email: "eusoubrunnovictor@hotmail.com",
        senha: "12345",
        tipo: "Doador",
        telefone: "81984765370",
        cnpj: "12345678900"
       }
]

function entrar(elemento) {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var usuarioEncontrado = usuarios.filter(usuario => usuario.email == email && usuario.senha == password);

    if (usuarioEncontrado.length == 0) {
        alert("Usuario não existe, cadastre-se para ter acesso.")
    }

    if (usuarioEncontrado.length > 0) {
        if (usuarioEncontrado[0].tipo == "Doador") {
            window.location.href = "./envioempresa.html"
        }

        if (usuarioEncontrado[0].tipo == "Receptor") {
            window.location.href = "./envioPong.html"
        }
    }
}

function cadastrarEmpresa(elemento) {
    var emailEmpresa = document.getElementById("emailEmpresa").value;
    var senhaEmpresa = document.getElementById("senhaEmpresa").value;
    var nomeEmpresa = document.getElementById("nomeEmpresa").value;
    var telefoneEmpresa = document.getElementById("telefoneEmpresa").value;
    var cnpjEmpresa = document.getElementById("cnpjEmpresa").value;

    var existeEmpresa = usuarios.filter(usuario => usuario.email == emailEmpresa).length > 0;

    if (existeEmpresa) {
        alert("Usuário já existente, por favor, realize um novo cadastro");
    } else {
        var usuario = {
            nome: nomeEmpresa,
            email: emailEmpresa,
            senha: senhaEmpresa,
            tipo: "Doador",
            telefone: telefoneEmpresa,
            cnpj: cnpjEmpresa
        }

        usuarios.push(usuario);

        console.log(usuarios);

        window.location.href = "enviadocomsucesso.html";

    }
}

function cadastrarPong(elemento) {
    var emailpong = document.getElementById("emailpong").value;
    var nomepong = document.getElementById("nomepong").value;
    var cpfcnpjpong = document.getElementById("cpfcnpjpong").value;
    var telefonepong = document.getElementById("telefonepong").value;

    var existepong = usuarios.filter(usuario => usuario.email == emailpong).length > 0;

    if (existepong) {
        alert("Usuário já existente, por favor, realize um novo cadastro");
    } else {
        var usuario = {
            nome: nomepong,
            email: emailpong,
            senha: senhapong,
            tipo: "Receptor",
            telefone: telefonepong,
            cpfcnpj: cpfcnpjpong
        }

        usuarios.push(usuario);

        console.log(usuarios);

        window.location.href = "enviadocomsucesso.html";
    }
}


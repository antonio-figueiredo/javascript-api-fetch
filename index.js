let resultado = "";

async function listarUsuarios() {
   try{

    document.getElementById("resposta").textContent = " ";
    resultado = "";

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
   
    const json = await response.json();

    

    for (let i=0 ; i < json.length; i++)
   {
       resultado += `${json[i].name}\n${json[i].email}\n${json[i].address.city}\n${json[i].company.name}\n\n`;
      
    }

    document.getElementById("resposta").textContent = resultado;
   }
   catch(error){
    console.error("Erro ao buscar usuário:", error);
   }
}

async function buscarUsuarios(id) {

   try{

    document.getElementById("resposta").textContent = "";
    resultado = "";

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
   
    const json = await response.json();

    resultado += `${json.name}\n${json.email}\n${json.address.city}\n${json.company.name}\n\n`;
 
    if(response.ok){
      document.getElementById("resposta").textContent = resultado
    }
    else {
      document.getElementById("resposta").textContent = "Usuário não encontrado."
    }   
   }
   catch(error){
    document.getElementById("resposta").textContent = "Erro! Favor tentar novamente."  
    console.error("Erro ao buscar usuário:", error);
   }
}

async function buscarUsuarioPorEmpresa(name) {

  try {

    document.getElementById("resposta").textContent = "";

    name = name.trim();

    if (name === "") {
      resposta.textContent = "Digite o nome de uma empresa.";
      return;
    }

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    const json = await response.json();

    const resultados = json.filter(usuario =>
      usuario.company.name
        .toLowerCase()
        .includes(name.toLowerCase())
    );

    if (resultados.length === 0) {
      resposta.textContent = "Nenhuma empresa encontrada.";
      return;
    }

    const texto = resultados.map(usuario => `
Nome: ${usuario.name}
Email: ${usuario.email}
Cidade: ${usuario.address.city}
Empresa: ${usuario.company.name}
    `.trim()).join("\n\n");

    resposta.textContent = texto;

  } catch (error) {

    console.error(error);

    resposta.textContent =
      "Erro! Favor tentar novamente.";

  }
}

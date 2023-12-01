function mudarTexto() {
    let nome = prompt("Por favor, digite o seu nome")
    document.getElementById("meuParagrafo").innerHTML = (`E aí ${nome}! Você está deixando o seu site dinâmico.`)
}

let contador = 0

function incrementar() {
    contador++                                           
    document.getElementById("meuParagrafo").innerHTML = (`O contador está com ${contador} cliques`)
    document.getElementById("meuParagrafo").style.display = "block"
}

function zerarContador() {
    contador = 0
    document.getElementById("meuParagrafo").style.display = "none"
}
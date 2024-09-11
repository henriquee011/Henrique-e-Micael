// Respostas corretas (indexadas de 0 a 3)
const respostasCorretas = [0, 2, 0, 0, 3, 2, 1, 1, 2, 1]; // Respostas corretas para as 10 perguntas

function verificarRespostas() {
    let acertos = 0;
    let erros = 0;

    for (let i = 1; i <= 10; i++) {
        const resposta = document.querySelector(`input[name="pergunta${i}"]:checked`);
        if (resposta && parseInt(resposta.value) === respostasCorretas[i - 1]) {
            acertos++;
        } else {
            erros++;
        }
    }

    // Armazena os resultados no localStorage
    localStorage.setItem("acertos", acertos);
    localStorage.setItem("erros", erros);

    // Redireciona para a página de resultados
    window.location.href = "resultado.html";
}



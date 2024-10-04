const targetsRight = document.querySelectorAll('[data-anime="right"]');
const targetsDown = document.querySelectorAll('[data-anime="down"]');
const targetsLW = document.querySelectorAll('[data-anime="LW"]');
const targetsRU = document.querySelectorAll('[data-anime="RU"]');

function animeScroll() {
    const windowTop = window.pageYOffset + 170;
    console.log("Window Top:", windowTop); 
    targetsRight.forEach(function(element) {
        console.log("Right Element:", element); 
        if (windowTop > element.offsetTop) {
            element.classList.add("animation");
        } else {
            element.classList.remove("animation");
        }
    });
}



window.addEventListener('scroll', function() {
    animeScroll();
    animeScroll2();
    animeScroll3() ;
    animeScroll4();
});

document.addEventListener('DOMContentLoaded', function() {
    const titulo = document.getElementById('titulo');
    const paragrafo = document.getElementById('texto');

    const esporteSelecionado = localStorage.getItem('esporteSelecionado');
    const lesaoSelecionada = localStorage.getItem('lesaoSelecionada');

    if (esporteSelecionado) {
        // Coloca a primeira letra do esporte em maiúscula
        titulo.innerHTML = esporteSelecionado.charAt(0).toUpperCase() + esporteSelecionado.slice(1);
        
        let textoEsporte = '';
        if (esporteSelecionado === 'ciclismo') {
            textoEsporte = 'O ciclismo é uma das atividades físicas mais eficazes para melhorar a resistência cardiovascular. <br>' +
                           'Além de ser uma excelente opção de exercício de baixo impacto para quem quer evitar sobrecarga nas articulações, ele ajuda a tonificar as pernas, glúteos e músculos abdominais. <br>' +
                           'Outro benefício importante é que pedalar regularmente pode ajudar a reduzir os níveis de estresse e aumentar a sensação de bem-estar. <br><br>' +
                           '<strong>Como começar:</strong> <br>' +
                           'Comece com pequenas distâncias em terreno plano, utilizando uma bicicleta adequada ao seu tamanho e nível de habilidade. Aumente gradualmente o tempo e a intensidade à medida que seu corpo se adapta.';
        } else if (esporteSelecionado === 'natacao') {
            textoEsporte = 'A natação é um exercício completo que trabalha quase todos os grupos musculares do corpo, além de melhorar a capacidade respiratória. <br>' +
                           'Por ser de baixo impacto, é ideal para pessoas com problemas nas articulações. <br>' +
                           'A resistência da água proporciona um treino intenso sem forçar as articulações. <br><br>' +
                           '<strong>Como começar:</strong> <br>' +
                           'Procure uma piscina adequada, com supervisão profissional, especialmente se você é iniciante. Comece com nados simples, como o crawl ou o peito, e aumente a intensidade e a duração das sessões ao longo do tempo.';
        } else if (esporteSelecionado === 'caminhada') {
            textoEsporte = 'A caminhada é uma atividade acessível que melhora a saúde cardiovascular, ajuda na perda de peso e melhora o humor. <br>' +
                           'É uma forma excelente de aliviar o estresse e pode ser feita em diversos ambientes, como parques ou áreas urbanas. <br>' +
                           'Caminhar regularmente também ajuda a prevenir várias doenças crônicas. <br><br>' +
                           '<strong>Como começar:</strong> <br>' +
                           'Comece caminhando 15 a 30 minutos por dia em um ritmo confortável. Use calçados apropriados e vá aumentando gradualmente a distância e a velocidade conforme seu condicionamento melhora.';
        } else if (esporteSelecionado === 'volei') {
            textoEsporte = 'O vôlei melhora a coordenação motora, agilidade e força muscular, especialmente nos braços, pernas e core. <br>' +
                           'É um esporte social que promove o trabalho em equipe e a interação, além de desenvolver a concentração e reflexos rápidos. <br><br>' +
                           '<strong>Como começar:</strong> <br>' +
                           'Encontre uma quadra local ou participe de uma aula de vôlei para iniciantes. Pratique saques, passes e cortadas. Com o tempo, você pode se envolver em jogos mais intensos com maior velocidade e técnica.';
        } else if (esporteSelecionado === 'futebol') {
            textoEsporte = 'O futebol combina condicionamento cardiovascular, força e habilidades técnicas. <br>' +
                           'Melhora a resistência, trabalha as pernas e ajuda no desenvolvimento de habilidades sociais e estratégicas. <br><br>' +
                           '<strong>Como começar:</strong> <br>' +
                           'Para começar, participe de partidas informais com amigos ou entre em uma academia que ofereça treinamento de futebol. Pratique habilidades como passes, dribles e chutes para melhorar sua técnica.';
        } else if (esporteSelecionado === 'basquete') {
            textoEsporte = 'O basquete exige agilidade, explosão muscular e coordenação. <br>' +
                           'Ele fortalece as pernas, melhora a capacidade cardiovascular e desenvolve habilidades motoras como controle da bola e precisão nos arremessos. <br><br>' +
                           '<strong>Como começar:</strong> <br>' +
                           'Procure uma quadra de basquete e pratique fundamentos como dribles, passes e arremessos. Participe de jogos informais e aumente a intensidade à medida que sua técnica e resistência melhoram.';
        }

        let textoLesao = '';
        if (lesaoSelecionada === 'perna') {
            textoLesao = ' Você informou que tem lesão nos membros inferiores. Consulte um médico antes de praticar. Certos esportes podem agravar lesões nas pernas, então é importante seguir as orientações de um profissional de saúde para adaptar os exercícios ou escolher atividades de baixo impacto, como natação ou ciclismo estacionário.';
        } else if (lesaoSelecionada === 'bracos') {
            textoLesao = ' Você informou que tem lesão nos membros superiores. Consulte um médico antes de praticar. Esportes que exigem muito dos braços, como o vôlei ou o basquete, podem exigir adaptações ou um período de descanso para evitar a piora da lesão.';
        } else if (lesaoSelecionada === 'nao') {
            textoLesao = ' Você informou que não tem lesões, o que é excelente para começar a praticar seu esporte escolhido com segurança e foco em melhorar o desempenho.';
        }

        // Atualiza o parágrafo com o texto completo, incluindo quebras de linha
        paragrafo.innerHTML = textoEsporte + '<br><br>' + textoLesao;
    }
});
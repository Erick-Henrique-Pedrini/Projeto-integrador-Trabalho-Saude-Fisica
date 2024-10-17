function inicio() {
    window.location.href = "http://127.0.0.1:3000/Index.html";
}

function Exercicios() {
    if (!localStorage.getItem("esporteSelecionado")) {
       
        const overlay = document.createElement('div');
        overlay.className = 'overlay'
        document.body.appendChild(overlay);

       
        const PopUp = document.createElement('div');
        PopUp.className = 'popup'
        const p = document.createElement('p');
        const ok = document.createElement('button');
        ok.className = 'ok';

        p.innerHTML = "OPS, parece que você não respondeu nossas perguntas<br>por favor responda para poder acessar essa página";
        ok.innerHTML = "OK";

        PopUp.appendChild(p);
        PopUp.appendChild(ok);
        document.body.appendChild(PopUp)

       
        document.body.classList.add('no-scroll');

        // Impedir scroll e interação
        const Impedir = (event) => {
            event.preventDefault()
        };
        window.addEventListener('wheel', Impedir, { passive: false })
        window.addEventListener('touchmove', Impedir, { passive: false })

        ok.addEventListener("click", () => {
            document.body.removeChild(PopUp)
            document.body.removeChild(overlay)
            document.body.classList.remove('no-scroll')

            // nao sei como funciona mais isso volta o scroll ao normal
            window.removeEventListener('wheel', Impedir)
            window.removeEventListener('touchmove', Impedir)

            window.location.href = "http://127.0.0.1:3000/Perguntas.html";
        });
    } else {
        window.location.href = "http://127.0.0.1:3000/Exercicios.html";
    }
}

function Equipe() {
    window.location.href = "http://127.0.0.1:3000/NossaEquipe.html";
}

function Alimentacao() {
    window.location.href = "http://127.0.0.1:3000/Alimentação.html";
}
function Perguntas(){
    window.location.href = "http://127.0.0.1:3000/Perguntas.html";
}
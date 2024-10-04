document.querySelectorAll('input').forEach((input, index) => {
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        const nextInput = document.querySelectorAll('input')[index + 1];
        if (nextInput) nextInput.focus();
      }
    });
  });
  const altura = document.getElementById('altura')
  const peso = document.getElementById('peso')
  const nome = document.getElementById('nome');
  const esporte = document.getElementsByName('exercicio');
  const lesao = document.getElementsByName('lesao');
  const btn = document.getElementById('button');
  
  btn.addEventListener('click', function() {
      let esporteSelecionado = '';
      let lesaoSelecionada = '';     
      for (let i = 0; i < esporte.length; i++) {
          if (esporte[i].checked) {
              esporteSelecionado = esporte[i].value
          }
      }
      for (let i = 0; i < lesao.length; i++) {
          if (lesao[i].checked) {
              lesaoSelecionada = lesao[i].value;
          }
      }
      localStorage.setItem('esporteSelecionado', esporteSelecionado);
      localStorage.setItem('lesaoSelecionada', lesaoSelecionada);
      
      alert('Informações salvas! Navegue até a página de resultados.');
      
      nome.value = ""
      peso.value = ""
      altura.value = ""
  });
document.querySelectorAll('input').forEach((input, index) => {
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        const nextInput = document.querySelectorAll('input')[index + 1];
        if (nextInput) nextInput.focus();
      }
    });
  });
  
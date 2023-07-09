const personagens = document.querySelectorAll('.personagem');

personagens.forEach(personagem => {
   personagem.addEventListener('click', () => {
       if(window.innerWidth <450) {
           window.scrollTo({top: 0, behavior: 'smooth'});
       }

       update();
       personagem.classList.add('selecionado');

       const imagemPersonagemGrande = document.querySelector('.personagem-grande');

       const idPersonagem = personagem.getAttribute('id');

       imagemPersonagemGrande.src = `./src/img/card-${idPersonagem}.png`; //"./src/img/card-" + idPersonagem + ".png";

       const nomePersonagem = document.getElementById('nome-personagem');
       nomePersonagem.innerText = personagem.getAttribute('data-name');

       const descricaoPersonagem = document.getElementById('descricao-personagem');
       descricaoPersonagem.innerText = personagem.getAttribute('data-description');
   });
});


function update() {
    personagens.forEach(personagem => {
       personagem.classList.remove('selecionado');
    });
}

//para
const personagens = document.querySelectorAll('.personagem');
personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {
        
        //pra celular
        if(window.innerWidth < 450 ){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        //remover o personagem selecionado quando selecionar outro
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado')
        
        personagem.classList.add('selecionado')

        //pegar o elemento do personagem grande pra adicionar as infos nele
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        //alterar a imagem grande
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imghxh/${idPersonagem}.png`

        //aterar o nome
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        //alterar a descrição
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description')
    })
})
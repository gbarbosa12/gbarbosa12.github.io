const projetosLista = document.querySelectorAll("[data-tab='list'] li");
const conteudoLista = document.querySelectorAll("[data-tab='content'] section");

conteudoLista[0].classList.add("ativo");
projetosLista[0].classList.add("ativo");

function handleClick(index) {
  projetosLista.forEach((section) => {
    section.classList.remove("ativo");
  });

  conteudoLista.forEach((section) => {
    section.classList.remove("ativo");
  });

  projetosLista[index].classList.add("ativo");

  const direcao = conteudoLista[index].dataset.anime;
  conteudoLista[index].classList.add("ativo", direcao);
}

projetosLista.forEach((projeto, index) => {
  projeto.addEventListener("click", function () {
    handleClick(index);
  });
});

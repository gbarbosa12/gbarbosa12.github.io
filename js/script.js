// Função de scroll suave
function scrollSuave() {
  const linksMenu = document.querySelectorAll(".cabecalho-menu-i");
  console.log(linksMenu);

  function scrollEvent(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksMenu.forEach((link) => {
    link.addEventListener("click", scrollEvent);
  });
}

scrollSuave();

function selectProjects() {
  const projetosLista = document.querySelectorAll("[data-tab='list'] li");
  const conteudoLista = document.querySelectorAll(
    "[data-tab='content'] section"
  );

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
}

selectProjects();

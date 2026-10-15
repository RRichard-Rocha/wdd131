document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector("#menu-button");
    const navigation = document.querySelector("nav ul.navigation");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function() {
            navigation.classList.toggle("open");
        });
    }

    const impressorasArray = [
        {
            nome: "Bambu Lab A1",
            marca: "Bambu Lab",
            tipo: "Cama Móvel",
            imagem: "https://portal.bblmw.com/a1/video/print-20bbaebf8570d2/0.jpg"
        },
        {
            nome: "Creality K2",
            marca: "Creality",
            tipo: "CoreXY",
            imagem: "https://compress-file.creality.com/images/Agent/2abe7c4f-568b-48b4-b2ab-e72bf4f881e0.jpg"
        },
        {
            nome: "Prusa i3 MK4",
            marca: "Prusa Research",
            tipo: "Cama Móvel",
            imagem: "https://assets.prusa3d.com/cdn-cgi/image/width=448%2Cquality=85%2Cformat=auto%2Ctrim.top=60%2Ctrim.height=1860/25885f8f-bc08-4fe4-a02a-6df9161f706c.png"
        },
        {
            nome: "Anycubic Kobra",
            marca: "Anycubic",
            tipo: "Cama Móvel",
            imagem: "https://www.anycubicofficial.com.br/cdn/shop/files/1500x1500-S1M_76195d25-e6c5-47fd-a140-6b65b601fb80.jpg?v=1772418528&width=1500"
        }
    ];

    const galeriaContainer = document.querySelector("#galeria-container");

    function exibirImpressoras(arrayParaExibir) {
        if (!galeriaContainer) return;
        galeriaContainer.innerHTML = "";
        arrayParaExibir.forEach(function(imp) {
            const cartao = document.createElement("figure");
            cartao.innerHTML = `
                <img src="${imp.imagem}" alt="${imp.nome}" loading="lazy" width="300" height="200">
                <figcaption>
                    <strong>${imp.nome}</strong><br>
                    <span>Marca: ${imp.marca}</span>
                </figcaption>
            `;
            galeriaContainer.appendChild(cartao);
        });
    }

    exibirImpressoras(impressorasArray);

    const btnTodas = document.querySelector("#filtro-todas");
    const btnCoreXY = document.querySelector("#filtro-corexy");
    const btnCamaMovel = document.querySelector("#filtro-cama-movel");

    if (btnTodas && btnCoreXY && btnCamaMovel) {
        btnTodas.addEventListener("click", function() {
            btnTodas.classList.add("active");
            btnCoreXY.classList.remove("active");
            btnCamaMovel.classList.remove("active");
            exibirImpressoras(impressorasArray);
        });

        btnCoreXY.addEventListener("click", function() {
            btnCoreXY.classList.add("active");
            btnTodas.classList.remove("active");
            btnCamaMovel.classList.remove("active");
            const filtradas = impressorasArray.filter(imp => imp.tipo === "CoreXY");
            exibirImpressoras(filtradas);
        });

        btnCamaMovel.addEventListener("click", function() {
            btnCamaMovel.classList.add("active");
            btnTodas.classList.remove("active");
            btnCoreXY.classList.remove("active");
            const filtradas = impressorasArray.filter(imp => imp.tipo === "Cama Móvel");
            exibirImpressoras(filtradas);
        });
    }

    const projetoInput = document.querySelector("#projeto-input");
    const adicionarBtn = document.querySelector("#adicionar-btn");
    const listaProjetos = document.querySelector("#lista-projetos");

    if (adicionarBtn && projetoInput && listaProjetos) {
        let projetosArray = JSON.parse(localStorage.getItem("projetosFDM")) || [];

        function renderizarProjetos() {
            listaProjetos.innerHTML = "";
            projetosArray.forEach(function(projeto, index) {
                const li = document.createElement("li");
                li.innerHTML = `${projeto} <button class="remover-btn" data-index="${index}" aria-label="Excluir projeto ${projeto}">❌</button>`;
                listaProjetos.appendChild(li);
            });

            document.querySelectorAll(".remover-btn").forEach(function(btn) {
                btn.addEventListener("click", function() {
                    const idx = parseInt(btn.getAttribute("data-index"));
                    projetosArray.splice(idx, 1);
                    localStorage.setItem("projetosFDM", JSON.stringify(projetosArray));
                    renderizarProjetos();
                });
            });
        }

        renderizarProjetos();

        adicionarBtn.addEventListener("click", function() {
            const valorProjeto = projetoInput.value.trim();
            
            if (valorProjeto !== "") {
                projetosArray.push(valorProjeto);
                localStorage.setItem("projetosFDM", JSON.stringify(projetosArray));
                renderizarProjetos();
                projetoInput.value = "";
                projetoInput.focus();
            } else {
                alert("Por favor, digite o nome de um projeto válido.");
                projetoInput.focus();
            }
        });
    }
});

const divhtmlopcoes = document.getElementById("opcoesbuscachamp");
const divprincipal = document.getElementById("mostrarchamps");
const botaoesconderdiv = document.getElementById("botaoesconderdiv")

botaoesconderdiv.addEventListener('mouseover', function() {
    esconderOpcoesBusca();
});
divprincipal.addEventListener('click', function() {
    mostrarOpcoesBusca();
});
    document.addEventListener('click', function(event) {
        const divOpcoes = document.getElementById('opcoesbuscachamp');
        const isClickInsideDiv = divprincipal.contains(event.target) || divOpcoes.contains(event.target);
    
        if (!isClickInsideDiv) {
            esconderOpcoesBusca();
        }
    });

function mostrarOpcoesBusca() {
    const caixaOpcoesPesquisa = document.getElementById("opcoesbuscachamp");
    const url = "https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json";
    divhtmlopcoes.classList.add("Mostrardiv")
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const nomesCampeoes = Object.keys(data.data);
            const campeoesInfo = nomesCampeoes.map(nome => {
                const campeao = data.data[nome];
                return {
                    nome: campeao.name,
                    imagem: campeao.image.full
                };
            });

            console.log(campeoesInfo);

            const champsHTML = campeoesInfo.map(campeao => `
            <div>
                <a>
                    ${campeao.nome}<br>
                    </a>
                    <img src="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${campeao.imagem}" alt="${campeao.nome}">
            </div>`).join('');
            divhtmlopcoes.innerHTML = champsHTML;
        })
        .catch(error => {
            console.error("Erro ao buscar dados:", error);
            caixaOpcoesPesquisa.innerHTML = "Erro ao buscar dados.";
        });
}
    function esconderOpcoesBusca() {
        divhtmlopcoes.innerHTML = ``
        divhtmlopcoes.classList.remove("Mostrardiv")
    }

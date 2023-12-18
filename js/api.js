
let campeaodata;
let indiceSkinAtual = 0;
let nomecampeao

function primeiraLetraMaiuscula(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function enviarnome() {
    var textocampeao = document.getElementById("nomechamp")

    nomecampeaomaiusculo = textocampeao.value
    nomecampeao = primeiraLetraMaiuscula(nomecampeaomaiusculo)
    var conteudochamp = document.getElementById("conteudochamp")
    const url = `https://ddragon.leagueoflegends.com/cdn/11.14.1/data/en_US/champion/${nomecampeao}.json`;
    const cardchamp = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nomecampeao}_0.jpg`
    const iconchamp = `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${nomecampeao}.png`
    
    
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        campeaodata1 = data.version;
        campeaodata = data.data[nomecampeao];
        const passivechamp = `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/passive/${campeaodata.passive.image.full}`
        const skillschampQ = `https://ddragon.leagueoflegends.com/cdn/${campeaodata1}/img/spell/${campeaodata.spells[0].id}.png`
        const skillschampW = `https://ddragon.leagueoflegends.com/cdn/${campeaodata1}/img/spell/${campeaodata.spells[1].id}.png`
        const skillschampE = `https://ddragon.leagueoflegends.com/cdn/${campeaodata1}/img/spell/${campeaodata.spells[2].id}.png`
        const skillschampR = `https://ddragon.leagueoflegends.com/cdn/${campeaodata1}/img/spell/${campeaodata.spells[3].id}.png`
        let nomeskin
        conteudochamp.innerHTML = `
        <div class="Informações">
            <div class="card">
            <img src="${cardchamp}">
            <button id="botaotrocarskin" onclick="trocarSkin()"><img src="../image/icons8-arrow-right-96.png"></button>
            <div class="nometitulolore">        
                <h1>${nomecampeao}</h1>
                <h2>${nomeskin}</h2>
                <h2 class="titulochamp">${campeaodata.title}</h2>
                <h3>${campeaodata.blurb}</h3>
            </div>
        </div>
        <div class="skills">
            <div>
                <img src="${skillschampQ}">
                <h1>Q</h1>
            </div>
            <h3>${campeaodata.spells[0].description}</h3>
            <div>
                <img src="${skillschampW}">
                <h1>W</h1>
            </div>
            <h3>${campeaodata.spells[1].description}</h3>
            <div>
                <img src="${skillschampE}">
                <h1>E</h1>
            </div>
            <h3>${campeaodata.spells[2].description}</h3>           
            <div>
                <img src="${skillschampR}">
                <h1>R</h1>
            </div>
            <h3>${campeaodata.spells[3].description}</h3>          
            <div>
                <img src="${passivechamp}">
                <h1>Passiva</h1>
            </div>
            <h3>${campeaodata.passive.description}</h3>
        </div>
        
        <div class="icon">
            <button onclick="mostrarlore()" class="botaolore">
                <img src="${iconchamp}">
            </button>
        </div>
        </div>
        `   
    })
    setTimeout(enviarnome, 100)
    .catch(error => console.error(error));
}


function trocarSkin() {

    if (campeaodata && campeaodata.skins && indiceSkinAtual < campeaodata.skins.length - 1) {
        indiceSkinAtual++;
    } else {
        indiceSkinAtual = 0;
    }

    const novaSkin = campeaodata.skins[indiceSkinAtual].num;
    const novaImagemSkin = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nomecampeao}_${novaSkin}.jpg`;
    const cardChamp = document.querySelector('.card img');
    cardChamp.src = novaImagemSkin;
    nomeskin = campeaodata.skins[novaSkin].name
    nomeskin = campeaodata.skins[indiceSkinAtual].name;
    document.querySelector('.nometitulolore h2:nth-child(2)').textContent = nomeskin;

}   
function enviarnome() {
    var textocampeao = document.getElementById("nomechamp")
    var nomecampeao = textocampeao.value
    var conteudochamp = document.getElementById("conteudochamp")
    const url = `https://ddragon.leagueoflegends.com/cdn/11.14.1/data/en_US/champion/${nomecampeao}.json`;
    const cardchamp = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nomecampeao}_0.jpg`
    const iconchamp = `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${nomecampeao}.png`
    

    fetch(url)
    .then(response => response.json())
    .then(data => {
        var campeaodata1 = data.version;
        var campeaodata = data.data[nomecampeao];
        const passivechamp = `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/passive/${campeaodata.passive.image.full}`
        const skillschampQ = `https://ddragon.leagueoflegends.com/cdn/${campeaodata1}/img/spell/${campeaodata.spells[0].id}.png`
        const skillschampW = `https://ddragon.leagueoflegends.com/cdn/${campeaodata1}/img/spell/${campeaodata.spells[1].id}.png`
        const skillschampE = `https://ddragon.leagueoflegends.com/cdn/${campeaodata1}/img/spell/${campeaodata.spells[2].id}.png`
        const skillschampR = `https://ddragon.leagueoflegends.com/cdn/${campeaodata1}/img/spell/${campeaodata.spells[3].id}.png`

        conteudochamp.innerHTML = `
        <div class="Informações">
            <div class="card">
                <img src="${cardchamp}">
                <div class="nometitulolore">        
                    <h1>${nomecampeao}</h1>
                    <h2>${campeaodata.title}</h2>
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
      .catch(error => console.error(error));
}


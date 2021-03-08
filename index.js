const fetch = require("node-fetch");

async function characters() {
    const characters = await fetch('https://www.giantbomb.com/api/characters/?api_key=c8c34267ec67785f30773943e5d622ac3f49c4c2&filter=name:cloud')
    console.log(characters)
}

characters()
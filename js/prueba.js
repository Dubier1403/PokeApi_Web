const P = new Pokedex.Pokedex({ cacheImages: true });

const ButtonSearch = document.getElementById('SearchPokemon')
const pokemonName = document.getElementById('pokename')


ButtonSearch.addEventListener('click', getPikachu)

function getPikachu() {

    // or with Promises
    P.getPokemonByName(pokemonName.value.toLowerCase())
        .then((pokemon) => {

            // List to save and index the pokemon information
            const result = []

            for (let datos in pokemon) {
                result.push([datos, pokemon[datos]])
            }

            console.log(pokemon)

            //* Image
            const imgHolder = document.getElementById('pikachu-img-col')
            const PokeImg = document.createElement('img')
            PokeImg.src = pokemon.sprites.other['home'].front_default
            PokeImg.width = 140
            PokeImg.height = 140
            imgHolder.innerHTML = ""
            imgHolder.appendChild(PokeImg)

            //* Name
            const nameHolder = document.getElementById('pikachu-name')
            const Pokename = document.createElement('h4')
            Pokename.innerText = `${result[10][1]}`
            nameHolder.innerHTML = ""
            nameHolder.appendChild(Pokename)

            //* Id
            const idHolder = document.getElementById('pikachu-id')
            const PokeId = document.createElement('h3')
            PokeId.innerText = pokemon.id
            idHolder.innerHTML = ""
            idHolder.appendChild(PokeId)

            //* Type
            const typeHolder = document.getElementById('pikachu-type')
            const PokeType = document.createElement('h5')
            PokeType.innerText = `Type: ${result[16][1][0].type.name}`
            typeHolder.innerHTML = ""
            typeHolder.appendChild(PokeType)

            //* abilitie
            const AbHolder = document.getElementById('pikachu-abilitie')
            const PokeAbi = document.createElement('h5')
            PokeAbi.innerText = `Ability: ${result[0][1][1].ability.name}`
            AbHolder.innerHTML = ""
            AbHolder.appendChild(PokeAbi)

            //* Weigth
            const WeHolder = document.getElementById('pikachu-weight')
            const PokeWeight = document.createElement('h5')
            PokeWeight.innerText = `Weight: ${result[17][1]}`
            WeHolder.innerHTML = ""
            WeHolder.appendChild(PokeWeight)

            //* height
            const heHolder = document.getElementById('pikachu-height')
            const PokeHeight = document.createElement('h5')
            PokeHeight.innerText = `Height: ${result[4][1]}`
            heHolder.innerHTML = ""
            heHolder.appendChild(PokeHeight)
            
            //* Not found
            const foundHolder = document.getElementById('Not-found')
            const foundtext = document.createElement('h5')
            foundtext.innerText = 
            foundHolder.innerHTML = ""
            foundHolder.appendChild(foundtext)
        })
        .catch((pokemon) => {
            //* Image
            const imgHolder = document.getElementById('pikachu-img-col')
            const PokeImg = document.createElement('img')
            PokeImg.src = './css/Img/Pikallora.gif'
            PokeImg.width = 210
            PokeImg.height = 140
            imgHolder.innerHTML = ""
            imgHolder.appendChild(PokeImg)

            //* Name
            const nameHolder = document.getElementById('pikachu-name')
            const Pokename = document.createElement('h5')
            Pokename.innerText = 'No encontrado'
            nameHolder.innerHTML = ""
            nameHolder.appendChild(Pokename)

            //* Id
            const idHolder = document.getElementById('pikachu-id')
            const PokeId = document.createElement('h2')
            PokeId.innerText = '404'
            idHolder.innerHTML = ""
            idHolder.appendChild(PokeId)

            //* Type
            const typeHolder = document.getElementById('pikachu-type')
            const PokeType = document.createElement('h5')
            typeHolder.innerHTML = ""
            typeHolder.appendChild(PokeType)

            //* abilitie
            const AbHolder = document.getElementById('pikachu-abilitie')
            const PokeAbi = document.createElement('h5')
            AbHolder.innerHTML = ""
            AbHolder.appendChild(PokeAbi)

            //* Weigth
            const WeHolder = document.getElementById('pikachu-weight')
            const PokeWeight = document.createElement('h5')
            WeHolder.innerHTML = ""
            WeHolder.appendChild(PokeWeight)

            //* height
            const heHolder = document.getElementById('pikachu-height')
            const PokeHeight = document.createElement('h5')
            heHolder.innerHTML = ""
            heHolder.appendChild(PokeHeight)

            //* NotFound
            const foundHolder = document.getElementById('Not-found')
            const foundtext = document.createElement('h5')
            foundtext.innerText = 'Es una pena. Este pokemon aún no se encuentra disponible. ¿Quieres intentar de nuevo?'
            foundHolder.innerHTML = ""
            foundHolder.appendChild(foundtext)
        })
}


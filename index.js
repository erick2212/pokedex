
function sub()
{
    
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    var nombre = document.getElementsByName("pok")[0].value;
    var pokemon = url+nombre

    fetch(pokemon)
    .then(response => response.json())
    .then(data =>
        {
            let element = document.getElementById('elem')
            element.innerHTML = `
            <p>Nombre: ${data.name}</p>
            <p>Altura: ${data.height}</p>
            <p>Peso: ${data.weight} cm</p>
            `;
            console.log(data)
        })
    .catch(err => {
        console.log("err--> ", err)
        alert("no se encontro tu pokemon");
    })
};
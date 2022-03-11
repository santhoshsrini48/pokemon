let pokemon =document.querySelector('.pokemonName');
let pokemonFrontImage = document.querySelector('.front-image');
const pokemonBackImage = document.querySelector('.back-image');

let pokemons = [];
let pokemonList =[];
console.log(pokemons);
function search(){
  const pokemonId = document.getElementById('search-pokemon').value;
  render(pokemonId);
}
function render(pokemonId){

  console.log(pokemonId);
  fetch(src=`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.log(data['name']);
    pokemon.innerHTML = data['name'] || '';
    pokemonFrontImage.src = data['sprites']['front_default'] ;
    pokemonBackImage.src = data['sprites']['back_default'] ;
    pokemons.push(pokemonFrontImage.src);

  })

}

function save(){

    console.log('POKEMONS'  +pokemons);

    localStorage.setItem("pokemonList", JSON.stringify(pokemons));
    display();
}

document.addEventListener('DOMContentLoaded', display =() =>{

  pokemonList = JSON.parse(localStorage.getItem("pokemonList"));

  let carouselslides = "";
  for (i = 0; i < pokemonList.length; i++) {
   let  pokemon = pokemonList[i];
    carouselslides +=   `<div class="item">
<img src=${pokemon} class="carouselimage"  onclick="sldieClick(${i})">
<button onclick="remove(${i})"  >remove</button>
</div>`
  }

  document.getElementById("carouselElement").innerHTML = carouselslides
});

function remove(i){
  let pokemonID = [];
  pokemonID = JSON.parse(localStorage.getItem("pokemonList"));
  // localStorage.removeItem("pokemonList");
  console.log(pokemonID.length);
   // pokemonID.slice(i, 1);
  pokemonID = pokemonID.filter((ele,index)=> {
    return index !== i;
  })
  pokemons = pokemons.filter((ele,index)=> {
    return index !== i;
  })
  console.log("value of i "+ i);
  console.log("temp "+ pokemonID.length);
  localStorage.setItem("pokemonList", JSON.stringify(pokemonID));
  display();
}

function sldieClick(i){
  let pokemonLoad =[];
  console.log(i);
  pokemonLoad = JSON.parse(localStorage.getItem("pokemonList"));
  console.log("here "+pokemonLoad[i]);
  pokemonFrontImage.src = pokemonLoad[i];

}

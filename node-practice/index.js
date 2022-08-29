const superheroes = require('superheroes');
const supervillains = require('supervillains');
const villains = require('supervillains');  

var heroName = superheroes.random();
var villainNames = villains.random();

console.log(heroName + " vs " + villainNames);
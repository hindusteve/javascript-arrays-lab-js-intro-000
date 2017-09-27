const app = "I don't do much."

function Arrays () {
  kittens = ['Milo', 'Otis', 'Garfield']
}

function kittens(){
  var kittens = ["Milo", "Otis", "Garfield"]
}

function destructivelyAppendKitten(name) {
  kittens.push(name)

}

function destructivelyPrependKitten(name){

<<<<<<< HEAD
  kittens.unshift(name)
=======
  kittens.shift(name)
>>>>>>> 70292415eaa5f616d18986b248e9872463238786

}

function destructivelyRemoveLastKitten() {

  kittens.pop()

}

function destructivelyRemoveFirstKitten(){
<<<<<<< HEAD
  kittens.shift()
=======
  kittens.unshift()
>>>>>>> 70292415eaa5f616d18986b248e9872463238786

}

function appendKitten(name) {
    var newKittens = [...kittens, name]

    return newKittens
}

function prependKitten(name) {

  var newKittens = [name, ...kittens]

  return newKittens
}

function removeLastKitten(){

  var newKittens = kittens.slice(0, kittens.length - 1)

  return newKittens
}
<<<<<<< HEAD


function removeFirstKitten(){

  var newKittens = kittens.slice(1)

  return newKittens
}
=======
>>>>>>> 70292415eaa5f616d18986b248e9872463238786

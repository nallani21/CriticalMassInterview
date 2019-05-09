var song = `Baby Shark doo doo doo doo doo doo
    Baby Shark doo doo doo doo doo doo
    Baby Shark doo doo doo doo doo doo
    Baby Shark!
    Daddy Shark doo doo doo doo doo doo
    Daddy Shark doo doo doo doo doo doo
    Daddy Shark doo doo doo doo doo doo
    Daddy Shark!
    Mommy Shark doo doo doo doo doo doo
    Mommy Shark doo doo doo doo doo doo
    Mommy Shark doo doo doo doo doo doo
    Mommy Shark!
    Grandpa Shark doo doo doo doo doo doo
    Grandpa Shark doo doo doo doo doo doo
    Grandpa Shark doo doo doo doo doo doo
    Grandpa Shark!
    Grandma Shark doo doo doo doo doo doo
    Grandma Shark doo doo doo doo doo doo
    Grandma Shark doo doo doo doo doo doo
    Grandma Shark!`;

function main() {
  var array = song.split("\n"); //split string
  makeUL(array);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/*The purpose of this function is to ender each line of that array to the DOM
  as an `<li>`within the `#lyrics-list` unordered list. The function takes
  in an array as the parameter, iterates through that array and inserts every
  element into the unordered list with every iteration.*/
async function makeUL(array) {
  for (i = 0; i < array.length; i++) {
    var node = document.createElement("LI"); // Create a <li> node
    var textnode = document.createTextNode(array[i]); // Create a text node
    await sleep(1500); //wait 1.5 seconds to add new element to unordered list
    node.appendChild(textnode); // Append the text to <li>
    document.getElementById("lyrics-list").appendChild(node); // Append <li> to <ul> with id="lyrics-list"
  }
}

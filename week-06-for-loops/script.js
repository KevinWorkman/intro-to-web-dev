// Replace this speeh with your own.
// Notice the `` backticks, which let you split your string into multiple lines.
const speech = `A doughnut or donut is a type of food made from leavened fried dough It is popular in many countries and is prepared in various forms as a sweet snack that can be homemade or purchased in bakeries, supermarkets, food stalls, and franchised specialty vendors. Doughnut is the traditional spelling, while donut is the simplified version; the terms are often used interchangeably.
Doughnuts are usually deep fried from a flour dough, but other types of batters can also be used. Various toppings and flavorings are used for different types, such as sugar, chocolate or maple glazing. Doughnuts may also include water, leavening, eggs, milk, sugar, oil, shortening, and natural or artificial flavors.
The two most common types are the ring doughnut and the filled doughnut, which is injected with fruit preserves (the jelly doughnut), cream, custard, or other sweet fillings. Small pieces of dough are sometimes cooked as doughnut holes. Once fried, doughnuts may be glazed with a sugar icing, spread with icing or chocolate, or topped with powdered sugar, cinnamon, sprinkles or fruit. Other shapes include balls, flattened spheres, twists, and other forms. Doughnut varieties are also divided into cake (including the old-fashioned) and yeast-risen type doughnuts. Doughnuts are often accompanied by coffee or milk. They are sold at doughnut shops, convenience stores, petrol/gas stations, cafes or fast food restaurants.
`;

// Remove punctuation from the speech. You might have to modify this if your
// speech contains other punctuation.
const speechPunctuationRemoved = speech.replace(',', '').replace('.', '');

// Use a regular expression to split the speech into individual words. You
// shouldn't need to change this, unless you want to split on characters other
// than whitespace.
const wordsArray = speechPunctuationRemoved.split(/\s+/);

// Displays words that have more than 5 characters.
function displayLongWords() {
  const longWordsElement = document.getElementById('long-words');

  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    // If the word has more than 5 characters, display it in the page.
    if(word.length > 5) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      longWordsElement.appendChild(wordElement);
    }
  }
}


function displayShortWords() {
  const shortWordsElement = document.getElementById('short-words');

  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    // If the word has more than 5 characters, display it in the page.
    if(word.length < 5) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      shortWordsElement.appendChild(wordElement);
    }
  }
}

function displayLetterDWords(){
  const letterWordsElement = document.getElementById('letter-words');

  for(let word of wordsArray){
    if(word.startsWith('d')){
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      letterWordsElement.appendChild(wordElement);
    }
  }
}

function displayLongestWord(){
  const longestWordElement = document.getElementById('longest-word');
  let longestWord = wordsArray[0];
  for(let i = 1; i < wordsArray.length; i++){
    if(wordsArray[i].length > longestWord.length){
      longestWord = wordsArray[i];
    }
  }
  const wordElement = document.createElement('li');
  wordElement.innerText = longestWord;
  longestWordElement.appendChild(wordElement);
}


function displayShortestWord() {
  const shortestWordElement = document.getElementById('shortest-word');
  let shortestWord = wordsArray[0];
  for (let i = 1; i < wordsArray.length; i++) {
    if(wordsArray[i].length < shortestWord.length) {
      shortestWord = wordsArray[i];
    }
  }
  const wordElement = document.createElement('li');
   wordElement.innerText = shortestWord;
   shortestWordElement.appendChild(wordElement);
 }


  function displayEveryThirdWord() {
    let everyThirdWordElement = document.getElementById('third-words');
    for(let i = 0; i < wordsArray.length; i +=3){
      const word = wordsArray[i];
      const wordElement = document.createElement('li');
       wordElement.innerText = word;
       everyThirdWordElement.appendChild(wordElement);
    }
  }

  function displayLeastCommonWords() {
    let leastCommonWordsElement = document.getElementById('least-common-words');
    let commonWords = ['Doughnut', 'doughnuts', 'a', 'is', 'dough', 'are', 'sweet', 'as', 'sugar', 'icing', '-'];
    for(let word of wordsArray){
      if(!commonWords.includes(word)){
        const wordElement = document.createElement('li');
         wordElement.innerText = word;
         leastCommonWordsElement.appendChild(wordElement);
      }
    }
  }
// TODO: Define your own functions here!

function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;

  displayLongWords();
  displayShortWords();
  displayLongestWord();
	displayShortestWord();
	displayEveryThirdWord();
	displayLetterDWords();
  displayLeastCommonWords();
  // TODO: Call your functions here!
}

// Replace this speeh with your own.
// Notice the `` backticks, which let you split your string into multiple lines.
const speech = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.`;

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

// TODO: Define your own functions here!

function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;

  displayLongWords();

  // TODO: Call your functions here!
}
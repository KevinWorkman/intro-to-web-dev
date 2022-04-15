// When this function is called, it takes the user's answer to the first
// question and uses if statements to check whether it's correct.
function submitAnswerOne() {
  // Get answer one's input element
  const answerOneInput = document.getElementById('answer-one-input');
  // Get the text from answer one's input element
  const answerOne = answerOneInput.value;

  if(answerOne == 'Appalachian Mountains') {
    alert("That's right!");
    hide('question-one');
    show('question-two');
  } else if(answerOne == 'Apalachian Mountains') {
    alert('You missed a p');
  } else {
    alert('It is not only in Pennsylvania')
  }
}

// When this function is called, it takes the user's answer to the second
// question and uses if statements to check whether it's correct.
function submitAnswerTwo() {
  // Get answer two's input element
  const answerTwoInput = document.getElementById('answer-two-input');
  // Get the number from answer two's input element
  const answerTwo = answerTwoInput.value;

  if(answerTwo == 4) {
    alert("That's right!");
    hide('question-two');
    show('question-three');
  } else if(answerTwo < 4) {
    alert('Umm, you should know this');
  } else {
    alert('Do not expect a hint, you probably made a typo')
  }
}
function submitAnswerThree() {
  // Get answer two's input element
  const answerThreeInput = document.getElementById('answer-three-input');
  // Get the number from answer two's input element
  const answerThree = answerThreeInput.value;
if(answerThree == 'seven') {
  alert("That's right!");
  hide('question-three');
  show('question-four');
} else if(answerThree == 'what is the answer?') {
  alert('Its seven');
} else {
  alert('Try asking "what is the answer?"')
}
}
function submitAnswerFour() {
  // Get answer two's input element
  const answerFourInput = document.getElementById('answer-four-input');
  // Get the number from answer two's input element
  const answerFour = answerFourInput.value;
if(answerFour == 'Mercury') {
  alert("That's right!");
  hide('question-four');
  show('question-five');
} else if(answerFour == 'Pluto') {
  alert('Sorry, he has demoted ages ago');
} else {
  alert('Its not Mars')
}
}
function submitAnswerFive() {
  // Get answer two's input element
  const answerFiveInput = document.getElementById('answer-five-input');
  // Get the number from answer two's input element
  const answerFive = answerFiveInput.value;
if(answerFive == 4) {
  alert("That's right!");
  hide('question-five');
  show('done');
} else if(answerFive == 7) {
  alert('Close, it was the question before that one.');
} else {
  alert('It was a number')
}
}









// Helper function that takes an ID and shows the element with that ID.
function show(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}

// Helper  function that takes an ID and hides the element with that ID.
function hide(id) {
  const element = document.getElementById(id);
  element.style.display = 'none';
}

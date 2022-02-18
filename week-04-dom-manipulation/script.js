
// When this function is called, it takes the values from the inputs and adds
// them to the outputs.
function fillOutputs() {

  // Get the adjective input element
  const adjectiveOneInput = document.getElementById('adjective-one-input');
  // Get the text from the input element
  const adjectiveOne = adjectiveOneInput.value;

  // Get the adjective output element
  const adjectiveOneOutput = document.getElementById('adjective-one-output');
  // Set the text of the input element
  adjectiveOneOutput.innerText = adjectiveOne;

  const nounOneInput = document.getElementById('noun-one-input');
  // Get the text from the input element
  const nounOne = nounOneInput.value;

  // Get the adjective output element
  const nounOneOutput = document.getElementById('noun-one-output');
  // Set the text of the input element
  nounOneOutput.innerText = nounOne;

  const verbOneInput = document.getElementById('verb-one-input');
  // Get the text from the input element
  const verbOne = verbOneInput.value;

  // Get the adjective output element
  const verbOneOutput = document.getElementById('verb-one-output');
  // Set the text of the input element
  verbOneOutput.innerText = verbOne;

  const nounTwoInput = document.getElementById('noun-two-input');
  // Get the text from the input element
  const nounTwo = nounTwoInput.value;

  // Get the adjective output element
  const nounTwoOutput = document.getElementById('noun-two-output');
  // Set the text of the input element
  nounTwoOutput.innerText = nounTwo;

  const adverbOneInput = document.getElementById('adverb-one-input');
  // Get the text from the input element
  const adverbOne = adverbOneInput.value;

  // Get the adjective output element
  const adverbOneOutput = document.getElementById('adverb-one-output');
  // Set the text of the input element
  adverbOneOutput.innerText = adverbOne;





  // Get the output container element
  const outputDiv = document.getElementById('output');
  // Make the output container element visible
  outputDiv.style.display = 'block';












}


// When this function is called, it takes the values from the inputs and adds
// them to the outputs.
function fillOutputs() {

  // Get the adjective input element
  const adjectiveOneInput = document.getElementById('ajdective-one-input');
  // Get the text from the input element
  const adjectiveOne = adjectiveOneInput.value;

  // Get the adjective output element
  const adjectiveOneOutput = document.getElementById('adjective-one-output');
  // Set the text of the input element
  adjectiveOneOutput.innerText = adjectiveOne;

  // Get the output container element
  const outputDiv = document.getElementById('output');
  // Make the output container element visible
  outputDiv.style.display = 'block';
}
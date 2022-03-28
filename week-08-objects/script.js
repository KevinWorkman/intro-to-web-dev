// Array of objects representing a todo list.
// Modify this array to contain your own list.
const FoodArray = [
  {label: 'Pizza', Greasy: 4, Sweetness: 1,Saltiness:3 },
  {label: 'Cucumber', Greasy: 0, Sweetness: 1,Saltiness:0},
  {label: 'Chicken wings', Greasy: 2, Sweetness: 2,Saltiness:3},
  {label: 'Italian Sausage', Greasy: 5, Sweetness: 3,Saltiness:2},
  {label: 'Stir Fry', Greasy: 2, Sweetness: 4,Saltiness:4},
  {label: 'Cheeseburger', Greasy: 3, Sweetness: 1,Saltiness:3},
  {label: 'Cereal', Greasy: 0, Sweetness: 5,Saltiness:2},
  {label: 'French Fries', Greasy: 1, Sweetness: 1,Saltiness:5},
  {label: 'Shrimp', Greasy: 1, Sweetness: 1,Saltiness:0},
  {label: 'Fish', Greasy: 1, Sweetness: 1,Saltiness:2},
];

// Loads the content into the page.
function loadContent() {
  // This line of code sorts the array alphabetically by the task labels.
  // Modify this to sort your data by a different field, or just delete it.
  FoodArray.sort((a, b) => compare(a.label, b.label));

  loadTable();
  loadLeastGreasy();
  loadAverageGreasy();
}

// Adds a task to the array and reloads the page content.
function addNewFood() {
  const newFoodLabel = document.getElementById('label-input').value;
  const newFoodGreasy = document.getElementById('Greasy-input').value;
  const newFoodSweetness = document.getElementById('Sweetness-input').value;
  const newFoodSaltiness = document.getElementById('Saltiness-input').value;
  const newFood = {label: newFoodLabel, Greasy: newFoodGreasy,
      Sweetness: newFoodSweetness, Saltiness: newFoodSaltiness};
  FoodArray.push(newFood);

  loadContent();
}

// Iterates over the data array to create a table.
function loadTable() {
  const tableElement = document.createElement('table');

  // Create a header row.
  const headerRowElement = document.createElement('tr');
  headerRowElement.appendChild(createElement('th', 'Index'));
  headerRowElement.appendChild(createElement('th', 'Food'));
  headerRowElement.appendChild(createElement('th', 'Greasiness (0-5)'));
  headerRowElement.appendChild(createElement('th', 'Sweetness (0-5)'));
  headerRowElement.appendChild(createElement('th', 'Saltiness (0-5)'));
  tableElement.appendChild(headerRowElement);

  // Iterate over the array and create a table row for each object.
  for (let i = 0; i < FoodArray.length; i++) {
    const Food = FoodArray[i];
    const rowElement = document.createElement('tr');
    rowElement.appendChild(createElement('td', i));
    rowElement.appendChild(createElement('td', Food.label));
    rowElement.appendChild(createElement('td', Food.Greasy));
    rowElement.appendChild(createElement('td', Food.Sweetness));
    rowElement.appendChild(createElement('td', Food.Saltiness));
    tableElement.appendChild(rowElement);
  }

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(tableElement);
}

// Displays the name of the shortest task.
function loadLeastGreasy(){
  // Assume the first task is shortest
  let Leastgreasy = FoodArray[0];

  // Starting with the second task, look for a shorter task
  for (let i = 1; i < FoodArray.Greasy; i++) {
    const Food = FoodArray[i];
    // If this task is shorter than the previous shortest, it's now the shortest
    if(food.greasy < LeastGreasy.greasy) {
      LeastGreasy = food;
    }
  }
  document.getElementById('Least-Greasy').innerText = Leastgreasy.label;
}

function loadAverageGreasy (){
  let total = 0;
 for(let i = 0; i <FoodArray.length; i++){
   const Food = FoodArray[i];
    total += Number(Food.greasy);

 }
  let Average = total / FoodArray.length;
  document.getElementById('average-Greasy').innerText = Average
  }






// Helper function that creates an element that contains text content.
function createElement(tag, text) {
  const element = document.createElement(tag);
  element.innerText = text;
  return element;
}

// Helper function that compares two values.
// Works on strings, numbers, and dates.
function compare(valueOne, valueTwo) {
  // valueOne comes before valueTwo
  if (valueOne < valueTwo) {
    return -1;
  }

  // valueOne comes after valueTwo
  if (valueOne > valueTwo) {
    return 1;
  }

  // valueOne and valueTwo are equal
  return 0;
}

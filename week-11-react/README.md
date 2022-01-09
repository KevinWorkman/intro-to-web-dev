# Week 11: React

This week, you're revisiting and "Reactifying" your project from week 8.

During week 8, you used an array of objects to store data, and then you built a
webpage from that data using functions like `document.getElementById()` and
`appendChild()`, and fields like `innerHTML` and `innerText`. This week, you're
making a website using the same data, but you're using React to build the page
instead of manipulating the DOM yourself.

You can start with the example file in this directory, or you can copy the files
from week 8 into this directory, or you can start from scratch if that's easier.

When you're done, your code should contain:

- A React app that shows a list of objects. The example in this directory shows
  a list of tasks in a table, but you can show any kind of data you want using
  any HTML elements.
- Two React components.
- The ability to add a new object to the list.
- The ability to remove an object from the list.

On the other hand, your code should **not** contain the following:

- Any references to `getElementById()` except to get the root element
- Any references to `getElementsByClassName()`, `getElementsByTagName()`, or any
  other non-React approaches to getting elements
- Any references to `createElement()`, or any other non-React approaches for
  creating elements
- Any references to innerText, innerHTML, appendChild(), or any other non-React
  approaches for modifying the DOM
- Global variables that maintain state outside of React's state and properties.

Optional bonus challenge: if you finish all of the above and want some more
practice, try adding the ability for users to edit existing data, or go back and
add React to your previous projects.
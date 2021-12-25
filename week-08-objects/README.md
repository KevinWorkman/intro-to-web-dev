# Week 8: Objects

This week, you'll use an array of objects to represent a list of data, and
you'll write JavaScript that builds a page based on that data.

The example uses a list of tasks, each with a label and a time field. Your list
can be anything as long as it contains at least 10 items, each with at least 3
fields. Here are a few ideas:

- Your 10 favorite movies, where each movie has a title, rating, and duration
- Your 10 favorite books, where each book has a title, author, and page count
- Your 10 favorite places, where each place has a name, image URL, and date you
  visited

Create an HTML and JavaScript file that contains an array of at least 10 objects
with at least 3 fields, and then write JavaScript code that builds the page
based on the objects in the array. You can start with the example index.html and
script.js files, or it might be easier to start with empty files.

When you're done, your code should contain at least the following:

- An array with 10 objects, with at least 3 fields in each object
- A for loop that builds the page HTML based on the values in the array
- A for loop that picks the "best" object and displays it. The meaning of "best"
  is up to you (i.e. the highest-rated movie, or the longest book), and it's up
  to you how you want to display it.
- A for loop that calculates a total or average. Again, it's up to you what this
  means: it could be the average movie rating, or the total number of pages,
  etc.
- Input fields that let the user add a new item to the array. When the user adds
  an item, that item should be displayed in the page along with the first 10
  items, and in any calculated sections. For example if the user adds a new
  "best" item, that section should update.

Modifying your CSS is optional. You might want to add a few CSS rules to format
your data, but make sure your JavaScript works before worrying too much about
what it looks like.

Write your code one small piece at a time. Don't try to get everything working
at once! Write the code for displaying a single object with just a couple
fields, and then test that single object in your browser. Check your browser's
developer tools console for errors. When you have a single object working, then
add an array of objects, or add another field to your first object. Repeat that
process until you've satsified the requirements listed above.

Optional bonus challenge: if you finish all of the above and want some more
practice, try adding the ability for the user to edit or delete existing data.
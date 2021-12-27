# Week 9: Fetch

This week, you'll use the `fetch()` function to create an alternative
visualization of a Wikipedia article.

It's up to you which Wikipedia article(s) you choose.

Modify index.html and script.js to visualize your Wikipedia article. Use the
`fetch()` function to call Wikipedia's API, and then parse the JSON and output
HTML to render your visualization to the page.

When you're done, your code should contain at least the following:

- Calling the `fetch()` function and parsing the resulting JSON
- Usage of at least 5 properties of your article. Some interesting options might
  be text, categories, externallinks, links, images, sections, and iwlinks. See
  this page for a full list:
  https://en.wikipedia.org/w/api.php?action=help&modules=parse
- At least 3 different CSS rules that style content.

Write your code one small piece at a time. Don't try to get everything working
at once! Write the code for displaying a single piece of data for your article,
and then test that in your browser. Check your browser's developer tools console
for errors. When you have that working, then add another piece of data. Repeat
that process until you've satsified the requirements listed above.

Optional bonus challenge: if you finish all of the above and want some more
practice, try combining multiple Wikipedia articles into a single visualization!
# Week 12: Accessibility

This week, you're auditing your previous projects for accessibility issues.

There are a few ways to audit your previous projects:

- Manually test them. Does tab ordering work?
- Test them with your browser's developer tools, e.g. Lighthouse in Chrome. What
  issues are automatically detected?
- Try them using a screen reader or other assistive devices. What's hard about
  using your page?

When you're done, you should have fixed at least 3 different accessibility
issues. Here are a few examples:

- Do all of your images have `alt` attributes?
- Does all of your text have enough contrast?
- Do all of your input elements have labels?
- Are you using semantic HTML, e.g `<h1>` tags instead of `<p>` tags styled to
  look like headings?
- Are all of your links actionable, e.g. "click here to view the thing" instead
  of "here"?

It's up to you which issues you fix, and on what pages. Fixing the same issue
multiple times doesn't count! So it's great if you want to add `alt` attributes
to every image, but that only counts as fixing one issue.

Optional bonus challenge: if you finish all of the above and want some more
practice, check out this GitHub search for open source projects with
accessibility issues:
https://github.com/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22+accessibility
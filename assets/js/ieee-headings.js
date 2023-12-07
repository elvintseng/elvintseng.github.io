document.addEventListener('DOMContentLoaded', (event) => {
    const headings = document.querySelectorAll('.ieee-heading');
    headings.forEach(heading => {
      // Split the heading text by spaces to get individual words
      const words = heading.textContent.split(' ');
      // Clear the current text content
      heading.textContent = '';
      words.forEach(word => {
        // Create a new span element for each word
        const span = document.createElement('span');
        // Use a regular expression to check if the word is a small word
        if (!/^(of|in|and|to|for|with|on|at|by|from)$/.test(word.toLowerCase())) {
          span.classList.add('significant-word');
        }
        span.textContent = word + ' '; // Add the word and a space to the span
        heading.appendChild(span); // Append the span to the heading
      });
    });
  });
  
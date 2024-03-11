const textElements = document.querySelectorAll('.text-container h2');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

textElements.forEach(element => observer.observe(element));
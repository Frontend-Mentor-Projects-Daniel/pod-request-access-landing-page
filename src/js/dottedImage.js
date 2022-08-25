const body = document.body;
const dottedImage = document.querySelector('[data-dotted-image]');

const observer = new ResizeObserver((entries) => {
  const body = entries[0];
  const isMobile = body.contentRect.width <= 768;
  if (isMobile) {
    dottedImage.classList.add('hide');
  } else {
    dottedImage.classList.remove('hide');
  }
});

observer.observe(body);

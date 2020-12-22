document.querySelectorAll('.accordion_button').forEach(button => {

  button.addEventListener('click', () => {

    const accordionContent = button.nextElementSibling;

    button.classList.toggle('.accordion__button--active');

    if (button.classList.contains('.accordion__button--active')) {
      accordionContent.style.max-height === accordionContent.scrollHeight + 'rem';
    } else {
      accordionContent.style.max-height === 0;
    }
  });
});


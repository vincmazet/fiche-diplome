document.addEventListener('DOMContentLoaded', function() {

  // Défilement de la page lors du clic sur un lien
  const links = document.querySelectorAll('.content a');
  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Ajoute un conteneur de défilement autour des images
  const scrollContainer = document.createElement('div');
  scrollContainer.classList.add('scroll-container');

  document.body.appendChild(scrollContainer);
  const imageContainers = document.querySelectorAll('.screen');
  imageContainers.forEach(container => { scrollContainer.appendChild(container); });

});

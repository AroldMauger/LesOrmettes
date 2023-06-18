document.addEventListener('DOMContentLoaded', function() {
  var currentIndex = 0;
  var images = document.getElementsByClassName('images_carrousel');
  var prevButton = document.getElementById('prevButton');
  var nextButton = document.getElementById('nextButton');
  var interval;

  function showImage(index) {
    // Masquer toutes les images
    for (var i = 0; i < images.length; i++) {
      images[i].style.display = 'none';
    }
    // Afficher l'image à l'index spécifié
    images[index].style.display = 'block';
  }

  function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    showImage(currentIndex);
  }

  function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage(currentIndex);
  }

  function startInterval() {
    interval = setInterval(nextImage, 3000);
  }

  function stopInterval() {
    clearInterval(interval);
  }

  // Afficher la première image au chargement de la page
  showImage(currentIndex);

  // Associer les événements de clic aux boutons précédent et suivant
  prevButton.addEventListener('click', prevImage);
  nextButton.addEventListener('click', nextImage);

  // Démarrer l'intervalle de changement automatique des slides
  startInterval();

  // Ajouter la gestion des événements de survol des images
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseenter', stopInterval);
    images[i].addEventListener('mouseleave', startInterval);
  }
});

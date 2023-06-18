document.addEventListener('DOMContentLoaded', function() {
    var currentIndex = 0;
    var images = document.getElementsByClassName('images_carrousel_bowling');
    var prevButton = document.getElementById('prevButton_bowling');
    var nextButton = document.getElementById('nextButton_bowling');
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
  
    
  
    // Afficher la première image au chargement de la page
    showImage(currentIndex);
  
    // Associer les événements de clic aux boutons précédent et suivant
    prevButton.addEventListener('click', prevImage);
    nextButton.addEventListener('click', nextImage);
  

  });
  
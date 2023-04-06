window.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main')

    // $(document).ready(function() {
    // window.onscroll = scrollPage;
    main.onscroll = scrollPage;

  const navbar = document.getElementById("navbar");


  function scrollPage() {
    // if (window.pageYOffset >= 700) {
      if (main.firstElementChild.getBoundingClientRect().top <= -700) {
      navbar.classList.remove("is-hidden")
    } else {
      navbar.classList.add("is-hidden");
      navbar.classList.add("closed");
    }
  }

  const toggleMenu = () => {
    navbar.classList.toggle('closed');
  }

  const menutoggle = document.querySelector('#navbar a.toggle');
  menutoggle.addEventListener('click', toggleMenu);
  // } );


  function showImage(imageId, event) {
    event.preventDefault();
    var image = document.getElementById(imageId);
    if (image.style.display === "none") {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  }

  const imageModalLinks = document.querySelectorAll('.to-modal-image')

  imageModalLinks.forEach(function (imageModalLink) {


    imageModalLink.addEventListener('click', function (e) {


      var imageModalLinkId = this.getAttribute('data-link-id')

      var imageModalTarget = document.querySelectorAll('[data-target-id="' + imageModalLinkId + '"]');

      imageModalTarget[0].classList.remove('is-hidden');

      e.preventDefault();

    })

  })



  const imageModals = document.querySelectorAll('.modal-image')

  imageModals.forEach(function (imageModal) {


    imageModal.addEventListener('click', function (e) {


      this.classList.add('is-hidden');

    })

  });
})
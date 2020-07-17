/* ------------------------------------------------------------------------------------------------------
   ------------------------------------------------------------------------------------------------------  */
// Loader function
const loaderEl = document.getElementsByClassName('fullpage-loader')[0];
document.addEventListener('readystatechange', (event) => {
  // const readyState = "interactive";
  const readyState = "complete";

  if (document.readyState == readyState) {
    // when document ready add lass to fadeout loader
    loaderEl.classList.add('fullpage-loader--invisible');

    // when loader is invisible remove it from the DOM
    setTimeout(() => {
      loaderEl.parentNode.removeChild(loaderEl);
    }, 2000)
  }
});

// Fade in function
(function () {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-element');
        element.classList.remove('hidden');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();

/* ------------------------------------------------------------------------------------------------------
   ------------------------------------------------------------------------------------------------------  */
// Dropdown menu function
(function () {
  var burger = document.querySelector('.burger-container');

  burger.onclick = function () {
    burger.classList.toggle('opened');
  }
}());
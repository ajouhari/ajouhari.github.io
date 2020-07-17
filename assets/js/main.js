/* ------------------------------------------------------------------------------------------------------
   ------------------------------------------------------------------------------------------------------  */
// Loader function
const loaderEl = document.getElementsByClassName('fullpage-loader')[0];
document.addEventListener('readystatechange', (event) => {
	// const readyState = "interactive";
	const readyState = "complete";
    
	if(document.readyState == readyState) {
		// when document ready add lass to fadeout loader
		loaderEl.classList.add('fullpage-loader--invisible');
		
		// when loader is invisible remove it from the DOM
		setTimeout(()=>{
			loaderEl.parentNode.removeChild(loaderEl);
		}, 2000)
	}
});

// Fade in function
(function() {
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
(function(){
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.top-navigation');
    
    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}());

/* ------------------------------------------------------------------------------------------------------
   ------------------------------------------------------------------------------------------------------  */
// Typewriter animation
// Method
const typeWriter = function(txtElement, words, wait = 1500) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}
// Type method
typeWriter.prototype.type = function() {
    // Current index of word
    let current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
        //  Remove character
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        // Add character
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    };

    // Insert txt into element
    this.txtElement.innerHTML = `${this.txt}`;
    // Initialize type speed
    let typeSpeed = 100;
    if (this.isDeleting) {
        typeSpeed /= 2;
    }
    // Check if word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
        // Pause when word is completed
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        // Set delete to false
        this.isDeleting = false;
        // Move on to next word
        this.wordIndex++;
        // Pause before typing
        typeSpeed = 400;
    }

    setTimeout(() => this.type(), typeSpeed);
}
// Initialize App
const init = function() {
    const txtElement = document.querySelector('.text-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Initialize typeWriter function
    new typeWriter(txtElement, words, wait);
}
// Initializes when DOM loads
document.addEventListener('DOMContentLoaded', init)
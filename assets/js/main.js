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

/* ------------------------------------------------------------------------------------------------------
   ------------------------------------------------------------------------------------------------------  */
// Filter button
(function(){
    var filterButton = document.querySelector('.filter-dropdown'),
    filterMenu = document.querySelector('.myBtnContainer');
    
        filterButton.onclick = function() {
            filterMenu.classList.toggle('opened');
    }
}());

// Product filters
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
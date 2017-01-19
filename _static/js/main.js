// Check if browser supports JavaScript, cutting the mustard

(function(){
  if (window.addEventListener && document.querySelector) {
      var body = document.documentElement;
      body.classList.remove('no-js');
      body.classList.add('js');
  }
})();

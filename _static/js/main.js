// Check if browser supports JavaScript, cutting the mustard

(function(){
  if (window.addEventListener && document.querySelector) {
      var body = document.documentElement;
      body.classList.remove('no-js');
      body.classList.add('js');
  }
})();

window.onload = function(){
  var anchors = document.getElementsByTagName('a');
  for (var i=0; i<anchors.length; i++){
    anchors[i].setAttribute('target', '_blank');
  }
}

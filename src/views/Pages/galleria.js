for(i = 1; i< document.images.length; i++){
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById('myImg'+i);
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  $(document).keydown(function(event) {
    if (event.keyCode == 27) {
      $('#myModal').hide();
    }
  });

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("closeBtn")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

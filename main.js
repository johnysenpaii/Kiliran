
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function playPause() {
    var audio = document.getElementById("audioFile");
    //var icon = document.getElementById("myIcon");
    if (audio.paused && document.getElementById("myIcon").className.match(/(?:^|\s)fa-solid fa-play my-float(?!\S)/)){
        audio.play(); 
        document.getElementById("myIcon").className = "fa-solid fa-pause my-float";
    }else{ 
        audio.pause();
        document.getElementById("myIcon").className = "fa-solid fa-play my-float";
    }
}

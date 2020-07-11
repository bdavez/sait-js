var resetButton = document.myform.reset;
var submitButton = document.myform.submit;
var lyricContent = document.getElementById('lyricContent');
var container2 = document.getElementsByClassName('container2');
var error = document.getElementById('errorz')
submitButton.addEventListener("click", function(event) {

event.preventDefault();

var name = document.myform["artist"].value;
var song = document.myform["song"].value;

getLyrics(name, song)

})


function getLyrics(name,song) {

fetch('https://api.lyrics.ovh/v1/'+name+'/'+song)
    .then(function(response) {
    if (!response.ok) {
    throw Error(response.statusText);
    }
    return response.json();
    })
    .then(function(data) {
    console.log(lyricContent);
    errorz.innerHTML = "";
    lyricContent.innerHTML = data.lyrics;
    lyricContent.style.padding = "50px";
    
    })
    .catch(function(error) {
    lyricContent.style.padding = "0";
    lyricContent.innerHTML = ""
    errorz.innerHTML = error;
    })

}

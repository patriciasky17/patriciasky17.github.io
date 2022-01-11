const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const all = document.body;

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});


fetch('https://covid19.mathdro.id/api/countries/indonesia/confirmed')
    .then (
        function (response) {
            if(response.status != 200) {
                console.log('Oops..' + response.status)
                return
            }

            response.json().then(function(data){
                console.log(data[0]);
                document.getElementById('confirmed').innerHTML = data[0].confirmed;
                document.getElementById('recovered').innerHTML = data[0].recovered ? data[0].recovered : 0;
                document.getElementById('death').innerHTML = data[0].deaths;
                
                for (i=0 ; i<3 ; i ++) {
                    document.getElementsByClassName("active")[i].innerHTML = toDateTime(data[0].lastUpdate);
                    
                }
            })
        }
    )

function toDateTime(secs) {
    var t = new Date(secs); // Epoch
    return t;
}

var loader = document.querySelector("#preloader");
console.log(loader);

window.addEventListener('load', vanish);

function vanish() {
  loader.classList.add("dissapear");
}
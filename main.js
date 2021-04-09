var btn = document.getElementById("btn");
var container = document.getElementById("content");
const key = "4342876c1365fb2402e4dce0d90eb536";

btn.addEventListener("click", function () {
    var cityname = document.getElementById("cityName").value;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + cityname + ',us&&appid='+key);
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
});

function renderHTML(data) {
    container = document.getElementById("content");
    container.innerHTML =
       `<div class="card" style="width:30rem;">
            <div class="card-body">
                <h3>${data.name} : ${data.weather[0].description}</h3>
                <h3> Temperature : ${data.main.temp}</h3>
                <h3> Coord : long ${data.coord.lon},  lat ${data.coord.lat}</h3>
            </div>
        </div>`;
}
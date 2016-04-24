function initMap() {
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 48.170664, lng: 16.354681}
  });

  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}







function ajax_get_json() {
  var results = document.getElementById("results");
    var hr = new XMLHttpRequest();
    hr.open("GET", "mirror/mylist.json", true);
    hr.setRequestHeader("Content-type", "application/json");
    hr.onreadystatechange = function() {
      if(hr.readyState == 4 && hr.status == 200) {
        var data = JSON.parse(hr.responseText);
      results.innerHTML = data.u1.user//data.routes[0].legs[0].duration_in_traffic.text;
     console.log(data);
      }
     
    }
    hr.send(null);
    results.innerHTML = "requesting...";
}


//function ajax_get_json() {
//  var results = document.getElementById("results");
//    var hr = new XMLHttpRequest();
//    hr.open("GET", "https://maps.googleapis.com/maps/api/directions/json?origin=48.179536,16.377489&destination=48.164087,16.333994&departure_time=now&duration_in_traffic=text&traffic_model=best_guess&waypoints=via:48.178086,16.376566|via:48.177798,16.373577|via:48.165394,16.368439|via:48.169607,16.350380|via:48.170988,16.337907&key=AIzaSyA8U9dsojJxzYh1HIN34a0eyKm2YNnYu6U&callback=?", true);
//    hr.setRequestHeader("Content-type", "application/json");
//    hr.onreadystatechange = function() {
//      if(hr.readyState == 4 && hr.status == 200) {
//        var data = JSON.parse(hr.responseText);
 //     results.innerHTML = data.u1.user//data.routes[0].legs[0].duration_in_traffic.text;
 //    console.log(data);
  //    }
     
  //  }
  //  hr.send(null);
  //  results.innerHTML = "requesting...";
//}



requestURL = "https://maps.googleapis.com/maps/api/directions/json?origin=48.179536,16.377489&destination=48.164087,16.333994&departure_time=now&duration_in_traffic=text&traffic_model=best_guess&waypoints=via:48.178086,16.376566|via:48.177798,16.373577|via:48.165394,16.368439|via:48.169607,16.350380|via:48.170988,16.337907&key=AIzaSyA8U9dsojJxzYh1HIN34a0eyKm2YNnYu6U&callback=?";
results = function () {
$.ajax({
            url: requestURL, 
            type: "GET",   
            dataType: 'jsonp',
            cache: false,
            success: function(data){                          
                var results = data.routes;//[0].legs[0].duration_in_traffic.text;
                alert(data);                   
            console.log(data);
            }

        }); 

}



function MyParseXml(xmlString)
{
var xmlDoc;
//for IE
if (window.ActiveXObject)
{
xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
xmlDoc.async = "false";
xmlDoc.loadXML(xmlString);
}
//for Mozilla, Firefox, Opera, etc.
else if (document.implementation && document.implementation.createDocument)
{
var parser = new DOMParser();
xmlDoc = parser.parseFromString(xmlString,"text/xml");
}
var x=xmlDoc.getElementsByTagName('leg'); //oder wasauchimmer
}
















function CallRestService(request, callback) {
    $.ajax({
            url: requestURL, 
            type: "GET",   
            dataType: "jsonp",
            jsonp: "jsonp",
            cache: false,
            success: function(data){                          
                var results = data.resourceSets[0].resources[0];//[0].legs[0].duration_in_traffic.text;
                callback(data);
                alert(data);                   
            console.log(data);
            }

        }); 

}
var request_map = "https://maps.googleapis.com/maps/api/directions/json?origin=48.179536,16.377489&destination=48.164087,16.333994&departure_time=now&duration_in_traffic=text&traffic_model=best_guess&waypoints=via:48.178086,16.376566%7Cvia:48.177798,16.373577%7Cvia:48.165394,16.368439%7Cvia:48.169607,16.350380%7Cvia:48.170988,16.337907&key=AIzaSyA8U9dsojJxzYh1HIN34a0eyKm2YNnYu6U";

function CallJson_map(request_map) {
$.ajax({
                url: "http://query.yahooapis.com/v1/public/yql",
                jsonp: "callback",
                dataType: "jsonp",
                data: {
                        q: "select * from json where url=\""+request_map+"\"",
                        format: "json"
                },
                success: function(results_map){
                    document.getElementById("traffic").innerHTML=((results_map.query.results.json.routes.legs.duration_in_traffic.text).substring(0, 2) + " Minuten");
                    //console.log(results.query.results.json.routes.legs.duration_in_traffic.text);
                

                }  
    
    });
};
CallJson_map(request_map);
window.setInterval("CallJson_map(request_map)", 100000); 
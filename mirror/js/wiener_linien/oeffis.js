var request_wl = "http://www.wienerlinien.at/ogd_realtime/monitor?rbl=748&rbl=4103&rbl=4126&activeTrafficInfo=stoerunglang&activeTrafficInfo=aufzugsinfo&sender=kS2s3Kd7lO";

function CallJson_wl(request_wl) {
$.ajax({
                url: "http://query.yahooapis.com/v1/public/yql",
                jsonp: "callback",
                dataType: "jsonp",
                data: {
                        q: "select * from json where url=\""+request_wl+"\"",
                        format: "json"
                },
                success: function(results_wl){
                    document.getElementById("bus").innerHTML=("14A in " + results_wl.query.results.json.data.monitors[0].lines.departures.departure[0].departureTime.countdown + ", " + results_wl.query.results.json.data.monitors[0].lines.departures.departure[1].departureTime.countdown + " Minuten");
                    document.getElementById("ubahn_L").innerHTML=("U1 L in  " + results_wl.query.results.json.data.monitors[1].lines.departures.departure[0].departureTime.countdown + ", " + results_wl.query.results.json.data.monitors[1].lines.departures.departure[1].departureTime.countdown + " Minuten");
                    document.getElementById("ubahn_R").innerHTML=("U1 R in " + results_wl.query.results.json.data.monitors[2].lines.departures.departure[0].departureTime.countdown + ", " + results_wl.query.results.json.data.monitors[2].lines.departures.departure[1].departureTime.countdown + " Minuten");
                    //console.log( response.query.results.json.data.monitors[0].lines.departures.departure[0].departureTime.timePlanned );
                }

    });
};
CallJson_wl(request_wl);
window.setInterval("CallJson_wl(request_wl)", 60000);  
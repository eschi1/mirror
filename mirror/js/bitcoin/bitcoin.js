var request_bc = "https://bitcoinapi.de/v1/c875d792a8d1c191b55bed52141b71d9/rate.json";

function CallJson_bc(request_bc) {
$.ajax({
                url: "http://query.yahooapis.com/v1/public/yql",
                jsonp: "callback",
                dataType: "jsonp",
                data: {
                        q: "select * from json where url=\""+request_bc+"\"",
                        format: "json"
                },
                success: function(results_bc){
                    document.getElementById("bitcoin").innerHTML=("1 BC = " + parseFloat(results_bc.query.results.json.rate_weighted).toFixed(2) + " Euro");
                    console.log(results_bc);
            

                }

    });
};
CallJson_bc(request_bc);
window.setInterval("CallJson_bc(request_bc)", 100000); 
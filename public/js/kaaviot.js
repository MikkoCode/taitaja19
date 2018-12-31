var jsoni;

$.ajax({
    dataType: "json",
    url: "http://public.bc.fi/katta/Taitaja2019/data.json",
    success: function (dataCheck) {
        jsoni = dataCheck;
        initializeJSON();
    },
    error: function(data, errorThrown)
    {
        alert('request failed :'+errorThrown);
    }

});


var labelArray = [];
var minTempArray = [];

var labelArray2 = [];
var maxHumidityArray = [];

function initializeJSON(){

    //Create the labels
    for (var i = 0; i < jsoni.length; i++) {
        //console.log(jsoni[i].group.day);
        labelArray.push(jsoni[i].group.day + "." + jsoni[i].group.month + "." + jsoni[i].group.year + " " + jsoni[i].group.hour + ":00");
    }
    //Lämpötila min
    for (var i = 0; i < jsoni.length; i++) {
        //console.log(jsoni[i].group.day);
        minTempArray.push(jsoni[i].min.temperature);
    }

    for (var i = 0; i < jsoni.length; i++) {
        //console.log(jsoni[i].group.day);
        if (jsoni[i].group.hour === 18){
            labelArray2.push(jsoni[i].group.day + "." + jsoni[i].group.month + "." + jsoni[i].group.year + " " + jsoni[i].group.hour + ":00");
        }
    }

    for (var i = 0; i < jsoni.length; i++) {
        //console.log(jsoni[i].group.day);
        if (jsoni[i].group.hour === 18){
            maxHumidityArray.push(jsoni[i].max.humidity);
        }
    }

    createChart();

}

var ctx = document.getElementById("lampotila").getContext('2d');
var ctx2 = document.getElementById("kosteus").getContext('2d');

function createChart(){
    var lampotila = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labelArray,
            datasets: [{
                label: 'Lämpötilan minimiarvo',
                backgroundColor: "rgba(250,0,0,0.4)",
                data: minTempArray,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMax:30,
                        beginAtZero:true,
                        stepSize:10
                    }
                }]
            }
        }
    });

    var kosteus = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: labelArray2,
            datasets: [{
                label: 'Ilmankosteuden maksimiarvo',
                backgroundColor: "rgba(0,0,250,0.4)",
                data: maxHumidityArray,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMax:50,
                        beginAtZero:true,
                        stepSize:10
                    }
                }]
            }
        }
    });

}



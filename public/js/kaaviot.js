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

    labelArray.sortBy(function(o){ return new Date(o) });

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

(function(){
    if (typeof Object.defineProperty === 'function'){
        try{Object.defineProperty(Array.prototype,'sortBy',{value:sb}); }catch(e){}
    }
    if (!Array.prototype.sortBy) Array.prototype.sortBy = sb;

    function sb(f){
        for (var i=this.length;i;){
            var o = this[--i];
            this[i] = [].concat(f.call(o,o,i),o);
        }
        this.sort(function(a,b){
            for (var i=0,len=a.length;i<len;++i){
                if (a[i]!=b[i]) return a[i]<b[i]?-1:1;
            }
            return 0;
        });
        for (var i=this.length;i;){
            this[--i]=this[i][this[i].length-1];
        }
        return this;
    }
})();


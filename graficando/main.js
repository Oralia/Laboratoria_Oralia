var ctx= document.getElementById("myChart").getContext("2d");
var myChart= new Chart(ctx,{
    type:"bar",
    data:{
        labels:['col1','col2','col3'],
        datasets:[{
                label:'Num datos',
                data:[10,9,15],
                backgroundColor:
'rgb(66, 134, 244,0.5)'

        }]
    },
    options:{
        scales:{
            yAxes:[{
                    ticks:{
                        beginAtZero:true
                    }
            }]
        }
    }
});

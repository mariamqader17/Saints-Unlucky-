var CurSetting = "init";

function init(){
    Highcharts.chart('viz-chart', {
        chart: {
            type: 'line',
            backgroundColor: 'rgb(252, 250, 238 )',
        },
        title: {
            text: 'Saints Regular Season Conference Rankings by Year'
        },
        subtitle: {
            text: 'Source: www.pro-football-reference.com'
        },
        xAxis: {
            categories: [2015, 2016, 2017, 2018, 2019]
        },
        yAxis: {
            title: {
                text: 'Ranking /16 teams'
            },
            tickInterval: 2, 
            reversed: true,
            startOnTick: false,
            min: 1, 
            max: 16
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true,
                    format: '{point.y}' ,
                    color: '#d3bc8d',
                    style: {
                        fontSize: '14px'
                    }
                },
                enableMouseTracking: true
            },
            series: {
                color: 'black'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span><b>{point.y}/16</b><br/>'
        },
        series: [{
            name: 'Saints',
            data: [11, 11, 4, {
                y: 1,
                color: '#d3bc8d'
            }, 3], 
            
        }]
    });
    var slot = document.getElementById("content");
    slot.innerHTML = "<p>After 3 heartbreaking playoff losses during the last 3 consecutive seasons of the NFL, New Orleans Saints fans will tell you their team is cursed with bad luck. Despite placing in the top 4 teams of the NFL going into every single one of these playoff games, the team still managed to fall short of the win. </p><br><p>As football enthusiasts and data scientists, we have decided to tackle this debate through looking at the statistics of the team, players and nfl season to see if these losses boiled down to bad luck or if the Saints were simply not good enough to make it to the super bowl. </p>"
}

function miracle(){
    Highcharts.chart('viz-chart', {

        chart: {
            polar: true,
            type: 'line',
            backgroundColor: 'rgb(252, 250, 238)',
        },
    
        title: {
            text: "Relative Performance of the Saint's Defense",
            x: 0
        },
        subtitle: {
            text: 'Source: www.pro-football-reference.com'
        },
        pane: {
            size: '80%'
        },
    
        xAxis: {
            categories: ['Expected Points Given By Pass', 'Expected Points Given By Rush', 
            'Expected Points Off Turnovers', "Yards Given Up (in 100's of yards)",
            'Lost 3rd Down Conversions', 'Time on Defense (minutes)'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
    
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
    
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },
    
        legend: {
            align: 'right',
            verticalAlign: 'middle',
            layout: 'vertical'
        },
    
        series: [{
            name: 'Regular Season',
            data: [9.550625, 2.209, 5.4175, 33.65, 5.625, 28.913125],
            pointPlacement: 'on',
            color:'red'
        }, {
            name: 'Game v/ Vikings',
            data: [15.15, 1.19, 4.9, 40.3, 10, 33.2834],
            pointPlacement: 'on'
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    pane: {
                        size: '70%'
                    }
                }
            }]
        }
    
    });
    var slot = document.getElementById("content");
    slot.innerHTML = '<iframe width="500px" height="300px" src="https://www.youtube.com/embed/2dkhK4Gx-kk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><section class = "buttons flex-container" id = "content"><button onclick = "miracle()" style="background:transparent; border:none; color:transparent;"><a href="#" class="small_button">Video</a></button><button onclick = "miracleText()" style="background:transparent; border:none; color:transparent;"><a href="#" class="small_button">More Info.</a></button></section>';

}
function no_call(){
    Highcharts.chart('viz-chart', {
        chart: {
            type: 'pie',
            backgroundColor: 'rgb(252, 250, 238)'
        },
        
        title: {
            text: 'NFL Pass Interference Challenges 2019 season'
        },
        subtitle: {
            text: 'Click the slices to view details. Source: <a href="nfl and wash post" target="_blank">www.washingtonpost.com/sports</a>'
        },
    
        accessibility: {
            announceNewData: {
                enabled: true
            },
            point: {
                valueSuffix: '%'
            }
        },
    
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.per}'
                }
            }
        },
    
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.val}</b><br/>'
        },
    
        series: [
            {
                name: "Total Called/No Call Challenges",
                colorByPoint: true,
                data: [
                    {
                        name: "No-Call",
                        y: 74,
                        per: '73.3%',
                        color: '#05497d',
                        val: '74/101',
                        drilldown: "no call PI"
                    },
                    {
                        name: "Called",
                        y: 27,
                        per: '26.7%',
                        color: '#0d96ff',
                        val: '27/101',
                        drilldown: "called PI"
                    }
                ]
            }
        ],
        drilldown: {
            drillUpButton: {
                position: {
                    y: 0,
                    x: -370
                }
            },
            series: [
                {
                    name: "No Call",
                    id: "no call PI",
                    data: [
                        {
                            name: "Succesful",
                            y: 21,
                            color: '#08805a',
                            val: '21/74',
                            per: '28.4%'
                            
                    },
                        {
                            name: "Unsuccesful",
                            y: 53,
                            color: '#80082a',
                            val: '53/74',
                            per: '71.6%'
                        },
                    ]
                },
                {
                    name: "Called",
                    id: "called PI",
                    data: [
                        {
                            name: "Successful",
                            y: 3,
                            color: '#08805a',
                            val: '3/24',
                            per: '12.5%'
                        },
                        {
                            name: "Unsuccessful",
                            y: 21,
                            color: '#80082a',
                            val: '21/24',
                            per: '87.5%'
                        }
                    ]
                },
            ]
        }
    });
    var slot = document.getElementById("content");
    slot.innerHTML = '<iframe width="500px" height="300px" src="https://www.youtube.com/embed/xjvZHMod_3E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><section class = "buttons flex-container" id = "content"><button onclick = "no_call()" style="background:transparent; border:none; color:transparent;"><a href="#" class="small_button">Video</a></button><button onclick = "no_call_text()" style="background:transparent; border:none; color:transparent;"><a href="#" class="small_button">More Info.</a></button></section>';
}
function injury(){
    Highcharts.chart('viz-chart', {

        chart: {
            type: 'column',
            backgroundColor: 'rgb(252, 250, 238)',
        },
    
        title: {
            text: 'Dree Brees Prior to vs. Post Brees Injury',
            x:0 
        },
        subtitle: {
            text: 'Source: http://www.nfl.com/teams/neworleanssaints/statistics?team=no'
        },
    
        pane: {
            size: '80%'
        },
    
        xAxis: {
            categories: ['Completion Percentage', 'Yards/Game (x10)', 'Touchdown per 16 games', 'Interception per 16 games', 'Rating'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
    
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },
    
        legend: {
            align: 'right',
            verticalAlign: 'middle',
            layout: 'vertical'
        },
    
        series: [{
            name: 'Pre-Injury',
            data: [72.92, 37.0, 16, 16, 94.8],
            stack: 'male',
            color: '#d3bc8d'
        }, {
            name: 'Post-Injury',
            data: [74.55, 28.5, 44.48, 3.55, 119.4],
            stack: 'male',
            color: 'black'
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    pane: {
                        size: '70%'
                    }
                }
            }]
        }
    
    });
    var slot = document.getElementById("content");
    slot.innerHTML = '<iframe width="500px" height="300px" src="https://www.youtube.com/embed/dw-h2DMzm0U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><section class = "buttons flex-container" id = "content"><button onclick = "injury()" style="background:transparent; border:none; color:transparent;"><a href="#" class="small_button">Video</a></button><button onclick = "injury_text()" style="background:transparent; border:none; color:transparent;"><a href="#" class="small_button">More Info.</a></button></section>';
}
function testPlot(){ 
    
}

function miracleText(){
    var slot = document.getElementById("content");
    let text = "In the 2018 playoff game against the Vikings, the rookie safety, Marcus Williams missed an open-field tackle that led to a game-winning touchdown. We wanted to see if this poor defensive play corresponds to poor defensive day or just luck. What we found that the defensive performance of the Saints for that was slightly worse than the average regular season game, such as the Saints giving up more total yards and time on the field. This points to the idea that the Saints might not have been cheated.";
    slot.innerHTML = '<p>' + text + '</p><section class = "buttons flex-container" id = "content"><button onclick = "miracle()" style="background:transparent; border:none; color:transparent;"><a href="#" class="small_button">Video</a></button><button onclick = "miracleText()" style="background:transparent; border:none; color:transparent;"><a href="#" class="small_button">More Info.</a></button></section>';
}
function no_call_text(){
    var slot = document.getElementById("content");
    let text = "A pass interference is a foul in football where a defensive player interferes with a receiving player's ability to make a fair attempt to catch a pass. After watching the clip, it is clear that a pass interference was most definitely at play, yet it was not called. After looking at the graph, we can see that there were only 21 no-call pass interference challenges that were successful (the no call was reversed and the defending team received a foul). When looking at the number of passing plays in the entire season, 17671, we can see that only a tiny percentage of all the plays were challenged for a no-call and successful (no-call reversed), specifically ~0.1%.";
    slot.innerHTML = '<p>' + text + '</p><section class = "buttons flex-container" id = "content"><button onclick = "no_call()" style="background:transparent; border:none; color:transparent;"><a href="#" class="small_button">Video</a></button><button onclick = "no_call_text()" style="background:transparent; border:none; color:transparent;"><a href="#" class="small_button">More Info.</a></button></section>';
}
function injury_text(){
    var slot = document.getElementById("content");
    let text = "In 2019, the Saints lost their playoff game against the Vikings again for the second time in three seasons. For a large portion of the season, Drew Brees was hurt, and recovering from a tear in his thumb going into the playoffs. This injury is held up by Saints fans as the reason for their loss. We wanted to see if this idea holds any value by looking at Bree's performances before and after the injury. We found that overall, his statistics were generally better after his injury. This would lead us to believe that the excuse of the Drew Brees is likely not an example of the Saint’s bad luck.";
    slot.innerHTML = '<p>' + text +'</p><section class = "buttons flex-container" id = "content"><button onclick = "injury()" style="background:transparent; border:none; color:transparent;"><a href="#" class="small_button">Video</a></button><button onclick = "injury_text()" style="background:transparent; border:none; color:transparent;"><a href="#" class="small_button">More Info.</a></button></section>';
}
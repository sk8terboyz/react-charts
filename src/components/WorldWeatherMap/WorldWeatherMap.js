import JSC from 'jscharting';

// Recreation from: https://jscharting.com/examples/chart-types/geographic-map/world-major-cities-weather/#

const WorldWeatherMap = () => {

    var map, chart, mapData;
    var tickLabels;
    var palette = ['#b4ddba', '#42A5F5', '#1565C0'];
    var now = new Date().getHours();

    var weatherColors = [
        '#FCCE3A', // sun
        '#C5E4F9', // variable sun
        '#77B3DB', // dark
        '#4E94C4', // darker
    ];

    // WMO Weather interpretation codes (WW) with icons
    var weatherIcon = {
        '0': {
            icon: 'weather/sun',
            color: weatherColors[0]
        },
        '1': {
            icon: 'weather/variable-sun',
            color: weatherColors[1]
        },
        '2': {
            icon: 'weather/variable-sun',
            color: weatherColors[1]
        },
        '3': {
            icon: 'weather/cloud',
            color: weatherColors[2]
        },
        '45': {
            icon: 'weather/fog-sun',
            color: weatherColors[1]
        },
        '48': {
            icon: 'weather/fog',
            color: weatherColors[2]
        },
        '51': {
            icon: 'weather/drizzle-sun',
            color: weatherColors[1]
        },
        '53': {
            icon: 'weather/drizzle',
            color: weatherColors[2]
        },
        '55': {
            icon: 'weather/drizzle',
            color: weatherColors[2]
        },
        '56': {
            icon: 'weather/sleet-and-drizzle-sun',
            color: weatherColors[1]
        },
        '57': {
            icon: 'weather/sleet-and-drizzle',
            color: weatherColors[2]
        },
        '61': {
            icon: 'weather/rain-sun',
            color: weatherColors[1]
        },
        '63': {
            icon: 'weather/rain',
            color: weatherColors[3]
        },
        '65': {
            icon: 'weather/rain',
            color: weatherColors[3]
        },
        '66': {
            icon: 'weather/sleet-sun',
            color: weatherColors[1]
        },
        '67': {
            icon: 'weather/sleet',
            color: weatherColors[3]
        },
        '71': {
            icon: 'weather/snow-sun',
            color: weatherColors[1]
        },
        '73': {
            icon: 'weather/snow',
            color: weatherColors[3]
        },
        '75': {
            icon: 'weather/snow',
            color: weatherColors[3]
        },
        '77': {
            icon: 'weather/cloud-snowflake',
            color: weatherColors[3]
        },
        '80': {
            icon: 'weather/downpour-sun',
            color: weatherColors[1]
        },
        '81': {
            icon: 'weather/downpour',
            color: weatherColors[3]
        },
        '82': {
            icon: 'weather/downpour',
            color: weatherColors[3]
        },
        '85': {
            icon: 'weather/snow',
            color: weatherColors[3]
        },
        '86': {
            icon: 'weather/snow',
            color: weatherColors[3]
        },
        '95': {
            icon: 'weather/storm',
            color: weatherColors[3]
        },
        '96': {
            icon: 'weather/storm',
            color: weatherColors[3]
        },
        '99': {
            icon: 'weather/storm',
            color: weatherColors[3]
        }
    }

    JSC.fetch('./resources/world-cities-min.csv').then(function(res) {
        return res.text();
    }).then(function(text) {
        mapData = JSC.csv2Json(text);
        map = renderMap();
    }).catch(function(err) {
        console.error(err);
    });

    const renderMap = () => {
        return JSC.chart('mapDiv', {
            debug: true,
            type: 'map solid',
            title_label_text: 'Weather Forecast<br><span style="font-size:12px">Click a country to lead cities, then click a city to point to load weather data</span>',
            legend_visible: false,
            events_pointSelectionChanged: selectionChanged,
            defaultSeries: { pointSelection: true },
            defaultPoint_color: palette[0],
            series: [
                {map: 'americas'},
                {map: 'europe'},
                {map: 'asia'},
                {map: 'oceania'},
                {map: 'africa'},
            ],
            toolbar_items: {
                resetZoom_visible: false,
                export_visible: false,
                Clear: {
                    type: 'option',
                    visible: false,
                    margin: 5,
                    label_text: 'Reset Zoom',
                    boxVisible: true,
                    events_click: function() {
                        map.series(5).remove();
                        map.zoom(1, { animation: false });
                        map.series().points().options({
                            selected: false,
                            events_click: function() {
                                return true;
                            },
                            tooltip: '%name'
                        });
                        map.uiItems('Clear').options({ visible: false });
                        if(chart) chart.dispose();
                    }
                }
            }
        });

        function selectionChanged(items) {
            if(items.length !== 0) {
                var point = items[0];
                var c = point.chart;
                var countryCode = point.tokenValue(
                    '%countrycode'
                );
                var countryName = point.tokenValue('%name');
                var countryData = mapData.filter(function(v) {
                    return v.iso2 === countryCode;
                });
                // show cities with a population above average if the number of cities is more than 1000
                if(countryData.length >= 1000) {
                    var averagePopulation = JSC.mean(
                        countryData,
                        'population'
                    );
                    countryData = countryData.filter(function(v) {
                        return ( v.population >= averagePopulation );
                    });
                }
                var citiesSeries = {
                    type: 'bubble',
                    pointSelection: false,
                    size: [10, 30],
                    defaultPoint: {
                        opacity: 0.2,
                        outline: { width: 1, color: 'lighten' }
                    },
                    points: countryData.map(function(item) {
                        return {
                            name: item.city,
                            x: item.lng,
                            y: item.lat,
                            z: item.population,
                            attributes_country: countryName,
                            events_click: cityClickEvent,
                            opacity: item.capital === 'primary' ? 1 : 0.8,
                            color: item.capital === 'primary' ? palette[2] : palette[1],
                            tooltip: item.capital === 'primary' ? '%name (Capital)<br>Population: <b>%zValue</b>' : '%name<br>Population: <b>%zValue</b>'
                        };
                    })
                };
                c.uiItems('Clear').options({
                    visible: true
                });
                c.series().points().options({
                    events_click: function() {
                        return true;
                    },
                    tooltip: '%name'
                });
                if(c.series(5)) {
                    c.series.splice(5, 1, [citiesSeries]);
                } else {
                    c.series.add(citiesSeries);
                }
                point.options({
                    events_click: function() {
                        return false;
                    },
                    tooltip: ''
                });
                point.zoomTo({ animation: false });
                if(chart) {
                    chart.dispose();
                }
            }
        }
    }

    function cityClickEvent() { 
        var p = this; 
        var chartTitle = 
          p.tokenValue('%country') + 
          ' - ' + 
          p.name + 
          ': 12-hours Forecast'; 
        var link = 
          'https://api.open-meteo.com/v1/forecast?latitude=' + 
          p.y + 
          '&longitude=' + 
          p.x + 
          '&hourly=temperature_2m,weathercode'; 
        JSC.fetch(link) 
          .then(function(response) { 
            return response.text(); 
          }) 
          .then(function(text) { 
            var chartData = JSON.parse(text); 
            tickLabels = generateTickLabels(chartData); 
            if (chart) { 
              chart.dispose(); 
            } 
            chart = renderChart(chartTitle, chartData); 
          }) 
          .catch(function(error) { 
            console.error(error); 
          }); 
      } 

      function renderChart(title, data) { 
        return JSC.chart('chartDiv', { 
          debug: true, 
          type: 'spline', 
          title_label_text: title, 
          legend_visible: false, 
          palette: [palette[1]], 
          yAxis: { 
            visible: false, 
            alternateGridFill: 'none'
          }, 
          xAxis: { 
            scale: { 
              interval: { multiplier: 1, unit: 'hour' } 
            }, 
            orientation: 'top', 
            defaultTick: { 
              gridLine_visible: false, 
              line_visible: false, 
              label_text: tickLabelText 
            } 
          }, 
          defaultTooltip_label_text: '%points', 
          defaultSeries_mouseTracking_enabled: false, 
          defaultPoint: { 
            label: { text: '%yValue°C' }, 
            marker_size: 8 
          }, 
        
          series: makeChartSeries(data) 
        }); 
      } 

      function tickLabelText(v) { 
        return tickLabels[new Date(v)]; 
      } 
        
      function generateTickLabels(data) { 
        var ticks = {}; 
        for (var i = now; i <= now + 11; i++) { 
          ticks[new Date(data.hourly.time[i])] = 
            JSC.formatDate( 
              new Date(data.hourly.time[i]), 
              'h'
            ) + 
            ' ' + 
            JSC.formatDate( 
              new Date(data.hourly.time[i]), 
              'tt'
            ) + 
            '<br><icon name=' + 
            weatherIcon[data.hourly.weathercode[i]] 
              .icon + 
            ' color=' + 
            weatherIcon[data.hourly.weathercode[i]] 
              .color + 
            ' size=20>'; 
        } 
        return ticks; 
      } 
        
      function makeChartSeries(data) { 
        var points = []; 
        for (var i = now; i <= now + 11; i++) { 
          points.push({ 
            x: new Date(data.hourly.time[i]), 
            y: data.hourly.temperature_2m[i] 
          }); 
        } 
        return [{ points: points }]; 
      } 
        
    //   function getRandomInt(max) { 
    //     return Math.floor(Math.random() * max); 
    //   } 

    return (
        <div>
        </div>
    )
}

export default WorldWeatherMap
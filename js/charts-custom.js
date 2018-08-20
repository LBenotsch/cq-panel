/*global $, document*/
$(document).ready(function () {
    Chart.defaults.global.defaultFontColor = '#75787c';

    // ------------------------------------------------------- //
    // Line Chart Custom 1
    // ------------------------------------------------------ //
    // var LINECHARTEXMPLE = $('#lineChartCustom1');
    // var lineChartExample = new Chart(LINECHARTEXMPLE, {
    //     type: 'line',
    //     options: {
    //         legend: { labels: { fontColor: "#777", fontSize: 12 } },
    //         scales: {
    //             xAxes: [{
    //                 display: false,
    //                 gridLines: {
    //                     color: 'transparent'
    //                 }
    //             }],
    //             yAxes: [{
    //                 ticks: {
    //                     max: 60,
    //                     min: 0
    //                 },
    //                 display: true,
    //                 gridLines: {
    //                     color: 'transparent'
    //                 }
    //             }]
    //         },
    //     },
    //     data: {
    //         labels: ["January", "February", "March", "April", "May", "June", "July"],
    //         datasets: [
    //             {
    //                 label: "Data Set One",
    //                 fill: true,
    //                 lineTension: 0,
    //                 backgroundColor: "rgba(134, 77, 217, 0.88)",
    //                 borderColor: "rgba(134, 77, 217, 088)",
    //                 borderCapStyle: 'butt',
    //                 borderDash: [],
    //                 borderDashOffset: 0.0,
    //                 borderJoinStyle: 'miter',
    //                 borderWidth: 1,
    //                 pointBorderColor: "rgba(134, 77, 217, 0.88)",
    //                 pointBackgroundColor: "#fff",
    //                 pointBorderWidth: 1,
    //                 pointHoverRadius: 5,
    //                 pointHoverBackgroundColor: "rgba(134, 77, 217, 0.88)",
    //                 pointHoverBorderColor: "rgba(134, 77, 217, 0.88)",
    //                 pointHoverBorderWidth: 2,
    //                 pointRadius: 1,
    //                 pointHitRadius: 10,
    //                 data: [0, 20, 17, 40, 30, 22, 30],
    //                 spanGaps: false
    //             },
    //             {
    //                 label: "Data Set Two",
    //                 fill: true,
    //                 lineTension: 0,
    //                 backgroundColor: "rgba(98, 98, 98, 0.5)",
    //                 borderColor: "rgba(98, 98, 98, 0.5)",
    //                 borderCapStyle: 'butt',
    //                 borderDash: [],
    //                 borderDashOffset: 0.0,
    //                 borderJoinStyle: 'miter',
    //                 borderWidth: 1,
    //                 pointBorderColor: "rgba(98, 98, 98, 0.5)",
    //                 pointBackgroundColor: "#fff",
    //                 pointBorderWidth: 1,
    //                 pointHoverRadius: 5,
    //                 pointHoverBackgroundColor: "rgba(98, 98, 98, 0.5)",
    //                 pointHoverBorderColor: "rgba(98, 98, 98, 0.5)",
    //                 pointHoverBorderWidth: 2,
    //                 pointRadius: 1,
    //                 pointHitRadius: 10,
    //                 data: [0, 30, 22, 20, 35, 25, 50],
    //                 spanGaps: false
    //             }
    //         ]
    //     }
    // });



    // ------------------------------------------------------- //
    // Bar Chart Custom 1
    // ------------------------------------------------------ //
    // var BARCHART1 = $('#barChartCustom1');
    // var barChartHome = new Chart(BARCHART1, {
    //     type: 'bar',
    //     options:
    //     {
    //         scales:
    //         {
    //             xAxes: [{
    //                 display: true,
    //                 barPercentage: 0.2
    //             }],
    //             yAxes: [{
    //                 ticks: {
    //                     max: 100,
    //                     min: 0
    //                 },
    //                 display: false
    //             }],
    //         },
    //         legend: {
    //             display: false
    //         }
    //     },
    //     data: {
    //         labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
    //         datasets: [
    //             {
    //                 label: "Data Set 1",
    //                 backgroundColor: [
    //                     '#EF8C99',
    //                     '#EF8C99',
    //                     '#EF8C99',
    //                     '#EF8C99',
    //                     '#EF8C99',
    //                     '#EF8C99',
    //                     '#EF8C99',
    //                     '#EF8C99',
    //                     '#EF8C99',
    //                     '#EF8C99',
    //                     '#EF8C99',
    //                     '#EF8C99'
    //                 ],
    //                 borderColor: [
    //                     '#EF8C99',
    //                     '#EF8C99',
    //                     '#EF8C99',
    //                     '#EF8C99',
    //                     '#EF8C99',
    //                     '#EF8C99',
    //                     '#EF8C99',
    //                     '#EF8C99',
    //                     '#EF8C99',
    //                     '#EF8C99',
    //                     '#EF8C99',
    //                     '#EF8C99'
    //                 ],
    //                 borderWidth: 0.3,
    //                 data: [35, 55, 65, 85, 40, 30, 50, 35, 50, 70, 60, 50]
    //             }
    //         ]
    //     }
    // });


    // ------------------------------------------------------- //
    // Bar Chart Example 2
    // ------------------------------------------------------ //
    // var BARCHART1 = $('#barChartCustom2');
    // var barChartHome = new Chart(BARCHART1, {
    //     type: 'bar',
    //     options:
    //     {
    //         scales:
    //         {
    //             xAxes: [{
    //                 display: true,
    //                 barPercentage: 0.2
    //             }],
    //             yAxes: [{
    //                 ticks: {
    //                     max: 100,
    //                     min: 0
    //                 },
    //                 display: false
    //             }],
    //         },
    //         legend: {
    //             display: false
    //         }
    //     },
    //     data: {
    //         labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
    //         datasets: [
    //             {
    //                 label: "Data Set 1",
    //                 backgroundColor: [
    //                     '#CF53F9',
    //                     '#CF53F9',
    //                     '#CF53F9',
    //                     '#CF53F9',
    //                     '#CF53F9',
    //                     '#CF53F9',
    //                     '#CF53F9',
    //                     '#CF53F9',
    //                     '#CF53F9',
    //                     '#CF53F9',
    //                     '#CF53F9',
    //                     '#CF53F9'
    //                 ],
    //                 borderColor: [
    //                     '#CF53F9',
    //                     '#CF53F9',
    //                     '#CF53F9',
    //                     '#CF53F9',
    //                     '#CF53F9',
    //                     '#CF53F9',
    //                     '#CF53F9',
    //                     '#CF53F9',
    //                     '#CF53F9',
    //                     '#CF53F9',
    //                     '#CF53F9',
    //                     '#CF53F9'
    //                 ],
    //                 borderWidth: 0.2,
    //                 data: [30, 40, 45, 55, 70, 45, 60, 35, 50, 63, 40, 70]
    //             }
    //         ]
    //     }
    // });


    // ------------------------------------------------------- //
    // Line Chart Custom 2
    // ------------------------------------------------------ //
    // var LINECHART1 = $('#lineChartCustom2');
    // var myLineChart = new Chart(LINECHART1, {
    //     type: 'line',
    //     options: {
    //         scales: {
    //             xAxes: [{
    //                 display: true,
    //                 gridLines: {
    //                     display: false
    //                 }
    //             }],
    //             yAxes: [{
    //                 ticks: {
    //                     max: 40,
    //                     min: 10,
    //                     stepSize: 0.1
    //                 },
    //                 display: false,
    //                 gridLines: {
    //                     display: false
    //                 }
    //             }]
    //         },
    //         legend: {
    //             display: false
    //         }
    //     },
    //     data: {
    //         labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "L", "M", "N", "O", "P", "Q", "R", "S", "T"],
    //         datasets: [
    //             {
    //                 label: "Team Drills",
    //                 fill: true,
    //                 lineTension: 0.3,
    //                 backgroundColor: "transparent",
    //                 borderColor: '#EF8C99',
    //                 pointBorderColor: '#EF8C99',
    //                 pointHoverBackgroundColor: '#EF8C99',
    //                 borderCapStyle: 'butt',
    //                 borderDash: [],
    //                 borderDashOffset: 0.0,
    //                 borderJoinStyle: 'miter',
    //                 borderWidth: 2,
    //                 pointBackgroundColor: "#EF8C99",
    //                 pointBorderWidth: 2,
    //                 pointHoverRadius: 4,
    //                 pointHoverBorderColor: "#fff",
    //                 pointHoverBorderWidth: 0,
    //                 pointRadius: 1,
    //                 pointHitRadius: 0,
    //                 data: [20, 21, 25, 22, 24, 18, 20, 23, 19, 22, 25, 19, 24, 27, 22, 17, 20, 17, 20, 26, 22],
    //                 spanGaps: false
    //             },
    //             {
    //                 label: "Team Drills",
    //                 fill: true,
    //                 lineTension: 0.3,
    //                 backgroundColor: "transparent",
    //                 borderColor: 'rgba(238, 139, 152, 0.24)',
    //                 pointBorderColor: 'rgba(238, 139, 152, 0.24)',
    //                 pointHoverBackgroundColor: 'rgba(238, 139, 152, 0.24)',
    //                 borderCapStyle: 'butt',
    //                 borderDash: [],
    //                 borderDashOffset: 0.0,
    //                 borderJoinStyle: 'miter',
    //                 borderWidth: 2,
    //                 pointBackgroundColor: "rgba(238, 139, 152, 0.24)",
    //                 pointBorderWidth: 2,
    //                 pointHoverRadius: 4,
    //                 pointHoverBorderColor: "#fff",
    //                 pointHoverBorderWidth: 0,
    //                 pointRadius: 1,
    //                 pointHitRadius: 0,
    //                 data: [24, 20, 23, 19, 22, 20, 25, 21, 23, 19, 21, 23, 19, 24, 19, 22, 21, 24, 19, 21, 20],
    //                 spanGaps: false
    //             }
    //         ]
    //     }
    // });


    // ------------------------------------------------------- //
    // Line Chart Custom 3
    // ------------------------------------------------------ //
    // var LINECHART1 = $('#lineChartCustom3');
    // var myLineChart = new Chart(LINECHART1, {
    //     type: 'line',
    //     options: {
    //         scales: {
    //             xAxes: [{
    //                 display: true,
    //                 gridLines: {
    //                     display: false
    //                 }
    //             }],
    //             yAxes: [{
    //                 ticks: {
    //                     max: 40,
    //                     min: 10,
    //                     stepSize: 0.1
    //                 },
    //                 display: false,
    //                 gridLines: {
    //                     display: false
    //                 }
    //             }]
    //         },
    //         legend: {
    //             display: false
    //         }
    //     },
    //     data: {
    //         labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "L", "M", "N", "O", "P", "Q", "R", "S", "T"],
    //         datasets: [
    //             {
    //                 label: "Team Drills",
    //                 fill: true,
    //                 lineTension: 0.3,
    //                 backgroundColor: "transparent",
    //                 borderColor: '#CF53F9',
    //                 pointBorderColor: '#CF53F9',
    //                 pointHoverBackgroundColor: '#CF53F9',
    //                 borderCapStyle: 'butt',
    //                 borderDash: [],
    //                 borderDashOffset: 0.0,
    //                 borderJoinStyle: 'miter',
    //                 borderWidth: 2,
    //                 pointBackgroundColor: "#CF53F9",
    //                 pointBorderWidth: 2,
    //                 pointHoverRadius: 4,
    //                 pointHoverBorderColor: "#fff",
    //                 pointHoverBorderWidth: 0,
    //                 pointRadius: 1,
    //                 pointHitRadius: 0,
    //                 data: [24, 20, 23, 19, 22, 20, 25, 21, 23, 19, 21, 23, 19, 24, 19, 22, 21, 24, 19, 21, 20],
    //                 spanGaps: false
    //             },
    //             {
    //                 label: "Team Drills",
    //                 fill: true,
    //                 lineTension: 0.3,
    //                 backgroundColor: "transparent",
    //                 borderColor: 'rgba(207, 83, 249, 0.24)',
    //                 pointBorderColor: 'rgba(207, 83, 249, 0.24)',
    //                 pointHoverBackgroundColor: 'rgba(207, 83, 249, 0.24)',
    //                 borderCapStyle: 'butt',
    //                 borderDash: [],
    //                 borderDashOffset: 0.0,
    //                 borderJoinStyle: 'miter',
    //                 borderWidth: 2,
    //                 pointBackgroundColor: "rgba(207, 83, 249, 0.24)",
    //                 pointBorderWidth: 2,
    //                 pointHoverRadius: 4,
    //                 pointHoverBorderColor: "#fff",
    //                 pointHoverBorderWidth: 0,
    //                 pointRadius: 1,
    //                 pointHitRadius: 0,
    //                 data: [20, 21, 25, 22, 24, 18, 20, 23, 19, 22, 25, 19, 24, 27, 22, 17, 20, 17, 20, 26, 22],
    //                 spanGaps: false
    //             }
    //         ]
    //     }
    // });



    // ------------------------------------------------------- //
    // Bar Chart
    // ------------------------------------------------------ //
    // var BARCHARTEXMPLE = $('#barChartCustom3');
    // var barChartExample = new Chart(BARCHARTEXMPLE, {
    //     type: 'bar',
    //     options: {
    //         scales: {
    //             xAxes: [{
    //                 display: true,
    //                 gridLines: {
    //                     color: 'transparent'
    //                 }
    //             }],
    //             yAxes: [{
    //                 display: true,
    //                 gridLines: {
    //                     color: 'transparent'
    //                 }
    //             }]
    //         },
    //     },
    //     data: {
    //         labels: ["January", "February", "March", "April", "May", "June", "July"],
    //         datasets: [
    //             {
    //                 label: "Data Set 1",
    //                 backgroundColor: [
    //                     "#864DD9",
    //                     "#864DD9",
    //                     "#864DD9",
    //                     "#864DD9",
    //                     "#864DD9",
    //                     "#864DD9",
    //                     "#864DD9"
    //                 ],
    //                 hoverBackgroundColor: [
    //                     "#864DD9",
    //                     "#864DD9",
    //                     "#864DD9",
    //                     "#864DD9",
    //                     "#864DD9",
    //                     "#864DD9",
    //                     "#864DD9"
    //                 ],
    //                 borderColor: [
    //                     "#864DD9",
    //                     "#864DD9",
    //                     "#864DD9",
    //                     "#864DD9",
    //                     "#864DD9",
    //                     "#864DD9",
    //                     "#864DD9"
    //                 ],
    //                 borderWidth: 0.5,
    //                 data: [65, 59, 80, 81, 56, 55, 40],
    //             },
    //             {
    //                 label: "Data Set 2",
    //                 backgroundColor: [
    //                     "rgba(98, 98, 98, 0.5)",
    //                     "rgba(98, 98, 98, 0.5)",
    //                     "rgba(98, 98, 98, 0.5)",
    //                     "rgba(98, 98, 98, 0.5)",
    //                     "rgba(98, 98, 98, 0.5)",
    //                     "rgba(98, 98, 98, 0.5)",
    //                     "rgba(98, 98, 98, 0.5)"
    //                 ],
    //                 hoverBackgroundColor: [
    //                     "rgba(98, 98, 98, 0.5)",
    //                     "rgba(98, 98, 98, 0.5)",
    //                     "rgba(98, 98, 98, 0.5)",
    //                     "rgba(98, 98, 98, 0.5)",
    //                     "rgba(98, 98, 98, 0.5)",
    //                     "rgba(98, 98, 98, 0.5)",
    //                     "rgba(98, 98, 98, 0.5)"
    //                 ],
    //                 borderColor: [
    //                     "rgba(98, 98, 98, 0.5)",
    //                     "rgba(98, 98, 98, 0.5)",
    //                     "rgba(98, 98, 98, 0.5)",
    //                     "rgba(98, 98, 98, 0.5)",
    //                     "rgba(98, 98, 98, 0.5)",
    //                     "rgba(98, 98, 98, 0.5)",
    //                     "rgba(98, 98, 98, 0.5)"
    //                 ],
    //                 borderWidth: 0.5,
    //                 data: [35, 40, 60, 47, 88, 27, 30],
    //             }
    //         ]
    //     }
    // });


    // ------------------------------------------------------- //
    // Currently Mining Pie Chart
    // ------------------------------------------------------ //

    var url = "http://34.224.90.223/panel.json"
    $.getJSON(url, function (text, status) {
        //var preobj = JSON.parse(text.responseText);
        var obj = text.rigs;

        var ethRigs = 0;
        var etcRigs = 0;
        var pirlRigs = 0;
        var musicRigs = 0;
        var ellaRigs = 0;
        var expRigs = 0;
        var ubqRigs = 0;
        for (i = 0; i < obj.length; i++) {
            switch (obj[i].pool) {
                case 'us1.ethermine.org:4444':
                    ethRigs++;
                    break;
                case 'us1-etc.ethermine.org:4444':
                    etcRigs++;
                    break;
                case 'us-east.pirlpool.eu:8004':
                    pirlRigs++;
                    break;
                case 'musicoin.nomnom.technology:4444':
                    musicRigs++;
                    break;
                case 'lb.geo.ellapool.eu:8004':
                    ellaRigs++;
                    break;
                case 'us.expmine.pro:9009':
                    expRigs++;
                    break;
                case 'us.ubiqpool.io:8008':
                    ubqRigs++;
                    break;
            }
        }

        var coinNames = [];
        var coinAmmounts = [];
        if (ethRigs > 0) {
            coinNames.push("ETH");
            coinAmmounts.push(ethRigs);
        }
        if (etcRigs > 0) {
            coinNames.push("ETC");
            coinAmmounts.push(etcRigs);
        }
        if (pirlRigs > 0) {
            coinNames.push("PIRL");
            coinAmmounts.push(pirlRigs);
        }
        if (musicRigs > 0) {
            coinNames.push("MUSIC")
            coinAmmounts.push(musicRigs);
        }
        if (ellaRigs > 0) {
            coinNames.push("ELLA")
            coinAmmounts.push(ellaRigs);
        }
        if (expRigs > 0) {
            coinNames.push("EXP")
            coinAmmounts.push(expRigs);
        }
        if (ubqRigs > 0) {
            coinNames.push("UBQ")
            coinAmmounts.push(ubqRigs);
        }


        var PIECHARTEXMPLE = $('#pieChartCustom1');
        var pieChartExample = new Chart(PIECHARTEXMPLE, {
            type: 'pie',
            options: {
                legend: {
                    display: true,
                    position: "left"
                }
            },
            data: {
                labels: coinNames,
                datasets: [
                    {
                        data: coinAmmounts,
                        borderWidth: 0,
                        backgroundColor: [
                            '#723ac3',
                            "#864DD9",
                            "#9762e6",
                            "#a678eb",
                            "#f2a2ad",
                            "#ef8c99",
                            "#ec7585",
                            "#e95f71"

                            //"#E95F71"
                        ],
                        hoverBackgroundColor: [
                            '#723ac3',
                            "#864DD9",
                            "#9762e6",
                            "#a678eb",
                            "#f2a2ad",
                            "#ef8c99",
                            "#ec7585",
                            "#e95f71"
                        ]
                    }]
            }
        });
    })
        .fail(function () { alert('getJSON request failed! For ' + url); });

    // ------------------------------------------------------- //
    // Balances Pie Chart
    // ------------------------------------------------------ //

    $.getJSON('https://blockchain.info/ticker', function (data) {
        var currentBTCPrice = data.USD.last;

        //Get wallet balance by public key
        var publicKey = "xpub6Bs4K9xiZBFZ9WQpiAXdnkSvRFZT37EuUUdESah1h9SSJ2kjypLCSNVejjekPgZeFPMQ5mqukZpsBhg262SGpDftfphLzUXzmTGVjFuuvAi"
        var url = "https://blockchain.info/balance?active=" + publicKey + "&cors=true"
        $.getJSON(url, function (data) {
            var walletBalanceBTCRaw = data[publicKey].final_balance
            var walletBalanceBTC = (walletBalanceBTCRaw * 0.00000001)
            var copayWalletBalanceUSD = Math.round((walletBalanceBTC * currentBTCPrice) * 100) / 100

            //Get binance wallet balance by api key. Uses backend service that has private key
            var url2 = "http://server.cryptoquarry.net:8080/binance?key=hnFOruusrwhV5HJRDM2dQGZ1B5Oxv2gow4Eigjgdgs7JukbCG9ln4QLktOLUwB1N"
            $.getJSON(url2, function (data) {
                var binanceWalletBalanceBTC = data[0].free;
                var binanceWalletBalanceUSD = Math.round((binanceWalletBalanceBTC * currentBTCPrice) * 100) / 100

                //Debug
                //copayWalletBalanceUSD = 10
                //binanceWalletBalanceUSD = 10

                var wallets = ["Cold Storage", "Binance"];
                var walletAmmounts = [copayWalletBalanceUSD, binanceWalletBalanceUSD];

                var PIECHARTEXMPLE = $('#pieChartCustom2');
                var pieChartExample = new Chart(PIECHARTEXMPLE, {
                    type: 'pie',
                    options: {
                        legend: {
                            display: true,
                            position: "left"
                        },
                        tooltips: {
                            callbacks: {
                                label: function (tooltipItem, data) {
                                    var indice = tooltipItem.index;
                                    return data.labels[indice] + ': $' + (data.datasets[0].data[indice]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
                                        + ' (' + Math.round((data.datasets[0].data[indice] / currentBTCPrice) * 100000) / 100000 + ' BTC)';
                                }
                            }
                        }
                    },
                    data: {
                        labels: wallets,
                        datasets: [
                            {
                                data: walletAmmounts,
                                borderWidth: 0,
                                backgroundColor: [
                                    '#b53dde',
                                    "#CF53F9",
                                    "#d06cf2",
                                    "#de97f6"
                                ],
                                hoverBackgroundColor: [
                                    '#b53dde',
                                    "#CF53F9",
                                    "#d06cf2",
                                    "#de97f6"
                                ]
                            }]
                    }
                });

                var pieChartExample = {
                    responsive: true
                };
            });
        });
    });
});


    // ------------------------------------------------------- //
    // Doughnut Chart Custom
    // ------------------------------------------------------ //
    // var PIECHART = $('#doughnutChartCustom1');
    // var myPieChart = new Chart(PIECHART, {
    //     type: 'doughnut',
    //     options: {
    //         cutoutPercentage: 80,
    //         legend: {
    //             display: true,
    //             position: "left"
    //         }
    //     },
    //     data: {
    //         labels: [
    //             "A",
    //             "B",
    //             "C",
    //             "D"
    //         ],
    //         datasets: [
    //             {
    //                 data: [120, 90, 77, 95],
    //                 borderWidth: [0, 0, 0, 0],
    //                 backgroundColor: [
    //                     '#b53dde',
    //                     "#CF53F9",
    //                     "#d06cf2",
    //                     "#de97f6"
    //                 ],
    //                 hoverBackgroundColor: [
    //                     '#b53dde',
    //                     "#CF53F9",
    //                     "#d06cf2",
    //                     "#de97f6"
    //                 ]
    //             }]
    //     }
    // });



    // ------------------------------------------------------- //
    // Polar Chart
    // ------------------------------------------------------ //
    // var chartOptions = {
    //     scale: {
    //         gridLines: {
    //             color: '#3f4145'
    //         },
    //         ticks: {
    //             beginAtZero: true,
    //             min: 0,
    //             max: 100,
    //             stepSize: 20
    //         },
    //         pointLabels: {
    //             fontSize: 12
    //         }
    //     },
    //     legend: {
    //         position: 'left'
    //     },
    //     elements: {
    //         arc: {
    //             borderWidth: 0,
    //             borderColor: 'transparent'
    //         }
    //     }
    // };
    // var POLARCHARTEXMPLE = $('#polarChartCustom');
    // var polarChartExample = new Chart(POLARCHARTEXMPLE, {
    //     type: 'polarArea',
    //     options: chartOptions,
    //     data: {
    //         datasets: [{
    //             data: [
    //                 80,
    //                 70,
    //                 60,
    //                 50
    //             ],
    //             backgroundColor: [
    //                 "#ba3fe4",
    //                 "#CF53F9",
    //                 "#d97bf9",
    //                 "#e28eff"
    //             ],
    //             label: 'My dataset' // for legend
    //         }],
    //         labels: [
    //             "A",
    //             "B",
    //             "C",
    //             "D"
    //         ]
    //     }
    // });

    // var polarChartExample = {
    //     responsive: true
    // };



    // ------------------------------------------------------- //
    // Radar Chart
    // ------------------------------------------------------ //
    // var chartOptions = {
    //     scale: {
    //         gridLines: {
    //             color: '#3f4145'
    //         },
    //         ticks: {
    //             beginAtZero: true,
    //             min: 0,
    //             max: 100,
    //             stepSize: 20
    //         },
    //         pointLabels: {
    //             fontSize: 12
    //         }
    //     },
    //     legend: {
    //         position: 'left'
    //     }
    // };
    // var RADARCHARTEXMPLE = $('#radarChartCustom');
    // var radarChartExample = new Chart(RADARCHARTEXMPLE, {
    //     type: 'radar',
    //     options: chartOptions,
    //     data: {
    //         labels: ["A", "B", "C", "D", "E", "C"],
    //         datasets: [
    //             {
    //                 label: "First dataset",
    //                 backgroundColor: "rgba(113, 39, 172, 0.4)",
    //                 borderWidth: 2,
    //                 borderColor: "#7127AC",
    //                 pointBackgroundColor: "#7127AC",
    //                 pointBorderColor: "#fff",
    //                 pointHoverBackgroundColor: "#fff",
    //                 pointHoverBorderColor: "#7127AC",
    //                 data: [65, 59, 90, 81, 56, 55]
    //             },
    //             {
    //                 label: "Second dataset",
    //                 backgroundColor: "rgba(207, 83, 249, 0.4)",
    //                 borderWidth: 2,
    //                 borderColor: "#CF53F9",
    //                 pointBackgroundColor: "#CF53F9",
    //                 pointBorderColor: "#fff",
    //                 pointHoverBackgroundColor: "#fff",
    //                 pointHoverBorderColor: "#CF53F9",
    //                 data: [50, 60, 80, 45, 96, 70]
    //             }
    //         ]
    //     }
    // });
    // var radarChartExample = {
    //     responsive: true
    // };

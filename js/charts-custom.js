/*global $, document*/
$(document).ready(function () {
    Chart.defaults.global.defaultFontColor = '#75787c';

    // ------------------------------------------------------- //
    // Currently Mining Pie Chart
    // ------------------------------------------------------ //

    $.getJSON(PANEL_JSON_URL, function (data, status) {
        var obj = data.rigs;

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

        var PIECURRMINING = $('#pieCurrMining');
        var pieCurrMining = new Chart(PIECURRMINING, {
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
        .fail(function () {
            toastr.options = {
                "closeButton": true,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-bottom-left",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            toastr.error("Failed to connect to json backend!");
        });

        //Refresh currently mining pie every interval

    // setInterval(function () {
    //     $('#pieCurrMining').replaceWith('<canvas id="pieCurrMining" </canvas>');
    //     $.getJSON(PANEL_JSON_URL, function (data, status) {
    //         var obj = data.rigs;

    //         var ethRigs = 0;
    //         var etcRigs = 0;
    //         var pirlRigs = 0;
    //         var musicRigs = 0;
    //         var ellaRigs = 0;
    //         var expRigs = 0;
    //         var ubqRigs = 0;
    //         for (i = 0; i < obj.length; i++) {
    //             switch (obj[i].pool) {
    //                 case 'us1.ethermine.org:4444':
    //                     ethRigs++;
    //                     break;
    //                 case 'us1-etc.ethermine.org:4444':
    //                     etcRigs++;
    //                     break;
    //                 case 'us-east.pirlpool.eu:8004':
    //                     pirlRigs++;
    //                     break;
    //                 case 'musicoin.nomnom.technology:4444':
    //                     musicRigs++;
    //                     break;
    //                 case 'lb.geo.ellapool.eu:8004':
    //                     ellaRigs++;
    //                     break;
    //                 case 'us.expmine.pro:9009':
    //                     expRigs++;
    //                     break;
    //                 case 'us.ubiqpool.io:8008':
    //                     ubqRigs++;
    //                     break;
    //             }
    //         }

    //         var coinNames = [];
    //         var coinAmmounts = [];
    //         if (ethRigs > 0) {
    //             coinNames.push("ETH");
    //             coinAmmounts.push(ethRigs);
    //         }
    //         if (etcRigs > 0) {
    //             coinNames.push("ETC");
    //             coinAmmounts.push(etcRigs);
    //         }
    //         if (pirlRigs > 0) {
    //             coinNames.push("PIRL");
    //             coinAmmounts.push(pirlRigs);
    //         }
    //         if (musicRigs > 0) {
    //             coinNames.push("MUSIC")
    //             coinAmmounts.push(musicRigs);
    //         }
    //         if (ellaRigs > 0) {
    //             coinNames.push("ELLA")
    //             coinAmmounts.push(ellaRigs);
    //         }
    //         if (expRigs > 0) {
    //             coinNames.push("EXP")
    //             coinAmmounts.push(expRigs);
    //         }
    //         if (ubqRigs > 0) {
    //             coinNames.push("UBQ")
    //             coinAmmounts.push(ubqRigs);
    //         }

    //         var PIECURRMINING = $('#pieCurrMining');
    //         var pieCurrMining = new Chart(PIECURRMINING, {
    //             type: 'pie',
    //             options: {
    //                 animation: false,
    //                 legend: {
    //                     display: true,
    //                     position: "left"
    //                 }
    //             },
    //             data: {
    //                 labels: coinNames,
    //                 datasets: [
    //                     {
    //                         data: coinAmmounts,
    //                         borderWidth: 0,
    //                         backgroundColor: [
    //                             '#723ac3',
    //                             "#864DD9",
    //                             "#9762e6",
    //                             "#a678eb",
    //                             "#f2a2ad",
    //                             "#ef8c99",
    //                             "#ec7585",
    //                             "#e95f71"

    //                             //"#E95F71"
    //                         ],
    //                         hoverBackgroundColor: [
    //                             '#723ac3',
    //                             "#864DD9",
    //                             "#9762e6",
    //                             "#a678eb",
    //                             "#f2a2ad",
    //                             "#ef8c99",
    //                             "#ec7585",
    //                             "#e95f71"
    //                         ]
    //                     }]
    //             }
    //         });
    //     })
    // }, 10000);

    // ------------------------------------------------------- //
    // Balances Pie Chart
    // ------------------------------------------------------ //

    $.getJSON('https://blockchain.info/ticker', function (data) {
        var currentBTCPrice = data.USD.last;

        //Get wallet balance by public key
        var url = "https://blockchain.info/balance?active=" + COLD_WALLET_PUBLIC_KEY + "&cors=true"
        $.getJSON(url, function (data) {
            var copayWalletBalanceBTCRaw = data[COLD_WALLET_PUBLIC_KEY].final_balance
            var copayWalletBalanceBTC = (copayWalletBalanceBTCRaw * 0.00000001)
            var copayWalletBalanceUSD = Math.round((copayWalletBalanceBTC * currentBTCPrice) * 100) / 100

            //Get binance wallet balance by api key. Uses backend service that has private key
            $.getJSON(NODE_BACKEND_URL + "binance?key=" + BINANCE_PUBLIC_KEY, function (data) {
                var binanceWalletBalanceBTC = data[0].free;
                var binanceWalletBalanceUSD = Math.round((binanceWalletBalanceBTC * currentBTCPrice) * 100) / 100

                //Debug
                //copayWalletBalanceUSD = 10
                //binanceWalletBalanceUSD = 10

                var wallets = ["Cold Storage", "Binance"];
                var walletAmmounts = [copayWalletBalanceUSD, binanceWalletBalanceUSD];

                var PIEBALANCES = $('#pieBalances');
                var pieBalances = new Chart(PIEBALANCES, {
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
            })
                .fail(function (response) {
                    toastr.options = {
                        "closeButton": true,
                        "debug": false,
                        "newestOnTop": false,
                        "progressBar": false,
                        "positionClass": "toast-bottom-left",
                        "preventDuplicates": false,
                        "onclick": null,
                        "showDuration": "5000",
                        "hideDuration": "5000",
                        "timeOut": "5000",
                        "extendedTimeOut": "5000",
                        "showEasing": "swing",
                        "hideEasing": "linear",
                        "showMethod": "fadeIn",
                        "hideMethod": "fadeOut"
                    }
                    toastr.error("Failed to connect to panel backend!");
                });
        });
    });
});
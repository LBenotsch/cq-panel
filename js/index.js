function postRebootAllProblemMiners() {
    var elm = [];
    var elms = document.getElementById("badMinerTableData").getElementsByTagName("*");
    for (var i = 0; i < elms.length; i++) {
        if (elms[i].id.includes("reboot")) {
            minerReboots = elms[i].id;
            console.log(elms[i].id);
        }
    }
    console.log(minerReboots);
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function refreshBallancePie() {
    removeData(pieBalances);
    removeData(pieBalances);
    removeData(pieBalances);

    $.getJSON('https://blockchain.info/ticker', function (data) {
        var currentBTCPrice = data.USD.last;

        //Get wallet balance by public key
        var url = "https://blockchain.info/balance?active=" + COLD_WALLET_PUBLIC_KEY + "&cors=true"
        $.getJSON(url, function (data) {
            var copayWalletBalanceBTCRaw = data[COLD_WALLET_PUBLIC_KEY].final_balance
            var copayWalletBalanceBTC = (copayWalletBalanceBTCRaw * 0.00000001)
            var copayWalletBalanceUSD = Math.round((copayWalletBalanceBTC * currentBTCPrice) * 100) / 100

            // //Get binance wallet balance by api key. Uses backend service that has private key
            // $.getJSON(NODE_BACKEND_URL + "binance?key=" + BINANCE_PUBLIC_KEY, function (data) {
            //     var binanceWalletBalanceBTC = data[0].free;
            //     var binanceWalletBalanceUSD = Math.round((binanceWalletBalanceBTC * currentBTCPrice) * 100) / 100

                //Get bittrex wallet balance by api key. Uses backend service that has private key
                $.getJSON(NODE_BACKEND_URL + "bittrex?key=" + BITTREX_PUBLIC_KEY, function (data) {
                    var bittrexWalletBalanceBTC = data;
                    if (bittrexWalletBalanceBTC < 0) {
                        bittrexWalletBalanceBTC = 0
                    }
                    var bittrexWalletBalanceUSD = Math.round((bittrexWalletBalanceBTC * currentBTCPrice) * 100) / 100

                    // //Get cryptopia wallet balance by api key. Uses backend service that has private key
                    // $.getJSON(NODE_BACKEND_URL + "cryptopia?key=" + CRYPTOPIA_PUBLIC_KEY, function (data) {
                    //     var cryptopiaWalletBalanceBTC = data;
                    //     if (cryptopiaWalletBalanceBTC < 0) {
                    //         cryptopiaWalletBalanceBTC = 0
                    //     }
                    //     var cryptopiaWalletBalanceUSD = Math.round((cryptopiaWalletBalanceBTC * currentBTCPrice) * 100) / 100


                        var total = bittrexWalletBalanceUSD;
                        document.getElementById('total-balance-usd').innerHTML = "$" + total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                        document.getElementById('total-balance-btc').innerHTML = Math.round((total / currentBTCPrice) * 100000) / 100000 + ' BTC';

                        var wallets = ["Bittrex"];
                        var walletAmmounts = [bittrexWalletBalanceUSD];

                        //addData(pieBalances, "Binance", binanceWalletBalanceUSD);
                        addData(pieBalances, "Bittrex", bittrexWalletBalanceUSD);
                        //addData(pieBalances, "Cryptopia", cryptopiaWalletBalanceUSD);
                    //})
                })
            //})
        })
    });
}

document.getElementById('change_coin').disabled = true;

$(document).ready(function () {

    //Dropdown keeps selected text in box
    $(".dropdown-menu li a").click(function () {
        $("#options").text($(this).text());
        $.get(NODE_BACKEND_URL + 'which_coin', function (data) {
            var coin = document.getElementById("options").textContent
            if (coin == data) {
                document.getElementById("change_coin").disabled = true;
            } else {
                document.getElementById("change_coin").disabled = false;
            }
        });
    });

    function changeCoinError() {
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
        toastr.error("Chaning coins failed!");
    }

    var coin;
    $("#change_coin").click(function () {
        document.getElementById('change_coin').disabled = true;
        document.getElementById('options').disabled = true;

        coin = document.getElementById("options").textContent;
        if (coin.trim() == "Select a coin to mine" || coin == "" || coin == null) {
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
            toastr.error("Please select a coin")
        } else {
            jQuery("#change_coin").html('<i class="fa fa-circle-o-notch fa-spin"></i> Changing coins');
            setTimeout(function () {
                jQuery("#change_coin").html('Save changes');
                document.getElementById('options').disabled = false;
            }, 300000); //5 mins
            $.post(NODE_BACKEND_URL + "change_coin", {
                    coin: coin
                }, function (data) {
                    if (data === 'done') {
                        toastr.options = {
                            "closeButton": true,
                            "debug": false,
                            "newestOnTop": false,
                            "progressBar": false,
                            "positionClass": "toast-bottom-left",
                            "preventDuplicates": false,
                            "onclick": null,
                            "showDuration": "30000",
                            "hideDuration": "30000",
                            "timeOut": "30000",
                            "extendedTimeOut": "10000",
                            "showEasing": "swing",
                            "hideEasing": "linear",
                            "showMethod": "fadeIn",
                            "hideMethod": "fadeOut"
                        }
                        toastr.success("Coin saved. Changing rigs to: " + coin + ". Changes will take effect in about 5 minutes.");
                    } else {
                        jQuery("#change_coin").html('Error');
                        changeCoinError()
                    }
                })
                .fail(function (response) {
                    jQuery("#change_coin").html('Error');
                    changeCoinError()
                });
        }
    });


});

//Dropdown first pulls the last selected coin
$.get(NODE_BACKEND_URL + 'which_coin', function (data) {
    document.getElementById("options").textContent = data;
});

//Pulls json data
$.getJSON(PANEL_JSON_URL, function (data, status) {
    var rigs = data.rigs;

    //Fill data for top blocks
    document.getElementById("active-miners").innerHTML = data.alive_rigs + "/" + data.total_rigs;
    document.getElementById("active-gpus").innerHTML = data.alive_gpus;
    document.getElementById("total-hash").innerHTML = Math.round(data.total_hash);
    document.getElementById("avg-gpu-temp").innerHTML = Math.round(data.avg_temp) + "c";

    //Fill miner details tables
    var k = '<tbody>';
    var t = '<tbody>';
    var kTableTotal = 0;
    var tTableTotal = 0;
    for (i = 0; i < rigs.length; i++) {

        switch (rigs[i].pool) {
            case 'us1.ethermine.org:4444':
                coin = 'ETH';
                break;
            case 'us1-etc.ethermine.org:4444':
                coin = 'ETC';
                break;
            case 'us-east.pirlpool.eu:8004':
                coin = 'PIRL';
                break;
            case 'musicoin.nomnom.technology:4444':
                coin = 'MUSIC';
                break;
            case 'lb.geo.ellapool.eu:8009':
                coin = 'ELLA';
                break;
            case 'us.expmine.pro:9009':
                coin = 'EXP';
                break;
            case 'us.ubiqpool.io:8008':
                coin = 'UBQ';
                break;
            default:
                coin = 'Unknown';
        }

        //Conditions that signify a GOOD miner
        if (rigs[i].condition !== "mining" && rigs[i].condition !== "throttle" && rigs[i].condition !== "autorebooted" &&
            rigs[i].condition !== "high_load" && rigs[i].condition !== "just_booted") {
            t += '<tr>';
            t += '<td>' + rigs[i].rack_loc + '</td>';
            t += '<td> <button type="button" onclick="highlight(this)" id=reboot_' + rigs[i].rack_loc + ' class="icon-logout btn btn-primary-outline" data-toggle="tooltip" data-placement="top" title="Reboot"></button>' +
                ' <button type="button" onclick="highlight(this)" id=downclock_' + rigs[i].rack_loc + ' class="icon-dashboard btn btn-primary-outline" data-toggle="tooltip" data-placement="top" title="Downclock"></button>' +
                '</td>';
            t += '<td>' + rigs[i].ip + '</td>';
            t += '<td>' + rigs[i].miner_instance + '/' + rigs[i].gpus + '</td>';
            t += '<td>' + rigs[i].hash + '</td>';
            t += '<td>' + coin + '</td>';
            t += '<td>' + rigs[i].condition + '</td>';
            if (rigs[i].condition == 'unreachable') {
                rigs[i].uptime = 0;
            }
            t += '<td>' + Math.round(rigs[i].uptime / 86400) + '</td>';
            t += '</tr>';
            tTableTotal++;
            continue;
        }

        k += '<tr>';
        k += '<td>' + rigs[i].rack_loc + '</td>';
        k += '<td> <button type="button" onclick="highlight(this)" id=reboot_' + rigs[i].rack_loc + ' class="icon-logout btn btn-primary-outline" data-toggle="tooltip" data-placement="top" title="Reboot"></button>' +
            ' <button type="button" onclick="highlight(this)" id=downclock_' + rigs[i].rack_loc + ' class="icon-dashboard btn btn-primary-outline" data-toggle="tooltip" data-placement="top" title="Downclock"></button>' +
            '</td>';
        k += '<td>' + rigs[i].ip + '</td>';
        k += '<td>' + rigs[i].miner_instance + '/' + rigs[i].gpus + '</td>';
        k += '<td>' + rigs[i].hash + '</td>';
        k += '<td>' + coin + '</td>';
        k += '<td>' + Math.round(rigs[i].uptime / 86400) + '</td>';
        k += '</tr>';
        kTableTotal++;
    }
    k += '</tbody>';
    t += '</tbody>';
    document.getElementById('tableData').innerHTML = k;
    document.getElementById('badMinerTableData').innerHTML = t;
    document.getElementById('badMinerTableCount').innerHTML = "(" + tTableTotal + ")"
    document.getElementById('tableCount').innerHTML = "(" + kTableTotal + ")"
});

//Get what's being mined
$.getJSON(PANEL_JSON_URL, function (data, status) {
    var obj = data.rigs;

    var objNew = {
        eth: 0,
        etc: 0,
        pirl: 0,
        music: 0,
        ella: 0,
        exp: 0,
        ubq: 0,
        unknown: 0
    }
    //rule out bad rigs
    for (i = 0; i < obj.length; i++) {
        if (obj[i].hash == "0") {
            continue;
        }

        switch (obj[i].pool) {
            case 'us1.ethermine.org:4444':
                objNew.eth = objNew.eth + 1;
                break;
            case 'us1-etc.ethermine.org:4444':
                objNew.etc++;
                break;
            case 'us-east.pirlpool.eu:8004':
                objNew.pirl++;
                break;
            case 'musicoin.nomnom.technology:4444':
                objNew.music++;
                break;
            case 'lb.geo.ellapool.eu:8009':
                objNew.ella++;
                break;
            case 'us.expmine.pro:9009':
                objNew.exp++;
                break;
            case 'us.ubiqpool.io:8008':
                objNew.ubq++;
                break;
            default:
                objNew.unknown++;
                break;
        }
    }
    //get most mined coin name
    var keys = Object.keys(objNew);
    var max = keys[0];
    for (var i = 1, n = keys.length; i < n; ++i) {
        var k = keys[i];
        if (objNew[k] > objNew[max]) {
            max = k;
        }
    }
    fillEstimatedProfits(max);
});

function fillEstimatedProfits(coin) {
    if (coin == "eth") {
        //Pulls json data
        $.getJSON('https://api.ethermine.org/miner/0xfb460684608fdfc8b07635b4d1195e87b377c7e0/currentStats', function (data, status) {
            var obj = JSON.parse(JSON.stringify(data));
            var usdPerMin = obj.data.usdPerMin;
            var btcPerMin = obj.data.btcPerMin;

            //Fill miner details tables
            var k = '<tbody>';
            k += '<tr>';
            k += '<td>' + "Day" + '</td>'; //Period
            k += '<td>' + "$" + (Math.round((usdPerMin * 1440) * 100) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + '</td>'; //USD
            k += '<td>' + btcPerMin * 1440 + '</td>'; //BTC
            k += '</tr>';
            k += '<tr>';
            k += '<td>' + "Month" + '</td>'; //Period
            k += '<td>' + "$" + (Math.round((usdPerMin * 43200) * 100) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + '</td>'; //USD
            k += '<td>' + btcPerMin * 43200 + '</td>'; //BTC
            k += '</tr>';
            k += '</tbody>';
            document.getElementById('tableDataEstimatedEarnings').innerHTML = k;
        });
    } else if (coin == "etc") {
        $.getJSON('https://api-etc.ethermine.org/miner/0x2b69322372df18b9e479256c025f2186066cd596/currentStats', function (data, status) {
            var obj = JSON.parse(JSON.stringify(data));
            var usdPerMin = obj.data.usdPerMin;
            var btcPerMin = obj.data.btcPerMin;

            var k = '<tbody>';
            k += '<tr>';
            k += '<td>' + "Day" + '</td>'; //Period
            k += '<td>' + "$" + (Math.round((usdPerMin * 1440) * 100) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + '</td>'; //USD
            k += '<td>' + btcPerMin * 1440 + '</td>'; //BTC
            k += '</tr>';
            k += '<tr>';
            k += '<td>' + "Month" + '</td>'; //Period
            k += '<td>' + "$" + (Math.round((usdPerMin * 43200) * 100) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + '</td>'; //USD
            k += '<td>' + btcPerMin * 43200 + '</td>'; //BTC
            k += '</tr>';
            k += '</tbody>';
            document.getElementById('tableDataEstimatedEarnings').innerHTML = k;
        });
        // } else if (coin == "etc") {
        //     $.getJSON('https://api-etc.ethermine.org/miner/0xfb460684608fdfc8b07635b4d1195e87b377c7e0/currentStats', function (data, status) {
        //         var obj = JSON.parse(JSON.stringify(data));
        //         var usdPerMin = obj.data.usdPerMin;
        //         var btcPerMin = obj.data.btcPerMin;

        //         var k = '<tbody>';
        //         k += '<tr>';
        //         k += '<td>' + "Day" + '</td>'; //Period
        //         k += '<td>' + "$" + (Math.round((usdPerMin * 1440) * 100) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + '</td>'; //USD
        //         k += '<td>' + btcPerMin * 1440 + '</td>'; //BTC
        //         k += '</tr>';
        //         k += '<tr>';
        //         k += '<td>' + "Month" + '</td>'; //Period
        //         k += '<td>' + "$" + (Math.round((usdPerMin * 43200) * 100) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + '</td>'; //USD
        //         k += '<td>' + btcPerMin * 43200 + '</td>'; //BTC
        //         k += '</tr>';
        //         k += '</tbody>';
        //         document.getElementById('tableDataEstimatedEarnings').innerHTML = k;
        //     });
    } else {
        //coin not found
        var k = '<tbody>';
        k += '<tr>';
        k += '<td>' + "Day" + '</td>'; //Period
        k += '<td>' + "NA"
        k += '<td>' + "NA"
        k += '</tr>';
        k += '<tr>';
        k += '<td>' + "Month" + '</td>'; //Period
        k += '<td>' + "NA"
        k += '<td>' + "NA"
        k += '</tr>';
        k += '</tbody>';
        document.getElementById('tableDataEstimatedEarnings').innerHTML = k;
    }
}
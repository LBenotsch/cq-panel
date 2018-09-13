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
            $.post("" + "change_coin", { coin: coin }, function (data) {
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
            case 'lb.geo.ellapool.eu:8004':
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

        if (rigs[i].condition !== "mining" && rigs[i].condition !== "throttle" && rigs[i].condition !== "autorebooted"
        && rigs[i].condition !== "high_load") {
            t += '<tr>';
            t += '<td>' + rigs[i].rack_loc + '</td>';
            t += '<td>' + rigs[i].ip + '</td>';
            t += '<td>' + rigs[i].miner_instance + '/' + rigs[i].gpus+ '</td>';
            t += '<td>' + rigs[i].hash + '</td>';
            t += '<td>' + coin + '</td>';
            t += '<td>' + rigs[i].condition + '</td>';
            t += '</tr>';
            tTableTotal++;
            continue;
        }

        k += '<tr>';
        k += '<td>' + rigs[i].rack_loc + '</td>';
        k += '<td>' + rigs[i].ip + '</td>';
        k += '<td>' + rigs[i].miner_instance + '/' + rigs[i].gpus+ '</td>';
        k += '<td>' + rigs[i].hash + '</td>';
        k += '<td>' + coin + '</td>';
        k += '</tr>';
        kTableTotal++;
    }
    k += '</tbody>';
    t += '</tbody>';
    document.getElementById('tableData').innerHTML = k;
    document.getElementById('badMinerTableData').innerHTML = t;
    document.getElementById('badMinerTableCount').innerHTML = "("+tTableTotal+")"
    document.getElementById('tableCount').innerHTML = "("+kTableTotal+")"
})
        //.fail(function () { alert('getJSON request failed! For ' + PANEL_JSON_URL); });
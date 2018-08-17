document.getElementById('change_coin').disabled = true;

$(document).ready(function () {

    //Dropdown keeps selected text in box
    $(".dropdown-menu li a").click(function () {
        $("#options").text($(this).text());
        $.get('http://server.cryptoquarry.net:8080/which_coin', function (data) {
            var coin = document.getElementById("options").textContent
            if (coin == data) {
                document.getElementById("change_coin").disabled = true;
            } else {
                document.getElementById("change_coin").disabled = false;
            }
        });
    });

    var coin;
    $("#change_coin").click(function () {
        jQuery("#change_coin").html('<i class="fa fa-circle-o-notch fa-spin"></i> Changing Coins');
        document.getElementById('change_coin').disabled = true;
        document.getElementById('options').disabled = true;


        coin = document.getElementById("options").textContent;
        if (coin.trim() == "Select a coin to mine" || coin.trim() == "" || coin.trim() == null) {
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
            $.post("http://server.cryptoquarry.net:8080/change_coin", { coin: coin }, function (data) {
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
                }
            });
        }
    });
});

//Dropdown first pulls the last selected coin
$.get('http://server.cryptoquarry.net:8080/which_coin', function (data) {
    document.getElementById("options").textContent = data;
});

//Pulls json data
var url = "http://34.224.90.223/panel.json"
$.getJSON(url, function (data, status) {
    //var preobj = JSON.parse(text.responseText);
    var obj = data.rigs;

    //Fill data for top blocks
    document.getElementById("active-miners").innerHTML = data.alive_rigs + "/" + data.total_rigs;
    document.getElementById("active-gpus").innerHTML = data.alive_gpus;
    document.getElementById("total-hash").innerHTML = Math.round(data.total_hash);
    document.getElementById("avg-gpu-temp").innerHTML = Math.round(data.avg_temp) + "c";

    //Fill miner details table
    var k = '<tbody>';
    for (i = 0; i < obj.length; i++) {
        switch (obj[i].pool) {
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
        k += '<tr>';
        k += '<td>' + obj[i].rack_loc + '</td>';
        k += '<td>' + obj[i].ip + '</td>';
        k += '<td>' + obj[i].gpus + '</td>';
        k += '<td>' + obj[i].hash + '</td>';
        k += '<td>' + coin + '</td>';
        k += '</tr>';
    }
    k += '</tbody>';
    document.getElementById('tableData').innerHTML = k;
})
    .fail(function () { alert('getJSON request failed! For ' + url); });
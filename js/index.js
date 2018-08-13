$(document).ready(function () {
    //Dropdown keeps selected text in box
    $(".dropdown-menu li a").click(function () {
        $("#options").text($(this).text());
    });

    //Displays tooltip on "save changeds" button specified in html
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
});

//Pulls json data
var text = $.getJSON('http://34.224.90.223/panel.json', function () {
    var preobj = JSON.parse(text.responseText);
    var obj = preobj.rigs;

    //Fill data for top blocks
    document.getElementById("active-miners").innerHTML = data.alive_rigs + "/" + data.total_rigs;
    document.getElementById("active-gpus").innerHTML = data.alive_gpus;
    document.getElementById("total-hash").innerHTML = Math.round(hashrate);
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
});
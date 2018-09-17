// JavaScript source code
$(document).ready(function () {
    
    //grab values from session storage
    var a = sessionStorage.percents;
    var b = sessionStorage.scores;
    //put values back into session storage
    sessionStorage.setItem('scores', b);
    sessionStorage.setItem('percents', a);

    let percents = [];
    let scores = [];
    let iter = 0;
    let temp = "";

    //parse percents into integer array
    for (var i = 0; i < a.length; i++) {
        if (a[i] != ',') {
            temp += a[i];
            if (i == (a.length - 1)) {
                percents[iter] = parseInt(temp);
            }
        }
        else if (a[i] == ',') {
            percents[iter] = parseInt(temp);
            //clear temp
            temp = "";
            iter++;
        }
    }

    iter = 0;
    temp = "";
    //parse scores into integer array
    for (var i = 0; i < b.length; i++) {
        if (b[i] != ',') {
            temp += b[i];
            if (i == (b.length - 1)) {
                scores[iter] = parseInt(temp);
            }
        }
        else if (b[i] == ',') {
            scores[iter] = parseInt(temp);
            //clear temp
            temp = "";
            iter++;
        }
    }

    let total = 0;
    //calculations
    for (var i = 0; i < percents.length; i++) {
        total = total + (percents[i] * scores[i] * 0.01);
    }

    //append total
    $('#finalGrade').html(total + "%");



    //go back
    $('#goBack').click(function (e) {
        window.location.href = 'classGrade.html';
        return false;
    });


});
// JavaScript source code
$(document).ready(function () {
    $('#getPercent').submit(function (e) {
        e.preventDefault();

        //this is the percent we want
        var first = $('#firstDigit').val();
        var second = $('#secondDigit').val();
        var third = $('#thirdDigit').val();
        var percent = parseFloat(first + second + "." + third);
        console.log("percent we want to end up with: " + percent);
        //grab values from local storage

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


        //current average
        let total = 0;
        let totalAW = 0; //total assigned weight
        for (var i = 0; i < percents.length; i++) {
            console.log("percent: " + percents[i] * 0.01);
            console.log("score:" + scores[i]);
            totalAW += percents[i] * 0.01
            total = total + (percents[i] * scores[i] * 0.01);
        }
        total = total / totalAW;
        console.log("current total: " + total);

        //remaining percent to be calculated
        remaining = 100;
        for (var i = 0; i < percents.length; i++) {
            remaining = remaining - percents[i];
        }
        console.log("remaining percent to be calculated: " + remaining);
        var calculated = 100 - remaining;
        //calculations
        scoreNeeded = ((percent - (total * (calculated * 0.01))) / (remaining * 0.01)).toFixed(2);

        //append result
        $('#result').html(scoreNeeded);
    });

    //go back
    $('#goBack').click(function (e) {
        window.location.href = 'classGrade.html';
        return false;
    });


});
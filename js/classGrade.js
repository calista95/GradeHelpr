// JavaScript source code
$(document).ready(function () {
    //determine if we need to pre-fill fields
    var a = sessionStorage.scores;
    var b = sessionStorage.percents;
    var scores = [];
    var percents = [];
    let n = 2;
    let topSub = 30;
    if (a && b) // there is preexisting memory
    {
        var i;

        let iter = 0;
        let temp = "";

        //parse scores into integer array
        for (var i = 0; i < a.length; i++) {
            if (a[i] != ',') {
                temp += a[i];
                if (i == (a.length - 1)) {
                    scores[iter] = parseInt(temp);
                }
            }
            else if (a[i] == ',') {
                scores[iter] = parseInt(temp);
                //clear temp
                temp = "";
                iter++;
            }
        }

        iter = 0;
        temp = "";
        //parse percents into integer array
        for (var i = 0; i < b.length; i++) {
            if (b[i] != ',') {
                temp += b[i];
                if (i == (b.length - 1)) {
                    percents[iter] = parseInt(temp);
                }
            }
            else if (b[i] == ',') {
                percents[iter] = parseInt(temp);
                //clear temp
                temp = "";
                iter++;
            }
        }


        //append correct number of input fields
        for (i = 1; i < scores.length; i++) {
            $('#info').append("<input type='text' id='score" + (i + 1) + "'/>" + "  <input type='text' id='percent" + (i + 1) + "'/><br>");
            topSub = topSub + 5;
            $('#submitBtn').css({ 'top': topSub + '%' });
        }

        console.log("length of scores:" + scores.length);

        //append existing values
        for (i = 0; i < scores.length; i++) {
            $('#score' + (i + 1)).val(scores[i]);
            $('#percent' + (i + 1)).val(percents[i]);
        }

    }


    //append new text fields upon request
    $('#addField').click(function () {
        $('#info').append("<input type='text' id='score" + n + "'/>" + "  <input type='text' id='percent" + n + "'/><br>");
        event.preventDefault(); //prevent default behavior
        n++;
        topSub = topSub + 5;
        $('#submitBtn').css({ 'top': topSub + '%' });
    });




    //deal with the form
    $('#myForm').submit(function (e) {
        e.preventDefault();
        var scores = [];
        var percents = [];
        //grab values into an array
        for (var i = 0; i < n; i++) {
            if ($('input#score' + (i + 1)).val() && $('input#percent' + (i + 1)).val()) {
                scores[i] = parseInt($('input#score' + (i + 1)).val());
                percents[i] = parseInt($('input#percent' + (i + 1)).val());
            }
        }

        //put arrays in local storage
        sessionStorage.setItem('scores', scores);
        sessionStorage.setItem('percents', percents);

        //get total percent
        let total = 0;
        for (var i = 0; i < percents.length; i++) {
            total = total + parseInt(percents[i]);
        }

        console.log("total percent:" + total);

        
        //send to correct response accordingly
        if (total < 100) {
            window.location.href = 'classResults_n.html';
            return false;
        }
        else if (total == 100) {
            window.location.href = 'classResults_y.html';
            return false;
        }
        else //give error response
        {
            $('#error').html('<p style="color:red; position: absolute; top: 17%; left: 42%">Error! Your percentages add up to more than 100%<p>');
        }
        
    });

});
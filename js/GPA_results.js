// JavaScript source code
$(document).ready(function () {

    //go back to edit fields
    $('#goBack').click(function (e) {
        window.location.href = 'GPA.html';
        return false;
    })

    //grab values from session storage
    var a = sessionStorage.units;
    var b = sessionStorage.grades;
    var units = [];
    var grades = [];
    var iterator = 0;

    //parse into array
    for (var i = 0; i < a.length; i++) {
        if (a[i] != ',' && b[i] != ',') {
            //console.log(a[i]);
            //console.log(b[i]);
            units[iterator] = parseInt(a[i]);
            grades[iterator] = b[i];
            iterator++;
        }
    }

    //calculate GPA
    var total = 0;
    var creditHours = 0;
    for (var i = 0; i < units.length; i++) {
        creditHours += units[i];

        if (grades[i] == 'A') {
            total += units[i] * 4.00;
        }
        else if (grades[i] == 'A-') {
            total += units[i] * 3.67;
        }
        else if (grades[i] == 'B+') {
            total += units[i] * 3.33;
        }
        else if (grades[i] == 'B') {
            total += units[i] * 3.00;
        }
        else if (grades[i] == 'B-') {
            total += units[i] * 2.67;
        }
        else if (grades[i] == 'C+') {
            total += units[i] * 2.33;
        }
        else if (grades[i] == 'C') {
            total += units[i] * 2.00;
        }
        else if (grades[i] == 'C-') {
            total += units[i] * 1.67;
        }
        else if (grades[i] == 'D+') {
            total += units[i] * 1.33;
        }
        else if (grades[i] == 'D') {
            total += units[i] * 1.00;
        }
        else if (grades[i] == 'D-') {
            total += units[i] * 0.67;
        }
        else if (grades[i] == 'F') {
            total += units[i] * 0.00;
        }
    }

    total = (total / creditHours).toFixed(2);

    //append decimal result
    $('#results').html(total);
    console.log(total);

    //determine letter grade
    let grade = "";
    if (total == 4.0) {
        grade = "an A";
    }
    else if (total >= 3.7) {
        grade = "an A";
    }
    else if (total > 3.3) {
        grade = "an A-";
    }
    else if (total > 3.0) {
        grade = "a B+";
    }
    else if (total > 2.7) {
        grade = "a B";
    }
    else if (total > 2.3) {
        grade = "a B-";
    }
    else if (total > 2.0) {
        grade = "a C+";
    }
    else if (total > 1.7) {
        grade = "a C";
    }
    else if (total > 1.3) {
        grade = "a C-";
    }
    else if (total > 1.0) {
        grade = "a D+";
    }
    else if (total > 0.0) {
        grade = "a D";
    }
    else {
        grade = "an F";
    }


    //append letter grade result
    $('#letterGrade').html(grade);

});
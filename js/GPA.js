// JavaScript source code
$(document).ready(function () {
   
    //determine if we need to pre-fill fields
    var a = sessionStorage.units;
    var b = sessionStorage.grades;
    var units = [];
    var grades = [];
    if (a && b) // there is preexisting memory
    {
        //parse into array
        var iterator = 1;
        for (var i = 0; i < a.length; i++) {
            if (a[i] != ',' && b[i] != ',') {
                console.log(a[i]);
                console.log(b[i]);
                $('#unit' + iterator).val(a[i]);
                $('#grade' + iterator).val(b[i]);
                iterator++;
                console.log("current iterator:" + iterator);
            }
        }

    }
    //var units = [];
    //var grades = [];


    //deal with the form
    $('#classGrades').submit(function (e) 
    {
        e.preventDefault();
        if (allEmpty())//no values are put in, give error response
            {
                $('#error').html('<p style="color:red; position: absolute; top: 17%; left: 42%">Error! Your fields are all empty.<p>');
            }
        else if (notInt()) //at least one value is not valid
        {
            $('#error').html('<p style="color:red; position: absolute; top: 17%; left: 42%">Error! You have an invalid input.<p>');
        }  
        else //there are values put in
            {
                var units = [];
                var grades = [];
                var iterator = 0;
                for (var i = 0; i < 6; i++) 
                    {
                        if ($('#unit' + (i + 1)).val() && $('#grade' + (i + 1)).val()) 
                            {
                                var unit = $('#unit' + (i + 1)).val();
                                units[iterator] = unit;
                                //console.log(unit);
                                var grade = $('#grade' + (i + 1)).val();
                                grades[iterator] = grade;
                                //console.log(grade);
                                iterator++;
                            }
                    }

                //put arrays in local storage
                sessionStorage.setItem('units', units);
                sessionStorage.setItem('grades', grades);

                //redirect to results page
                window.location.href = 'GPA_results.html';
                return false;
        }
        
   
    });

    //error control functions
    function allEmpty()
    {
        var tempString;
            for (var i=0; i<6; i++)
                {
                    if ($('#unit' + (i + 1)).val())
                        return false;
                }
            return true;
        }

    function notInt() //works up to 1000 units (not sure how to handle greater than that)
    {
        let count = 0; //to keep track of how many entrees we have
        for (var i = 0; i < 1000; i++) 
        {
            if ($('#unit' + (i + 1)).val()) //there exists a value
            {
                if (!(isInt($('#unit' + (i + 1)).val())))
                {
                    return true;
                }
            }

        }

        return false;
    }

    function isInt(temp) {
        for (var i=0; i<10; i++)
        {
            if (parseInt(temp) == i)
            {
                return true;
            }
        }
        console.log(temp + " is not an integer");
        return false;
    }
         
    

});
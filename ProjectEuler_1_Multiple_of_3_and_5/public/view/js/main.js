$(document).ready(function(){
    var limit = $('#limit').attr("value");
    var numbers = [];
    var sum = 0;
    for(let counter = 0 ; counter < limit; counter++) { //change this on var
        if((counter % 3 === 0) || (counter % 5 === 0))
        {
            numbers.push(counter);
            sum+= counter;
        }
    }

    


    $('#resultCycle').text(sum);
    $('#resultMath').text(sumMath);
    $('#numbers').text(numbers);
});

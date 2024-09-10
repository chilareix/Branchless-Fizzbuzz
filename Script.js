var fizzBuzzB = [0, 1];
var fizzBuzz = [0, 1];

branchlessFizz = function (max) {
    let mask = [7, 0, 0, 0, 0, 0, 0, 0];
    let string = [null, "Fizz", "Buzz", "FizzBuzz", "Bizz", "FizzBizz", "BuzzBizz", "FizzBuzzBizz"];

    for (let i = 1; i <= max; i++) {
        let index = (mask[i % 3] & 1) +
                    (mask[i % 5] & 2) +
                    (mask[i % 7] & 4);

        string[0] = i;
        fizzBuzzB[i] = string[index];
    }
    
}
fizz = function (max) {

    let output;

    for (let i = 1; i <= max; i++) {

        output = "";

        if (i % 3 == 0) output += ("Fizz");
        if (i % 5 == 0) output += ("Buzz");
        if (i % 7 == 0) output += ("Bizz");

        if (output == "") output = i;

        fizzBuzz[i] = output;
    }
}
measurePerf = function () {
    let len = 10000000;

    console.time('branchlessFizz');
    branchlessFizz(len);
    console.timeEnd('branchlessFizz');

    console.time('fizz');
    fizz(len);
    console.timeEnd('fizz');
}
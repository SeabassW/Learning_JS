// Other Solution for Three Words

function threeWords(text) {
    const words = text.split(" ");
    
    let countWord = 0;
    
    for (let w of words) {
        countWord = w.match(/[a-z]/i) ? countWord + 1 : 0
        
        if (countWord === 3) {
            return true;
        }
    }
    return false;
}

// Own Solution for Most Numbers

function mostNumbers(numbers){
    
    if (arguments.length === 0) {
        return 0
    } else {
        return Math.max(...arguments)-Math.min(...arguments)
    }
}

// Own Solution for Digits Multiplication

function digitsMultip(data) {
    var product = 1;
    var digits = data.toString().split("").filter(isZero);
    
    for (var i = 0; i < digits.length; i++) {
        product *= digits[i];
    }
    
    return product;
}

function isZero(el) {
    if (el !== "0") {
        return true;
    }
}

// Other Solution for Digits Multiplication

function digitsMultip(data) {
    return parseInt(data
        .toString()
        .split("")
        .filter(a => a != "0")
        .reduce((a, b) => parseInt(a) * parseInt(b) ));
}

// Own Solution Count Inversion

// Not solved

function countInversion(sequence) {
    var result = 0;
    var reversed = true;
    var max = sequence[0];
    
    if (sequence[0] <= sequence[1] || sequence.length === 2) {
        reversed = false;
        
        for (var i = 0; i < sequence.length - 1; i++) {

            if (max < sequence[i+1]) {
                max = sequence[i+1];    
            } else {
                result += 1;
            }
        }
    } else {
        for (var i = 0; i < sequence.length - 1; i++) {

            if (max < sequence[i+1]) {
                reversed = false;
                max = sequence[i+1];
            } else {
                result +=1
            }
        }
    }
    
    if (reversed) {
        return 10;
    } else {
        return result;
    }
}

// Own solution Common Words

function commonWords(first, second) {
    const firstList = first.split(",");
    const secondList = second.split(",");
    var result = [];
    
    for (var i = 0; i < secondList.length; i++) {
        for (var j = 0; j < firstList.length; j++) {
            if (firstList[j] === secondList[i]) {
                result.push(firstList[j]);
            }
        }
    }
    
    return result.sort().join(",");
}

// Other solution Common Words

function commonWords(first, second) {
    return first.split(",")
        .filter
        (x => second
            .split(",")
            .includes(x)
        )
        .sort()
        .join(",");
}

// Own solution Absolute sorting

function absoluteSorting(numbers){
    var result = [];
    var args = [...numbers];
    
    for (var i = 0; args.length >= 1; i += 0) {
        var min = args[0];
        var indexMin = 0;
        
        for (var j = 1; j < args.length; j++) {
            if (Math.abs(args[j]) < Math.abs(min)) {
                min = args[j];
                indexMin = j;
            }
        }
        args.splice(indexMin, 1);
        result.push(min);
    }
    return result;
}

// Other solutions Absolute Sorting

function absoluteSorting(numbers){
    return numbers.sort((a, b) => Math.abs(a) - Math.abs(b))
}























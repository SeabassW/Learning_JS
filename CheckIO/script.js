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

// When array is reversed, return 10

function countInversion(sequence) {
    var result = 0;
    
    for (var i = 0; i < sequence.length - 1; i++) {
        var max = 0;
        
        if (sequence[i] <= sequence [i+1]) {
            max = sequence[i+1];    
        } else {
            result = i+1;
            break;
        }
    }
    return result;
}

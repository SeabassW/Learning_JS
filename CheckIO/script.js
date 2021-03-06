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


// Own Solution Median

function median(data) {
    var sorted = sortArray(data);
    var sortedLength = sorted.length;

    return sortedLength % 2 !== 0 ? sorted[Math.floor(sortedLength/2)]
                                        : (sorted[sortedLength/2 - 1] + sorted[sortedLength/2]) / 2;

}

function sortArray(data) {
    var args = data;
    var result = [];

    for (var i = 0; args.length >= 1; i += 0) {
        var min = args[0];
        var indexMin = 0;

        for (var j = 1; j < args.length; j++) {
            if (args[j] < min) {
                min = args[j];
                indexMin = j;
            }
        }
        args.splice(indexMin, 1);
        result.push(min);
    }
    return result;
}

// Own Solution Moore Neighbourhood.
// Doesnt work when row and col are part of matrix....

function countNeighbours(data, row, col) {
    let counter = 0;
    const sizeRow = data[0].length;
    const sizeCol = data[1].length;

    for (var i = row - 1; i <= row + 1; i++) {
        if (i < 0 || i >= sizeRow) {
            continue;
        } else {
            for (var j = col - 1; j <= col + 1; j++) {
                if (j < 0 || j >= sizeCol || (i === row && j === col)) {
                    continue;
                }else if (data[i][j] === 1) {
                    counter += 1;
                }
            }

        }
    }
    return counter;
}

//Works

function countNeighbours(data, row, col){
    var s = 0;
    var adj = [[-1, 1], [-1, 0], [-1, -1], [0, 1], [0, -1], [1, 1], [1, 0], [1, -1]];
    for (let a of adj) {
        let x = row + a[0];
        let y = col + a[1];

      if (data[x] && data[x][y]) {s++;}
    }
    return s;
}


// Own Solution Weak Point

function weakPoint(matrix) {
    let result = [];
    let rowSum = sumOfRows(matrix);
    let colSum = sumOfCols(matrix);

    const minRow = Math.min(...rowSum);
    const minCol = Math.min(...colSum);

    result.push(rowSum.indexOf(minRow), colSum.indexOf(minCol));

    return result;
}

function sumOfRows(matrix) {
    let rowSum = [];

    for (var row = 0; row < matrix.length; row++) {
        let tempSum = 0;

        for (var col = 0; col < matrix[0].length; col++) {
            tempSum += matrix[row][col];
        }
        rowSum.push(tempSum);
    }
    return rowSum;
}

function sumOfCols(matrix) {
    let colSum = [];


    for (var col = 0; col < matrix[0].length; col++) {
        let tempSum = 0;

        for (var row = 0; row < matrix.length; row++) {
            tempSum += matrix[row][col];
        }
        colSum.push(tempSum);
    }
    return colSum;
}

// Other solution

function weakPoint(matrix){

    let rowTotals = [], colTotals = [];
    let rowMin = 0, colMin = 0;
    rowTotals = matrix.map( function (row , rowIndex) {
                             rowIndex === 0 ? colTotals = row :
                                            row.map( function(val , colIndex ) {
                                                    colTotals[colIndex] += val;});
                             return row.reduce( (total , reading) => total += reading);
                          }) ;
    rowMin = Math.min(...rowTotals);
    colMin = Math.min(...colTotals);

    return [ rowTotals.findIndex(val => val===rowMin) ,
             colTotals.findIndex(val => val===colMin) ];
}

// Own solution Most Wanted Letter

function mostWanted(data) {
    let dataParsed = data.replace(/[\W\d_]/g, "");

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerCase = dataParsed.toLowerCase();
    let countLetters = [];

    for (let i of alphabet) {
        let count = 0;
        for (let j of lowerCase) {
            if (j === i) {
                count += 1;
            }
        }
        countLetters.push(count);
    }

    const indexMaxValue = countLetters.indexOf(Math.max(...countLetters))

    return alphabet.charAt(indexMaxValue);
}


// Own solution Long Repeat

function longRepeat(line) {
    let maxCount = 1;

    if (line) {
        let count = 1;

        for (var el = 0; el < line.length - 1; el++) {
            let x = line.charAt(el);
            let y = line.charAt(el+1);

            if (x === y) {
                count += 1;

                if (count > maxCount) {
                    maxCount = count;
                }
            } else {
                count = 1;
            }
        }
    } else {
        maxCount = 0;
    }
    return maxCount;
}

// Own solution Roman Numerals

function romanNumerals(number) {
    let result = []

    while (number > 0) {
        while (number > 899) {
            if (Math.floor(number/1000) >= 1) {
                const quotient = Math.floor(number/1000);
                result.push('M'.repeat(quotient));
                number -= quotient * 1000;
            } else if (Math.floor(number/900) >= 1) {
                result.push('CM');
                number -= 900;
            }
        }
        while (number > 399) {
            if (Math.floor(number/500) >= 1) {
                const quotient = Math.floor(number/500);
                result.push('D'.repeat(quotient));
                number -= quotient * 500;
            } else if (Math.floor(number/400) >= 1) {
                result.push('CD');
                number -= 400;
            }
        }

        while (number > 89) {
            if (Math.floor(number/100) >= 1) {
                const quotient = Math.floor(number/100);
                result.push('C'.repeat(quotient));
                number -= quotient * 100;
            } else if (Math.floor(number/90) >= 1) {
                result.push('XC');
                number -= 90;
            }
        }

        while (number > 39) {
            if (Math.floor(number/50) >= 1) {
                const quotient = Math.floor(number/50);
                result.push('L'.repeat(quotient));
                number -= quotient * 50;
            } else if (Math.floor(number/40) >= 1) {
                result.push('XL');
                number -= 40;
            }
        }

        while (number > 8) {
            if (Math.floor(number/10) >= 1) {
                const quotient = Math.floor(number/10);
                result.push('X'.repeat(quotient));
                number -= quotient * 10;
            } else if (Math.floor(number/9) >= 1) {
                result.push('IX');
                number -= 9;
            }
        }

        while (number > 3) {
            if (Math.floor(number/5) >= 1) {
                const quotient = Math.floor(number/5);
                result.push('V'.repeat(quotient));
                number -= quotient * 5;
            } else if (Math.floor(number/4) >= 1) {
                result.push('IV');
                number -= 4;
            }
        }

        result.push('I'.repeat(number));
        number -= number;
    }
    return result.join("");
}




































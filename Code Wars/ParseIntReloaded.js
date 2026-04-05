// In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

// Examples:

// "one" => 1
// "twenty" => 20
// "two hundred forty-six" => 246
// "seven hundred eighty-three thousand nine hundred and nineteen" => 783919

function parseInt(str) {
    const numbers = {
        zero: 0, one: 1, two: 2, three: 3, four: 4,
        five: 5, six: 6, seven: 7, eight: 8, nine: 9,
        ten: 10, eleven: 11, twelve: 12, thirteen: 13,
        fourteen: 14, fifteen: 15, sixteen: 16,
        seventeen: 17, eighteen: 18, nineteen: 19,
        twenty: 20, thirty: 30, forty: 40,
        fifty: 50, sixty: 60, seventy: 70,
        eighty: 80, ninety: 90
    };

    const multipliers = {
        hundred: 100,
        thousand: 1000,
        million: 1000000
    };

    let result = 0, current = 0

    const words = str
        .replace(/-/g, " ")
        .replace(/\band\b/g, "")
        .split(" ");

    for (let word of words) {
        if (numbers[word] !== undefined) {
            current += numbers[word]
        } else if (word === 'hundred') {
            current *= 100
        } else if (multipliers[word]) {
            result += current * multipliers[word]
            current = 0

        }
    }
    return result + current
}
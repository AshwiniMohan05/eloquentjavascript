function countbc(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === "B") {
            count++;
        }
    }
    return (count); // return outside of for loop
}
console.log(countbc("BBBBBBC"));

function countChar(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return (count);
}
console.log(countChar("kakkelak", "k"));
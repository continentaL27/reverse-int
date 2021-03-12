module.exports = function reverse (n) {

    let num = Math.abs(n).toString().split("").reverse().join("");
    let result = Number.parseInt(num);
    return result;
}

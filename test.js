// const arra = ["hello", 1, 5.5, null, false];
const value = 1;
const con = (function linearSearch(
    arra = ["hello", 1, 5.5, null, false],
    value
) {
    for (let i = 0; i < arra.length; i++) {
        if (arra[i] === value) {
            return i;
        }
    }
    return -1;
})();

console.log(con);

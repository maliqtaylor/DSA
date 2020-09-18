function reverseArray(a) {
    let i = a.length - 1;
    let ans = '';
    while (i >= 0) {
        if (i === 0) {
            ans += a[i]
        }
        else {
            ans += a[i] + ' '
        }
        i--
    }
    return ans
}
console.log(reverseArray([1, 4, 6, 8]))
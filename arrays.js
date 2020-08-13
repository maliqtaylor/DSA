function reverseArray(a) {
    let i = a.length - 1;
    let ans = '';
    while( i >= 0 ){
        ans += a[i]
        i --
    }
    return ans
}
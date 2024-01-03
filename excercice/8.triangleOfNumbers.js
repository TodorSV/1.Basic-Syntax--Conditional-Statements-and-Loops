function triangle(n) {

    for (let i = 1; i <= n; i++) {
        let n1 = ""
        for (let j = 1; j <= i; j++) {
            n1 += i;
            if (j !== i) {
                n1 += " "
            }

        }
        console.log(n1);
    }

}
triangle(3)
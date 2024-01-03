function printAndSum(n1, n2) {
    let sum = 0
    let curr = 0
    let n3 = ""
    for (let i = n1; i <= n2; i++) {
        curr = i;
        n3 += " " + i
        sum += i


    }
    console.log(n3);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10)
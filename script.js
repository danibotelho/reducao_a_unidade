function manipulandoArray(num){
    
    var num ;

    while ((num > 1) && (num != 4)) {

        var b = Array.from(num.toString().split('').map(Number))
        console.log(b)

        let x = b.map(item => Math.pow(item, 2))
        console.log(x)

        num = x.reduce((a, c) => a + c, 0)
        console.log(num)

    }
}
manipulandoArray(23)
//manipulando arrays.

// Bài 4:
// Viết chương trình tính tổng các số nguyên tố nhỏ hơn 500

function checkSNT(n) {
    let check = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n%2 ==0){
            // alert('n không là số nguyên tố');
            check = false;
            break;
        }
    }
    return check;
}

function getTotal() {
    let total = 0;
    for (let j = 2; j < 500; j++) {
        if(checkSNT(j) == true){
            total += j;
        }
    }
    document.writeln("Tổng của các số nguyên tố nhỏ hơn 500 là: " + total);
}

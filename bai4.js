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

function demo2() {
    let x =1;
    let i = 0;
    let total = 0;
    while (x>0){
        x++;
        if (checkSNT(x)){
            document.writeln(x);
            i++;
            total += x;
        }
        if (x < 500){
            break;
        }
    }
    document.writeln("<br>");
    document.writeln("Tổng của các SNT nhỏ hơn 500 là: " + total);
}
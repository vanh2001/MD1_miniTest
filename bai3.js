// Bài 3:
// Cho trước 1 mảng bao gồm n phần tử
// Viết  chương trình tính tổng các số nguyên tố trong mảng.

let a = [1,3,7,5,9,17,19,15,14,16];
let b=[];
let total = 0;
for (let i = 0; i < a.length; i++) {
    for (let j = 2; j <= Math.sqrt(a[i]); j++) {
        if (a[i]%2 == 0){
            continue;
        }else {
            b.push(a[i]);
            break;
        }
    }
}
for (let k = 0; k < b.length; k++) {
    total += b[k];
}
document.writeln("Tổng các số nguyên tử là: " + total);
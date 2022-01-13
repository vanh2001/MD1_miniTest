// Bài 2:
// Cho trước 1 mảng n phần tử
// Viết chương trình cho phép đếm xem có bao nhiêu phần tử a ( a được nhập vào tử bàn phím)

let x=0;
let array = new Array();
function addElement() {
    array[x] = document.getElementById('txtText').value;
    alert("Phần tử: " +array[x] + "" +"Add to index: " + x);
    x++;
    document.getElementById('txtText').value = "";
}

function demElement() {
    let text = "<hr>";
    text += "Mảng có" + array.length + " " + "phần tử";
    document.getElementById('result').innerHTML = text;
}
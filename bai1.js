// Bài 1: Cho trước 1 mảng n phần tử
// Viết chương trình đếm và in ra số lượng các số chẵn trong mảng

// let a = [-4,-3,1,2,4,6,7,9,12,15];
let x = 0;
let array = new Array();
function addElement() {
    array[x] = document.getElementById('txtText').value;
    alert("Phần tử: " + array[x] + "Add in index: " + x);
    x++;
    document.getElementById('txtText').value = "";
}

function tinhSoChan() {
    let text = "<hr>";
    let a = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0){
            text += "Mảng có số chẵn là: " + array[i] + " " + "tại vị trí" + i + "<br>";
            a.push(array[i]);
        }
    }
    document.getElementById('count').innerHTML = "Mảng có:" + a.length + " " + "số chẵn";
    text += "Mảng có" + array.length + "Phần tử";
    document.getElementById('result').innerHTML = text;
}

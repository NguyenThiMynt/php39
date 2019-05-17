function checkValidate(a, b) {
    if (a == '' || b == '') {
        document.getElementById('show-error').innerText = "Không được để trống dữ liệu";
        document.getElementById('show-result').innerText = '';
        return false;
    }
    if (isNaN(a) || isNaN(b)) {
        document.getElementById('show-error').innerText = "Cần nhập dữ liệu là số";
        document.getElementById('show-result').innerText = '';
        return false;
    }

    document.getElementById('show-error').innerText = '';
    document.getElementById('show-result').innerText = '';
    return true;
}

function add() {
    var a = document.getElementById('number-a').value;
    var b = document.getElementById('number-b').value;
    if (checkValidate(a, b)) {
        document.getElementById('show-result').innerHTML = "a + b = " + (parseInt(a) + parseInt(b));
    }
}

function sub() {
    var a = document.getElementById('number-a').value;
    var b = document.getElementById('number-b').value;
    if (checkValidate(a, b)) {
        document.getElementById('show-result').innerHTML = "<br />a - b = " + (parseInt(a) - parseInt(b));
    }
}

function multi() {
    var a = document.getElementById('number-a').value;
    var b = document.getElementById('number-b').value;
    if (checkValidate(a, b)) {
        document.getElementById('show-result').innerHTML = "a * b = " + (parseInt(a) * parseInt(b));
    }
}
var a = 6;
var sum = 9;
sum -= ++a + --a - 2 + (a++ * 2) + a--;
// var sum = (++a + 4) * (++a - 1 + a++);


console.log(sum);
if (checkbox.checked == true) {
    document.getElementById('showinfo').innerHTML = "Name:" + value1 +"<br/>Email:" +value2 +"<br/>Contact No:"+value3 +"<br/>Gender:"+checkbox.value;
}
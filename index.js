const display = document.getElementsById("display");

function appendtodisplay(input){
    document.getElementById('display').value += input;
}

function cleardisp(){
    document.getElementById('display').value = "";
}
function calculate(){
    document.getElementById('display').value = eval(document.getElementById('display').value)}
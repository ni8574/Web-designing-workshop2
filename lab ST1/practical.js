

function Findtable() {
    
    let num = document.getElementById("multiplication table").value;


    if (num === "" || num < 1 || num > 10) {
        alert("Please enter a number between 1 and 10");
        return;
    }

    
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += num + " x " + i + " = " + (num * i) + "<br>";
    }

    
    document.querySelector("table").innerHTML = result;
}

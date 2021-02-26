var calcutetipbtn = document.getElementById("calcutetip");
function calculate() {
    var totolBill = document.getElementById("totalAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numOfPeople = document.getElementById("totalPeople").value;
    //validate input
    if (totolBill === "" || serviceQuality == 0) {
        alert("Please enter values");

    }
    //Check to see if this input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
    }
    //Calculate tip
    var total = (totolBill * serviceQuality) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    alert(total);
}
calcutetipbtn.addEventListener("click", calculate);



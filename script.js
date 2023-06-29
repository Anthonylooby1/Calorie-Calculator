// console.log("hello")
var maleBMR = 0;
var maleTotal = 0;
var femaleBMR = 0;
var femaleTotal = 0;
let fat = 0;
var carbs = 0;
var protein = 0;
function findBMR() {
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var active = document.getElementById("active").value;

    console.log(age);
    console.log(gender);
    console.log(height);
    console.log(weight);
    console.log(active);
    

    //BMR calculation + AMR calculation

    if (gender == "Male") {
        maleBMR = 88.362 + (13.397 * weight) + (3.098 * height) - (4.330 * age);
        maleTotal = (Math.round(maleBMR) * active) - 500;
        console.log(maleTotal);
        console.log(maleBMR);
        document.getElementById("calories").innerHTML = "Calories: " + Math.round(maleTotal);
        //fat
        fat = (maleTotal * .30) / 9;
        document.getElementById("fat").innerHTML = "Fat: " + Math.round(fat) + "g";
        //carbs
        carbs = (maleTotal/2) / 4;
        document.getElementById("carbs").innerHTML = "Carbs: " +  Math.round(carbs) + "g";
        //protein
        protein = weight * 1.5;
        document.getElementById("protein").innerHTML = "Protein: "  + Math.round(protein) + "g";
    } else if (gender == "Female") {
        femaleBMR = 447.593 + (9.247 * weight) + (1.850 * height) - (4.676 * age);
        femaleTotal = (femaleBMR * active) - 500;
        console.log(femaleTotal);
        document.getElementById("calories").innerHTML = "Calories: " + Math.round(femaleTotal);
        //fat
        fat = (femaleTotal * .90) / 9;
        document.getElementById("fat").innerHTML ="Fat: " + Math.round(fat) + "g";
        //carbs
        carbs = (femaleTotal/2) / 4;
        document.getElementById("carbs").innerHTML = "Carbs: " + Math.round(carbs) + "g";
        //protein
        protein = weight * 1.5;
        document.getElementById("protein").innerHTML = "Protein: " +  Math.round(protein) + "g";
    } 
    var xValues = ["Fats", "Carbs", "Protein"];
    var yValues = [Math.round(fat), Math.round(carbs), Math.round(protein)];
    var barColors = [
      "#232435",
      "#727B8C",
      "#C11C30",
    ];
    
    new Chart("myChart", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      }
    });
}   

//chart from Chart.js





function convertToNormal() {
  var height = document.getElementById("inches").value;
  var weight = document.getElementById("lbs").value;
  console.log(height + "height");
  console.log(weight + "weight");

  var kilo = weight * 0.45359237;
  document.getElementById("lbs-2-kg").innerHTML = Math.round(kilo) + " kg";
  var cm = height * 2.54;
  document.getElementById("in-2-cm").innerHTML = Math.round(cm) + " cm"
}


document.querySelector('button').onclick = function(event) {
    event.preventDefault();

    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    let bmi =  (weight / ((height / 100) ** 2)).toFixed(2); 
    
    let category;
    if (bmi < 18.6) {
        category = "Underweight";
    } else if (bmi <= 24.9) {
        category = "Normal Range";
    } else {
        category = "Overweight";
    }

    document.getElementById('results').textContent = `Your BMI is ${bmi} (${category}).`;
};

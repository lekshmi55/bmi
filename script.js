document.getElementById('calculate').addEventListener('click', function () {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters
    const bmi = weight / (height * height);
    const bmiCategory = getBMICategory(bmi);


    if (!isNaN(bmi)) {
        document.getElementById('bmiValue').textContent = bmi.toFixed(2);
        document.getElementById('bmiCategory').textContent = bmiCategory;
    
    } 
    
    else {
        document.getElementById('bmiValue').textContent = 'Invalid input';
        document.getElementById('bmiCategory').textContent = '-';
    
    }
});

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi < 24.9) {
        return 'Normal Weight';
    } else if (bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}

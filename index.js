function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (!isNaN(weight) && !isNaN(height) && height > 0) {
    const bmi = weight / (height * height);
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Your BMI is: ${bmi.toFixed(2)}`;

    if (bmi < 18.5) {
      resultElement.style.color = "red";
    } else if (bmi >= 18.5 && bmi < 25) {
      resultElement.style.color = "green";
    } else {
      resultElement.style.color = "red";
    }
  } else {
    alert("Please enter valid weight and height.");
  }
}

function checkDrivingEligibility() {
    const age = parseInt(document.getElementById("ageInput").value);

    if (isNaN(age)) {
        document.getElementById("result").textContent = "Please enter a valid age.";
    } else if (age < 12) {
        document.getElementById("result").textContent = "You're too young to even think about driving!";
    } else if (age >= 12 && age < 18) {
        document.getElementById("result").textContent = "You can't drive yet, but you're getting there!";
    } else if (age >= 18 && age <= 60) {
        document.getElementById("result").textContent = "You are eligible to drive!";
    } else if (age > 60) {
        document.getElementById("result").textContent = "You are past the age of driving safely.";
    }
}
function checkPasswordStrength(password) {
    let hasNumber = false;
    let hasSpecial = false;
    let specialChars = "!@#$%^&*";

    // Check for numbers and special characters using a loop
    for (let char of password) {
        if (!isNaN(char) && char !== " ") {
            hasNumber = true;
        }
        if (specialChars.includes(char)) {
            hasSpecial = true;
        }
    }

    // Conditions
    const isLongEnough = password.length >= 8;

    // Determine strength
    if (isLongEnough && hasNumber && hasSpecial) {
        console.log("Strong Password");
    } 
    else if (isLongEnough && (hasNumber || hasSpecial)) {
        console.log("Medium Password");
    } 
    else {
        console.log("Weak Password");
    }
}

// 🔹 Example usage:
checkPasswordStrength("Hello123!");  
checkPasswordStrength("Hello123");    
checkPasswordStrength("Hi12");       

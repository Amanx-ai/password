function checkPassword(password) {
    let hasNumber = false;
    let hasSpecial = false;
    let specialChars = "!@#$%^&*";

    // Loop to check characters
    for (let char of password) {
        if (!isNaN(char) && char !== " ") {
            hasNumber = true;
        }
        if (specialChars.includes(char)) {
            hasSpecial = true;
        }
    }

   
    if (password.length < 8) {
        console.log("Password rejected: must be at least 8 characters.");
        return;
    }

   
    if (!hasNumber) {
        console.log("Password rejected: must contain at least one number.");
        return;
    }

    
    if (!hasSpecial) {
        console.log("Password rejected: must contain at least one special character (!@#$%^&*).");
        return;
    }

    // ✔ If accepted, determine strength
    if (password.length >= 12) {
        console.log("Strong password");
    } else {
        console.log("Medium password");
    }
}

// 🔹 Examples
checkPassword("Hi12");         
checkPassword("HelloWorld1");  
checkPassword("Hello123!");    
checkPassword("VeryStrongPass123!");

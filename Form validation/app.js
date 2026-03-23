//Form validation:
//👉 Checking whether the user input is correct, complete, and safe before sending it to the server.

// Username should not be empty.
// Email should be in correct format.
// Password should have minimum length.

// 🧠 What is Regex?:
// 👉 Regex (Regular Expression) is used to check patterns in strings

// let userNamePatt = /^[A-Z][a-z@+-]{5,15}$/

// let mobileNumer = /^[6-9][0-9]{9}$/

// let panCardPatt = /^[A-Z]{4}[0-9]{5}[A-Z]$/

// let adharCard = /^[0-9]{4} [0-9]{4} [0-9]{4}$/

// let email = /^[A-Za-z0-9+_]+@[A-Za-z0-9-_]+\.[A-Za-z]{2,}$/



// EXAMPLE NORMAL FORM VALIDATION WITHOUT USING THE REGEX:

// function validateForm() {
//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let password = document.getElementById("password").value;

//   // Name validation
//   if (name.trim() ==="") {
//     alert("Name is required");
//     return false;
//   }

//   // Email validation
//   if (!email.includes("@")) {
//     alert("Enter valid email");
//     return false;
//   }

//   // Password validation
//   if (password.trim().length < 6) {
//     alert("Password must be at least 6 characters");
//     return false;
//   }

//   return true;
// }




// function validateForm() {

//   let username = document.getElementById("username").value;
//   let emailVal = document.getElementById("email").value;
//   let password = document.getElementById("password").value;

//   // Patterns
//   let userNamePatt = /^[A-Z][a-z@+-]{5,15}$/;
//   let emailPatt = /^[A-Za-z0-9+_]+@[A-Za-z0-9-_]+\.[A-Za-z]{2,}$/;

//   // Username validation
//   if (!userNamePatt.test(username)) {
//     alert("Invalid Username");
//     return false;
//   }

//   // Email validation
//   if (!emailPatt.test(emailVal)) {
//     alert("Invalid Email");
//     return false;
//   }

//   // Password validation (simple)
//   if (pssword.length < 6) {
//     alert("Password must be at least 6 characters");
//     return false;
//   }

//   return true;
// }

let text = "java script"
console.log(text.slice(0,4));

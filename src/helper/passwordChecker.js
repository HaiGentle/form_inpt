export const passwrodChecker = (password) => {
    if(password === "") {
        return ["Please provide the required field"]
    }
    let mess = [];
    if(password.length < 6) {
        mess.push("Password must be at least 6 characters long");
    }
    if(!/[A-Z]/.test(password)) { //check la so
        mess.push("Please include at least one capital letter");
    }
    if(!/[0-9]/.test(password)) {
        mess.push("Please include at least one number");
    }
    return mess;
}
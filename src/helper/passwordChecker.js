export const passwrodChecker = (password) => {
    if(password === "") {
        return ["Please provide the required field"]
    }
    let mess = [
        "Please include at least one capital letter",
        "Please include at least one number",
        "Password must be at least 6 characters long"
    ];
    if(password.length >= 6) {
        mess[2] = true;
    }
    for(let i=0; i < password.length; i++) {
        // console.log({i});
        if(!isNaN(password[i])) { //check la so
            mess[1] = true;
        }
        if(password[i] === password[i].toUpperCase()) {
            mess[0] = true
        }
    }
    return mess;
}
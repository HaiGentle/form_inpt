export const passwordConfirmChecker = (password, passwordConfirm) => {
    if(password === "") {
        return ["Please provide the required field"]
    }
    if(password === passwordConfirm) {
        return []
    }
    else {
        return ["The provided passwords do not match"]
    }
}
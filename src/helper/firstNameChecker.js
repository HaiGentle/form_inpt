export const firstNameChecker = (value) => {
    if(value === "") {
        return ["Please provide the required field"]
    }
    else return [true]
}
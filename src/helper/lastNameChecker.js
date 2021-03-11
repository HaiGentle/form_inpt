export const lastNameChecker = (value) => {
    if(value === "") {
        return ["Please provide the required field"]
    }
    else return []
}
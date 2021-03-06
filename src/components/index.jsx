import { useState } from "react";
import styled from "styled-components";
import { firstNameChecker } from "../helper/firstNameChecker";
import { lastNameChecker } from "../helper/lastNameChecker";
import { passwrodChecker } from "../helper/passwordChecker";
import { passwordConfirmChecker } from "../helper/passwordConfirmChecker";
import WrapperInput from './wrapperInput'

const Register = styled.form`
    margin: 50px 0 0 10px;
`
const ButtonSubmit = styled.button`
    padding: 8px 10px;
    color: white;
    font-size: 16px;
    font-weight: 500;
    background-color: rgb(0, 191, 97);
    outline: none;
    border: none;
    border-radius: 3px;
`

const RegisterForm = () => {

    const [formValue, setFormValue] = useState({
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: ""
    })
    const [mess, setMess] = useState({
        password: [null],
        confirmPassword: [null],
        firstName: [null],
        lastName: [null]
    })

    const handlePasswordInptChange = (value) => {
        setFormValue({...formValue, password: value});
        setMess({...mess, password: passwrodChecker(value)});
    }
    const handlePasswordConfirmInptChange = (value) => {
        setFormValue({...formValue, confirmPassword: value});
        setMess({
            ...mess,
            confirmPassword: passwordConfirmChecker(formValue.password, value)
        });
    }
    const handleFirstNameInptChange = (value) => {
        setFormValue({...formValue, firstName: value});
        setMess({...mess, firstName: firstNameChecker(value)});
    }
    const handleLastNameInptChange = (value) => {
        setFormValue({...formValue, lastName: value});
        setMess({...mess, lastName: lastNameChecker(value)});
    }
    const handleButtonSubmit = (e) => {
        e.preventDefault();
        console.log({formValue});
        console.log({mess});
    }

    //hàm kiểm tra có mess không để show ra mess
    function checker(value) {
        let result = true;
        value.forEach(e => {
            if(e == null) {
                return result = null;
            }
            if(e !== true) {
                result = false;
            }
        })
        // result = true;
        return result;
    }

    return (
        <Register onSubmit={handleButtonSubmit}>
            <WrapperInput
                type="Password"
                title="Password*"
                valueInput={formValue.password}
                mess={mess.password}
                handleInputChange={handlePasswordInptChange}
                checked={checker(mess.password)}
            />
            <WrapperInput
                title="Confirm Password*"
                type="Password"
                valueInput={formValue.confirmPassword}
                mess={mess.confirmPassword}
                handleInputChange={handlePasswordConfirmInptChange}
                checked={checker(mess.confirmPassword)}
            />
            <WrapperInput
                title="First name"
                type="text"
                valueInput={formValue.firstName}
                mess={mess.firstName}
                handleInputChange={handleFirstNameInptChange}
                checked={checker(mess.firstName)}
            />
            <WrapperInput
                title="Last name"
                type="text"
                valueInput={formValue.lastName}
                mess={mess.lastName}
                handleInputChange={handleLastNameInptChange}
                checked={checker(mess.lastName)}
            />
            <ButtonSubmit type="submit">Register</ButtonSubmit>
        </Register>
    )
}

export default RegisterForm
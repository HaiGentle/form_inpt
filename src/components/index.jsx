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
        password: null,
        confirmPassword: null,
        firstName: null,
        lastName: null
    })

    const handleInptChange = (e) => {
        const {name, value} = e.target;
        setFormValue(pre => (
            {...pre,[name] : value }
        ))
        let messTemp ;
        switch(name) {
            case "password":
                messTemp = passwrodChecker(value);
                setMess(pre => (
                    {...pre, [name]: messTemp}
                ))
                break;
            case "confirmPassword":
                messTemp = passwordConfirmChecker(formValue.password, value);
                setMess(pre => (
                    {...pre, [name]: messTemp}
                ))
                break;
            case "firstName":
                messTemp = firstNameChecker(value);
                setMess(pre => (
                    {...pre, [name]: messTemp}
                ))
                break;
            case "lastName":
                messTemp = lastNameChecker(value);
                setMess(pre => (
                    {...pre, [name]: messTemp}
                ))
                break;
            default: break;
        }
    }
    const handleButtonSubmit = (e) => {
        e.preventDefault();
        console.log({formValue});
        console.log({mess});
    }

    //hàm kiểm tra có mess không để show ra mess
    function checker(value) {
        let result = null;
        if(value == null) return result;
        if(value.length > 0) {
            result = false
        }
        if(value.length === 0) {
            result = true;
        }
        return result;
    }

    return (
        <Register onSubmit={handleButtonSubmit}>
            <WrapperInput
                type="password"
                title="Password*"
                name="password"
                valueInput={formValue.password}
                mess={mess.password}
                handleInputChange={handleInptChange}
                checked={checker(mess.password)}
            />
            <WrapperInput
                title="Confirm Password*"
                type="password"
                name="confirmPassword"
                valueInput={formValue.confirmPassword}
                mess={mess.confirmPassword}
                handleInputChange={handleInptChange}
                checked={checker(mess.confirmPassword)}
            />
            <WrapperInput
                title="First name"
                type="text"
                name="firstName"
                valueInput={formValue.firstName}
                mess={mess.firstName}
                handleInputChange={handleInptChange}
                checked={checker(mess.firstName)}
            />
            <WrapperInput
                title="Last name"
                type="text"
                name="lastName"
                valueInput={formValue.lastName}
                mess={mess.lastName}
                handleInputChange={handleInptChange}
                checked={checker(mess.lastName)}
            />
            <ButtonSubmit type="submit">Register</ButtonSubmit>
        </Register>
    )
}

export default RegisterForm
import styled from "styled-components";

const Wrapper = styled.div`
    width: 220px;
    height: auto;
    position: relative;
    margin-bottom: 20px;
`
const Label = styled.label`
    font-size: 16px;
`
const Input = styled.input`
    width: 100%;
    padding: 12px 50px 12px 12px;
    margin-top: 7px;
    border-radius: 3px;
    border: solid 1px;
    /* border: ${props => props.checked? "#00ff00" : "red"} 1px solid; */
    &:focus{
        outline: none;
        border: rgba(61, 195, 248, 0.507) 3px solid;
        box-shadow: 0 0 10px rgba(61, 195, 248, 0.507);
        border-radius: 3px;
    }
`
const Icon = styled.div`
    position: absolute;
    height: 30px;
    width: 30px;
    text-align: center;
    top: 37px;
    right: 0;
    padding-top: 2px;
`
const IconX = styled(Icon)`
    border-left: red 1px solid;
    color: red;
`
const IconV = styled(Icon)`
    border-left: #00ff00 1px solid;
    color: #00ff00;
`
const Mess = styled.p`
    color: red;
    margin: unset;
    font-size: 13px;
`

const InputWrapper = (props) => {
    const {title, type, valueInput, mess, handleInputChange, checked} = props;
    
    const handleOnChange = (e) => {
        const value = e.target.value;
        handleInputChange(value);
    }

    return (
        <Wrapper>
            <Label htmlFor={title}>{title}</Label>
            <Input type={type} value={valueInput} onChange={handleOnChange}/>
            {checked===false? <IconX>X</IconX> : null}
            {checked===true? <IconV>V</IconV> : null}
            {   
                checked===false? mess.map((m,i) => (
                    <Mess key={i}>{m}</Mess>
                )) : null
            }
        </Wrapper>
    )
}

export default InputWrapper
import styled from "styled-components";
import COLOR from "../../common/constants/color";

const InputContainer = styled.div`
  display: flex;
`;

const StyledInput = styled.input`
  font-size: 19px;
  width: 100%;
  padding-left: 15px;
  border: 0;
  border-radius: 0 10px 10px 0;
  outline: none;
  &::placeholder {
    color: ${COLOR.gray3};
  }

  @media only screen and (max-width: 500px) {
    font-size: 15px;
    padding-left: 10px;
  }
  @media only screen and (max-width: 350px) {
    font-size: 13px;
  }
`;

const Label = styled.label`
  font-size: 19px;
  text-align: center;
  width: 230px;
  padding: 10px 0;
  border-radius: 10px 0 0 10px;
  background-color: ${COLOR.gray6};
  color: ${COLOR.gray1};

  @media only screen and (max-width: 500px) {
    width: 160px;
    font-size: 15px;
  }
  @media only screen and (max-width: 350px) {
    width: 150px;
    font-size: 13px;
  }
`;

type PropsType = {
  type?: string;
  name: string;
  label: string;
  placeholder?: string;
  // required?: boolean;
  autofocus?: boolean;
};

const Input: React.FC<PropsType> = (props) => {
  return (
    <InputContainer>
      <Label htmlFor={props.name}>{props.label}</Label>
      <StyledInput
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        // required={props.required}
        autoFocus={props.autofocus}
      />
    </InputContainer>
  );
};

export default Input;

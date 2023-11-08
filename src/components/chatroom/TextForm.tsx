import styled from "styled-components";
import COLOR from "../../common/constants/color";
import ButtonIcon from "../../assets/icon/paper-plane.svg";

const InputContainer = styled.form`
  position: fixed;
  bottom: 0;
  margin-bottom: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLOR.black};
  width: 100%;
  height: 50px;
`;

const StyledInput = styled.input`
  font-size: 19px;
  margin: 0 15px;
  padding: 0 17px;
  width: 100%;
  height: 75%;
  border: none;
  border-radius: 5px;
  outline: 0;
`;

const SubmitButton = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  background: none;
  border: 0;
  cursor: pointer;
`;

const IconImage = styled.img``;

type FormType = {
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
};

const TextForm: React.FC<FormType> = (props) => {
  return (
    <InputContainer onSubmit={props.handleSubmit}>
      <StyledInput name="content" />
      <SubmitButton type="submit">
        <IconImage src={ButtonIcon} />
      </SubmitButton>
    </InputContainer>
  );
};

export default TextForm;

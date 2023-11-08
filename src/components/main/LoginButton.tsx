import styled from "styled-components";
import COLOR from "../../common/constants/color";

const Button = styled.button`
  font-size: 19px;
  width: 100%;
  padding: 7px 0;
  border: 3px solid ${COLOR.gray6};
  border-radius: 10px;
  background-color: ${COLOR.gray6};
  color: ${COLOR.white};
  &:hover {
    cursor: pointer;
    border: ${(props) => !props.disabled && `3px solid ${COLOR.yellow}`};
    box-shadow: ${(props) => !props.disabled && `0 0 10px ${COLOR.yellow}`};
  }

  @media only screen and (max-width: 500px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 350px) {
    font-size: 13px;
  }
`;

const LoginButton: React.FC = () => {
  return <Button type="submit">JOIN ✨</Button>;
};

export default LoginButton;

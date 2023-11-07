import styled from "styled-components";
import COLOR from "../../common/constants/color";

const Button = styled.button`
  font-size: 19px;
  width: 100%;
  padding: 10px 0;
  border: 3px solid ${COLOR.gray6};
  border-radius: 10px;
  background-color: ${COLOR.gray5};
  color: ${COLOR.white};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => !props.disabled && COLOR.gray6};
  }

  @media only screen and (max-width: 500px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 350px) {
    font-size: 13px;
  }
`;

const LoginButton: React.FC = () => {
  return <Button type="submit">JOIN</Button>;
};

export default LoginButton;

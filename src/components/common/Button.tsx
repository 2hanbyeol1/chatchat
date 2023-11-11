import styled from "styled-components";
import COLOR from "../../common/constants/color";

import { WidthType, ButtonType } from "../../common/type/props";

const StyledButton = styled.button<{ width?: WidthType }>`
  font-size: 19px;
  width: ${(props) =>
    props.width === "initial"
      ? `${props.width}`
      : props.width
      ? `${props.width}px`
      : "100%"};
  padding: 7px 15px;
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

type PropsType = {
  children: string;
  width?: WidthType;
  type?: ButtonType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<PropsType> = (props) => {
  return (
    <StyledButton width={props.width} type={props.type} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
};

export default Button;

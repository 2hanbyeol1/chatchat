import styled from "styled-components";

const Typography = styled.div`
  font-size: 14px;
`;

type PropsType = {
  children: string;
};

const Message: React.FC<PropsType> = (props) => {
  return <Typography>{props.children}</Typography>;
};

export default Message;

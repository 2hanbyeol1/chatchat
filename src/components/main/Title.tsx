import styled from "styled-components";
import COLOR from "../../common/constants/color";

const TitleFont = styled.h1`
  font-size: 50px;
  text-align: center;
  color: ${COLOR.white};
  text-shadow: 5px 5px ${COLOR.gray6};
  margin: 0;

  @media only screen and (max-width: 490px) {
    font-size: 40px;
  }
`;

const Title: React.FC = () => {
  return <TitleFont>💬 👀 💬</TitleFont>;
};

export default Title;

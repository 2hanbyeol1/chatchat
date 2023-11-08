import styled from "styled-components";

import COLOR from "../../common/constants/color";

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 15px);
  width: -webkit-calc(100% - 30px);
  height: 70px;
  margin: 0 15px;
  background-color: ${COLOR.black};
  border-bottom: 1px solid ${COLOR.gray7};
`;

const HeaderItem = styled.span``;

const TitleFont = styled.h2`
  color: ${COLOR.white};
  margin: 0;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <HeaderItem></HeaderItem>
      <TitleFont>한부리부리월드 🎉</TitleFont>
      <HeaderItem></HeaderItem>
    </StyledHeader>
  );
};

export default Header;

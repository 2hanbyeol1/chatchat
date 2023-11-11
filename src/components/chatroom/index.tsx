import styled from "styled-components";

import { ScrollView } from "../common/Container";

import COLOR from "../../common/constants/color";

export const ChatView = styled(ScrollView)`
  margin-top: 80px; // header 70 mb 10
  margin-bottom: 57px; // input 57
`;

export const WarningContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginWarning = styled.div`
  margin: 10px 0 15px; // header 70 mb 10
  font-size: 20px;
  color: ${COLOR.white};
  text-align: center;
`;

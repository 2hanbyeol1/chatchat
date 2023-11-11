import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { userState } from "../../common/recoil/atom";

import COLOR from "../../common/constants/color";
import { ChatType } from "../../common/type/chatroom";

const ChatContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const User = styled.div`
  font-size: 14px;
  color: ${COLOR.white};
  margin-bottom: 6px;
`;

const Date = styled.div`
  font-size: 10px;
  color: ${COLOR.white};
  margin-bottom: 3px;
`;

const RowContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const ChatBubble = styled.div`
  color: ${COLOR.black};
  max-width: 70%;
  border-radius: 10px;
  padding: 10px 10px;
  word-break: break-all; // 영어 줄 바꿈
`;

type ChatProps = Omit<ChatType, "id"> & {};

const Chat: React.FC<ChatProps> = (props) => {
  const currentUser = useRecoilValue(userState);
  const mine = currentUser === props.user;
  return (
    <ChatContainer
      style={{ justifyContent: !mine ? "flex-start" : "flex-end" }}
    >
      <div>
        {!mine && <User>{props.user}</User>}
        <RowContents
          style={{ justifyContent: !mine ? "flex-start" : "flex-end" }}
        >
          {!mine ? (
            <>
              <ChatBubble
                style={{
                  backgroundColor: `${COLOR.white}`,
                  marginRight: "7px",
                }}
              >
                {props.content}
              </ChatBubble>
              <Date>{props.time}</Date>
            </>
          ) : (
            <>
              <Date>{props.time}</Date>
              <ChatBubble
                style={{
                  backgroundColor: `${COLOR.yellow}`,
                  marginLeft: "7px",
                }}
              >
                {props.content}
              </ChatBubble>
            </>
          )}
        </RowContents>
      </div>
    </ChatContainer>
  );
};
export default Chat;

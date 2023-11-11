import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "../components/common/Container";
import Header from "../components/chatroom/Header";
import Chat from "../components/chatroom/Chat";
import {
  ChatView,
  WarningContainer,
  LoginWarning,
} from "../components/chatroom/index";
import TextForm from "../components/chatroom/TextForm";

import PATH from "../common/constants/path";
import { ChatType } from "../common/type/chatroom";
import Button from "../components/common/Button";

const ChatRoom: React.FC = () => {
  const [authorized, setAuthorized] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (!authorized) {
      navigateToMain();
    }
  }, []);

  const navigateToMain = () => {
    navigate(PATH.main);
  };

  const dummyData: ChatType[] = [
    {
      id: "1",
      content: "히히",
      date: "2023-11-07",
      time: "10:10",
      user: "한부리부리",
    },
    {
      id: "2",
      content:
        "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅎㅋㅎㅋㅎㅋㅎㅋㅎㅋㅎㅋㅎㅋㅎㅎㅋㅎㅋㅎㅋㅎㅋㅎㅋㅎㅎㅋ",
      date: "2023-11-07",
      time: "10:07",
      user: "돈부리",
    },
    {
      id: "3",
      content: "히히",
      date: "2023-11-08",
      time: "10:08",
      user: "부리부리대마왕",
    },
    {
      id: "4",
      content: "히히",
      date: "2023-11-08",
      time: "10:09",
      user: "ㅋ",
    },
    {
      id: "5",
      content: "으악 뭐임 니네",
      date: "2023-11-08",
      time: "10:10",
      user: "한부리부리",
    },
    {
      id: "5",
      content:
        "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅎㅋㅎㅋㅎㅋㅎㅋㅎㅋㅎㅋㅎㅋㅎㅎㅋㅎㅋㅎㅋㅎㅋㅎㅋㅎㅎㅋ",
      date: "2023-11-08",
      time: "10:10",
      user: "한부리부리",
    },
  ];

  return (
    <Container>
      <Header />
      <ChatView>
        {authorized ? (
          dummyData.map((chat, idx) => {
            return (
              <Chat
                // key={chat.id}
                key={idx}
                user={chat.user}
                content={chat.content}
                date={chat.date}
                time={chat.time}
              />
            );
          })
        ) : (
          <WarningContainer>
            <LoginWarning>로그인 후 이용해주세요.</LoginWarning>
            <Button width="initial" onClick={navigateToMain}>
              로그인 화면으로
            </Button>
          </WarningContainer>
        )}
      </ChatView>
      {authorized && (
        <TextForm
          handleSubmit={(e) => {
            e.preventDefault();
            console.log(e.currentTarget.content.value);
            e.currentTarget.content.value = "";
          }}
        />
      )}
    </Container>
  );
};

export default ChatRoom;

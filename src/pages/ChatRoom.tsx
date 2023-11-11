import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { authorizedState } from "../common/recoil/atom";

import socket from "../server";

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
import { MessageType } from "../common/type/chatroom";
import { SendMessageResType } from "../common/type/res";
import Button from "../components/common/Button";

const ChatRoom: React.FC = () => {
  const authorized = useRecoilValue(authorizedState);

  const [messages, setMessages] = useState<MessageType[]>([]);

  const chatViewRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!authorized) navigateToMain();
    socket.on("message", (message) => {
      setMessages((prevState) => prevState.concat(message));
    });
  }, []);

  useEffect(() => {
    if (chatViewRef.current) {
      window.scrollTo(0, chatViewRef.current.scrollHeight);
    }
  }, [messages]);

  const sendMessage = (message: string) => {
    if (message === "") return;
    socket.emit("sendMessage", message, (res: SendMessageResType) => {
      if (!res?.ok) {
        alert(res?.error);
      }
    });
  };

  const navigateToMain = () => {
    navigate(PATH.main);
  };

  return (
    <Container>
      <Header />
      <ChatView ref={chatViewRef}>
        {authorized ? (
          messages.map((chat, idx) => {
            return (
              <Chat
                key={chat._id + idx}
                user={chat.user.nickname}
                content={chat.content}
                date="2023-11-08"
                time="04:09"
                // date={chat.date}
                // time={chat.time}
              />
            );
          })
        ) : (
          <WarningContainer>
            <LoginWarning>로그인 후 이용해주세요.</LoginWarning>
            <Button width="initial" onClick={navigateToMain}>
              로그인 화면으로 ✨
            </Button>
          </WarningContainer>
        )}
      </ChatView>
      {authorized && (
        <TextForm
          handleSubmit={(e) => {
            e.preventDefault();
            sendMessage(e.currentTarget.content.value);
            e.currentTarget.content.value = "";
          }}
        />
      )}
    </Container>
  );
};

export default ChatRoom;

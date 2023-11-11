import React from "react";
import { useNavigate } from "react-router-dom";

import Title from "../components/main/Title";
import { CenteredContainer } from "../components/common/Container";
import { LoginForm } from "../components/main/LoginForm";
import Input from "../components/common/Input";
import LoginButton from "../components/main/LoginButton";

import PATH from "../common/constants/path";
import { LoginResType } from "../common/type/main";
import { checkLength, hasOnlyNumber } from "../common/function/checkValue";
import socket from "../server";

const Main: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nickname = e.currentTarget.nickname.value;
    const password = e.currentTarget.password.value;

    if (!checkLength(nickname, 1, 8)) {
      e.currentTarget.nickname.focus();
      return;
    } else if (!(checkLength(password, 4, 4) && hasOnlyNumber(password))) {
      e.currentTarget.password.focus();
      return;
    }

    socket.emit("login", { nickname, password }, (res: LoginResType) => {
      if (res?.ok && res?.data) {
        alert(`${nickname}님 환영해요❣️`);
        localStorage.setItem("nickname", nickname);
        localStorage.setItem("socketId", socket.id);
        navigateToChatRoom();
      } else {
        window.alert("이미 사용 중인 닉네임입니다. 비밀번호를 잊으셨나요?");
      }
    });
  };

  const navigateToChatRoom = () => {
    navigate(PATH.chatroom);
  };

  return (
    <CenteredContainer>
      <Title />
      <LoginForm onSubmit={handleSubmit}>
        <Input
          name="nickname"
          label="NICKNAME"
          placeholder="최대 8자리"
          autofocus
        />
        <Input
          type="password"
          name="password"
          label="PASSWORD"
          placeholder="4자리 숫자"
        />
        <LoginButton />
      </LoginForm>
    </CenteredContainer>
  );
};

export default Main;

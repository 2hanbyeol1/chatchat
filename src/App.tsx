import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

// pages
import Main from "./pages/Main";
import ChatRoom from "./pages/ChatRoom";

// constants
import PATH from "./common/constants/path";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path={PATH.main} element={<Main />} />
          <Route path={PATH.chatroom} element={<ChatRoom />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;

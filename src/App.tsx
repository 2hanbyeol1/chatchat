import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Main from "./pages/Main";
import ChatRoom from "./pages/ChatRoom";

import PATH from "./common/constants/path";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.main} element={<Main />} />
        <Route path={PATH.chatroom} element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// to be deleted
export type ChatType = {
  id: string;
  user: string;
  content: string;
  date: string;
  time: string;
};

export type MessageType = {
  _id: string;
  content: string;
  user: {
    _id: string;
    nickname: string;
  };
  // date: string;
  // time: string;
};

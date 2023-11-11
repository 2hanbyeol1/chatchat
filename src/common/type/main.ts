export type LoginType = {
  nickname: string;
  password: string;
};

export type LoginDataType = LoginType & {
  token: string;
  online: boolean;
};

export type NicknameType = string | null;

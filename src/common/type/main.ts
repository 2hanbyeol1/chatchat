export type LoginResType = {
  data: LoginDataType;
  ok: boolean;
};

type LoginDataType = {
  nickname: string;
  password: string;
  token: string;
  online: boolean;
};

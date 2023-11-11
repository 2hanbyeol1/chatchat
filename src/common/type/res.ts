import { LoginDataType } from "./main";

type ResType = {
  ok: boolean;
  error?: string;
};

export type SendMessageResType = ResType;

export type LoginResType = ResType & {
  data: LoginDataType;
};

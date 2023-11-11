import { atom, selector } from "recoil";
import { NicknameType } from "../type/main";

export const userState = atom<NicknameType>({
  key: "userState",
  default: null,
});

export const authorizedState = selector<boolean>({
  key: "authorizedState",
  get: ({ get }) => {
    const user = get(userState);
    return user !== null;
  },
});

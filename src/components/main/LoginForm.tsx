import styled from "styled-components";

export const LoginForm = styled.form`
  width: 400px;
  margin: 20px 0;

  div,
  button {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media only screen and (max-width: 490px) {
    width: 75%;
  }
`;

import styled from '@emotion/styled';

export const RegisterFormBox = styled.form`
  display: flex;
  flex-direction: column;
  border: 0.5px solid black;
  border-radius: 6px;
  width: 320px;
  padding: 20px;
  background-color: #ccd1d4;
  align-items: center;
`;

export const RegisterFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const RegisterFormInput = styled.input`
  background-color: #d4dadc;
  border: 0.5px solid black;
  border-radius: 4px;
  margin-top: 5px;
`;

export const RegisterFormButton = styled.button`
  height: 30px;
  width: 90px;
  background-color: greenyellow;
  border: 3px solid black;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    font-weight: 500;
  }
`;

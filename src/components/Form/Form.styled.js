import styled from '@emotion/styled';

export const FormBox = styled.form`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
  border: 0.5px solid black;
  border-radius: 6px;
  width: 300px;
  padding: 15px;
  background-color: #ccd1d4;
`;

export const FormInput = styled.input`
  background-color: #d4dadc;
  border: 0.5px solid black;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  height: 30px;
  width: 120px;
  background-color: greenyellow;
  border: 3px solid black;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    font-weight: 500;
  }
`;

import styled from '@emotion/styled';

export const LogoutButton = styled.button`
  width: 80px;
  height: 30px;
  border: 3px solid black;
  border-radius: 10px;
  background-color: #35c8d3;
  cursor: pointer;
  &:hover {
    /* color: gray; */
    font-weight: 700;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const UserName = styled.p`
  font-weight: 700;
`;

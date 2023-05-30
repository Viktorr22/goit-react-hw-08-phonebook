import styled from '@emotion/styled';

export const ContactMarkupList = styled.ul`
  /* list-style: inside; */
  margin-top: 0px;
  width: 300px;
  padding-left: 0px;
  /* padding: 20px; */
`;

export const ContactMarkupItem = styled.li`
  /* list-style: inside; */
  display: flex;
  margin-bottom: 15px;
  /* margin-right: auto; */
  justify-content: space-between;
`;

export const ContactMarkupButton = styled.button`
  height: 25px;
  width: 80px;
  background-color: #35c8d3;
  border: 3px solid black;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    font-weight: 500;
  }
`;

export const ContactName = styled.span`
  font-weight: 500;
`;

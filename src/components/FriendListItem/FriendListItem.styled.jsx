import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 250px;
  padding: 1%;
  font-weight: 700;
  font-size: 20px;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.12),
    0px 1px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px 1px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`;

export const Status = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.12),
    0px 1px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px 1px rgba(0, 0, 0, 0.2);
  background-color: ${({ status }) => (status ? '#008000' : '#ff0000')};
`;

export const Avatar = styled.img``; 
export const Name = styled.p``;
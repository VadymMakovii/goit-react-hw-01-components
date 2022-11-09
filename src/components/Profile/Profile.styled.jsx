import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 350px;
  height: 450px;
  font-size: 18px;
  color: #787878c9;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.12),
    0px 1px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  height: 75%;
  padding: 5%;
  box-sizing: border-box;
`;

export const Avatar = styled.img`
  display: block;
  max-width: 50%;
  height: auto;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 24px;
  color: #000000;
  margin: 0;
`;

export const Tag = styled.p`
  margin: 0;
`;

export const Location = styled.p`
  margin: 0;
`;

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25%;
  padding: 0px;
  margin: 0px;
  background-color: #f5f5ff;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  border: 1px #0000001e solid;
`;

export const Label = styled.span``;

export const Quantity = styled.span`
  font-weight: 600;
  font-size: 20px;
  color: #000000;
`;

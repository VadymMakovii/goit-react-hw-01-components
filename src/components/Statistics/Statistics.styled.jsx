import styled from 'styled-components';

export const StatisticsCard = styled.section`
  width: 450px;
  font-size: 20px;
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  color: #5a5858;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.12),
    0px 1px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 25px;
`;

export const StatList = styled.ul`
  display: flex;
  padding: 0px;
  margin: 0px;
`;

export const Item = styled.li`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  gap: 10px;
  padding: 2%;
  color: #ffffff;
  background-color: ${ props => props.bg };
`;

export const Label = styled.span``;

export const Percentage = styled.span``;
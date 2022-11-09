import PropTypes from 'prop-types';
import {
  StatisticsCard,
  StatList,
  Title,
  Item,
  Percentage,
  Label,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsCard>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(item => (
          <Item key={item.id} bg={getRandomHexColor()}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

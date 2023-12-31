import { BsEmojiSmile, BsEmojiNeutral, BsEmojiFrown } from "react-icons/bs";
import { AiOutlineAreaChart, AiOutlineBarChart } from "react-icons/ai";
import { StatisticList, Text } from './Statistics.styled';
import PropTypes from 'prop-types';


export const StatisticElement = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticList>
      <li>
        <Text><BsEmojiSmile fill="green"/> Good: {good}</Text>
      </li>
      <li>
        <Text><BsEmojiNeutral fill="orange"/> Neutral: {neutral}</Text>
      </li>
      <li>
        <Text><BsEmojiFrown fill="red"/> Bad: {bad}</Text>
      </li>
      <li>
        <Text><AiOutlineBarChart/> Total: {total}</Text>
      </li>
      <li>
        <Text><AiOutlineAreaChart/> Positive feedback: {positivePercentage}%</Text>
      </li>
    </StatisticList>
  );
}

StatisticElement.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

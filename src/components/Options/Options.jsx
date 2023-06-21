import PropTypes from 'prop-types';
import { Button, BtnList} from "./Options.styled";


export const Options = ({options, onLeaveFeedback}) => {
    return (
        <BtnList>
            {options.map(el => (
                <li key={el}>
                    <Button onClick={() => onLeaveFeedback(el)}>{el}</Button>
                </li>
            ))}
        </BtnList>
    );
};

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
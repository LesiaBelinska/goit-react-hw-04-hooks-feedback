import PropTypes from 'prop-types'; 

import s from "./FeedbackOptions.module.css"

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={s.options}>
            {options.map(option => (
                <button className={s.button}
                    type="button"
                    data-feedback={option}
                    onClick={onLeaveFeedback}
                    key={option}>
                    {option}
                </button>
            ))}
        </div>
    );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};
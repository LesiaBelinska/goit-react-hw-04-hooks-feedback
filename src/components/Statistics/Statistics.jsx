import PropTypes from 'prop-types';

import s from "./Statistics.module.css";

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div>
            {total > 0 ? (<ul className={s.list}>
                <li >Good: <span className={s.grade}>{good}</span></li>
                <li>Neutral: <span className={s.grade}>{neutral}</span></li>
                <li>Bad: <span className={s.grade}>{bad}</span></li>
                <li>Total: <span className={s.grade}>{total}</span></li>
                <li>Positive feedback: <span className={s.grade}>{positivePercentage}%</span></li>
            </ul>) : (
                <p className={s.message}>no feedback...</p>
            )}
        </div>
    );
};

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
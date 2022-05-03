import { useState } from "react";

import Section from "./Section/Section.jsx";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions.jsx";
import Statistics from "./Statistics/Statistics.jsx";

import s from "./App.module.css";
const App =()=> {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChange = ({target}) => {
    const { feedback } = target.dataset;

    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
      default:
        console.warn("error");
    }
    
  }
  
  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? +((good / total) * 100).toFixed(0) : 0;
  };

    return (
      <div className={s.App}>
        <Section
          title='Please leave feedback'>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleChange}/>
        </Section>
        <Section>
          <Statistics
            title='Statistics'
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()} />
        </Section>
      </div>
    );
};

export default App;
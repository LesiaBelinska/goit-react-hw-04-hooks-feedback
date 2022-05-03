import { Component } from "react";

import Section from "./Section/Section.jsx";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions.jsx";
import Statistics from "./Statistics/Statistics.jsx";

import s from "./App.module.css";
class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = ({target}) => {
    const {feedback} = target.dataset;
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total ? +((good / total) * 100).toFixed(0) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <div className={s.App}>
        <Section
          title='Please leave feedback'>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback} />
        </Section>
        <Section>
          <Statistics
            title='Statistics'
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage} />
        </Section>
      </div>
    );
  };
};

export default App;
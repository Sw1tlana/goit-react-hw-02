import { useState } from 'react';
import "modern-normalize";
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import css from './App.module.css';

function App() {
const [feedbackCounts, setFeedbackCounts] = useState({
  good: 0,
  neutral: 0,
  bad: 0
});

const updateFeedback = feedbackType => {
  setFeedbackCounts(prevState => ({
    ...prevState,
  [feedbackType]: prevState[feedbackType] + 1
  }));
 };

 const { good, neutral, bad } = feedbackCounts;
 const totalFeedback = good + neutral + bad;
 const positivePercentage = totalFeedback > 0 ? Math.round(((good + neutral) / totalFeedback) * 100) : 0;

 const resetFeedback = () => {
  setFeedbackCounts({
    good: 0,
    neutral: 0,
    bad: 0
  })
 }

  return (
    <div className={css.container}>
    <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback}/>
      {totalFeedback > 0 ? <Feedback feedbackCounts={feedbackCounts} positivePercentage={positivePercentage} totalFeedback={totalFeedback}/> : <Notification message="No feedback yet."/>}  
    </div>
  )
}

export default App

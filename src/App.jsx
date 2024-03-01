import { useState, useEffect } from 'react';
import "modern-normalize";
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import css from './App.module.css';

function App() {
const initialFeedbackCounts = JSON.parse(localStorage.getItem('feedbackCounts')) || {
  good: 0,
  neutral: 0,
  bad: 0
}

const [feedbackCounts, setFeedbackCounts] = useState(initialFeedbackCounts);

useEffect(() => {
 localStorage.setItem('feedbackCounts', JSON.stringify(feedbackCounts)); 
}, [feedbackCounts]);

const updateFeedback = (feedbackType) => {
  setFeedbackCounts({
    ...feedbackCounts,
  [feedbackType]: feedbackCounts[feedbackType] + 1
  });
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
      <Description/>
      <Options 
      updateFeedback={updateFeedback} 
      totalFeedback={totalFeedback} 
      resetFeedback={resetFeedback}/>
      {totalFeedback > 0 ? 
      <Feedback 
      feedbackCounts={feedbackCounts} 
      positivePercentage={positivePercentage} 
      totalFeedback={totalFeedback}/> : <Notification message="No feedback yet."/>}  
    </div>
  )
}

export default App

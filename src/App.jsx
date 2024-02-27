import { useState } from 'react';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import './App.module.css'

function App() {
const [feedbackCounts, setFeedbackCounts] = useState({
  good: 0,
  neutral: 0,
  bad: 0
});

  return (
    <div>
    <h1>Sip Happens Café</h1>
    <p>Please leave your feedback about our service by selecting one of the options below.</p>
    <Options feedbackCounts={feedbackCounts} setFeedbackCounts={setFeedbackCounts}/>
    <Feedback feedbackCounts={feedbackCounts}/>  
    </div>
  )
}

export default App

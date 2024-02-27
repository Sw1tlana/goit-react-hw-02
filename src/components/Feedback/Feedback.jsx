import css from './Feedback.module.css'; 

const Feedback = ({ feedbackCounts, totalFeedback, positivePercentage }) => {
  return (
    <div className={css.optionsContainerBtn}>
      <p>Good: {feedbackCounts.good}</p>
      <p>Neutral: {feedbackCounts.neutral}</p>
      <p>Bad: {feedbackCounts.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
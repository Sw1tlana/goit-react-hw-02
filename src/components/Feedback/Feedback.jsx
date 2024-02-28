import css from './Feedback.module.css'; 

const Feedback = ({ feedbackCounts, totalFeedback, positivePercentage }) => {
  return (
    <div className={css.feedbackContainer}>
      <p className={css.feedbackText}>Good: {feedbackCounts.good}</p>
      <p className={css.feedbackText}>Neutral: {feedbackCounts.neutral}</p>
      <p className={css.feedbackText}>Bad: {feedbackCounts.bad}</p>
      <p className={css.feedbackText}>Total: {totalFeedback}</p>
      <p className={css.feedbackText}>Positive: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
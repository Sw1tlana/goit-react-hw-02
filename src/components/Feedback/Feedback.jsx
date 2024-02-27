import css from './Feedback.module.css'; 

const Feedback = ({ feedbackCounts }) => {
  return (
    <div className={css.optionsContainerBtn}>
      <p>Good: {feedbackCounts.good}</p>
      <p>Neutral: {feedbackCounts.neutral}</p>
      <p>Bad: {feedbackCounts.bad}</p>
    </div>
  );
};

export default Feedback;
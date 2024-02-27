import css from './Options.module.css';
const Options = ({ feedbackCounts}) => {
  
    return (
        <div className={css.optionsContainerBtn}>
            <button type="button" className={css.optionsButton}>{feedbackCounts.good}</button>
            <button type="button" className={css.optionsButton}>{feedbackCounts.neutral}</button>
            <button type="button" className={css.optionsButton}>{feedbackCounts.bad}</button>
        </div>
        
    )
}
export default Options
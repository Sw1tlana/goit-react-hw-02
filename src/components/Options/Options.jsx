import css from './Options.module.css';
const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  
    return (
        <div className={css.optionsContainerBtn}>
        <ul className={css.listOptionBtn}>
            <li>
              <button type="button" className={css.optionsButton} onClick={() => updateFeedback('good')}>Good</button>
            </li>
            <li>
              <button type="button" className={css.optionsButton} onClick={() => updateFeedback('neutral')}>Neutral</button>
            </li>
            <li>
              <button type="button" className={css.optionsButton} onClick={() => updateFeedback('bad')}>Bad</button>
            </li>
            {totalFeedback > 0 && (
            <li>
              <button type="button" className={css.optionsButton} onClick={resetFeedback}>Reset</button>
            </li>)}
            </ul>
        </div>
        
    )
}
export default Options
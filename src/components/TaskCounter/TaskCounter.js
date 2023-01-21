import { useSelector } from 'react-redux';
import css from './TaskCounter.module.css';
import { selectTaskCount } from 'redux/selectors';

export const TaskCounter = () => {
  const tasks = useSelector(selectTaskCount);

  return (
    <div>
      <p className={css.text}>Active: {tasks.active}</p>
      <p className={css.text}>Completed: {tasks.completed}</p>
    </div>
  );
};

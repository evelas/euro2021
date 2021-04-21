import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../redux/actions/auth';

function Timer({ visible, text, type }: TimerType) {
  // 19 - количество секунд в таймере
  const [time, setTime] = React.useState(19);
  const dispatch = useDispatch();

  React.useEffect(() => {
    time > 0 && visible && setTimeout(() => setTime(time - 1), 1000);

    if (time === 0) {
      switch (type) {
        case 'login':
          dispatch(authActions.setTryTimeButton(false));
          break;
        default:
          break;
      }
    }
  }, [time, visible, dispatch, type]);

  return (
    <div className="login__error">
      {text} {time}
    </div>
  );
}

export default Timer;

type TimerType = {
  visible: boolean;
  text: string;
  type: string;
}

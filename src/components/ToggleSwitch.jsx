import style from "../styles/ToggleSwitch.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setIsToggled } from "../store";

const ToggleSwitch = () => {
  const state = useSelector((state) => state); //redux-toolkit
  const dispatch = useDispatch(); //redux-toolkit

  return (
    <label className={style.container}>
      <input
        type="checkbox"
        checked={state.isToggled}
        onChange={() => {
          dispatch(setIsToggled());
        }}
      />
      <span className={style.slider} />
    </label>
  );
};

export default ToggleSwitch;

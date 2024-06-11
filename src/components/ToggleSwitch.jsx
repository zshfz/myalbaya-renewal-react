import style from "../styles/ToggleSwitch.module.css";

const ToggleSwitch = (props) => {
  return (
    <label className={style.container}>
      <input
        type="checkbox"
        checked={props.isToggled}
        onChange={props.onToggle}
      />
      <span className={style.slider} />
    </label>
  );
};

export default ToggleSwitch;

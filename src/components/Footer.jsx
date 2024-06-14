import style from "../styles/Footer.module.scss";
import { useSelector } from "react-redux";

const Footer = () => {
  const state = useSelector((state) => state.isToggled); //redux-toolkit

  return (
    <div
      className={`${style.container} ${state ? style.boss : style.employee}`}
    >
      Footer
    </div>
  );
};

export default Footer;

import style from "../styles/Header.module.scss";
import { useSelector } from "react-redux";
import ToggleSwitch from "./ToggleSwitch";

const Header = () => {
  const state = useSelector((state) => state.isToggled); //redux-toolkit

  return (
    <div className={style.container}>
      <div className={style.left}>
        <span className={style.mainBanner}>내 알바야?!</span>
        <span>
          <span className={state ? style.boss : style.employee}>
            {state ? "자영업자" : "아르바이트생"}
          </span>
          들을 위한 익명 커뮤니티 사이트
        </span>
      </div>
      <div className={style.right}>
        <ToggleSwitch />
        <span>로그인</span>
        <span>회원가입</span>
      </div>
    </div>
  );
};

export default Header;

import { useState } from "react";
import style from "../styles/Header.module.scss";
import ToggleSwitch from "./ToggleSwitch";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false); //토글 스위치 상태 관리 (Redux로 빼기)

  return (
    <div className={style.container}>
      <div className={style.left}>
        <span className={style.mainBanner}>내 알바야?!</span>
        <span>아르바이트생들을 위한 익명 커뮤니티 사이트</span>
      </div>
      <div className={style.right}>
        <ToggleSwitch
          isToggled={isToggled}
          onToggle={() => {
            setIsToggled(!isToggled);
          }}
        />
        <span>로그인</span>
        <span>회원가입</span>
      </div>
    </div>
  );
};

export default Header;

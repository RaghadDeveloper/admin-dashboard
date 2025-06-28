import React, { useContext } from "react";
import "./Header.css";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { TbMessages } from "react-icons/tb";
import { IoAnalytics } from "react-icons/io5";
import { HiOutlineMoon } from "react-icons/hi";
import { RiSettingsLine } from "react-icons/ri";
import { HiOutlineLogout } from "react-icons/hi";
import { ThemeContext } from "../../ThemeContext";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";

function Header() {
  const { DarkTheme, setDarkTheme } = useContext(ThemeContext);
  function logout() {
    signOut(auth);
  }
  return (
    <header className={DarkTheme && "dark"}>
      <div className="search-bar">
        <input type="text" placeholder="search..." />
        <BiSearch className="icon" />
      </div>

      <div className="tools">
        <AiOutlineUser className="icon" />
        <TbMessages className="icon" />
        <IoAnalytics className="icon" />

        <div className="divider"></div>

        <HiOutlineMoon
          className="icon"
          onClick={() => setDarkTheme(!DarkTheme)}
        />
        <RiSettingsLine className="icon" />
        <HiOutlineLogout className="icon" onClick={logout} />

        <div className="divider"></div>

        <div className="user">
          <img src="src/assets/images/profileImg.jpg" alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;

import { useState } from "react"
import iconMenu from "../../assets/images/icon-menu.svg"
import iconClose from "../../assets/images/icon-close.svg"
import s from "./styles.module.css"

export const Navigation = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <nav className={s.nav}>
        <button className={s.menuBtn} onClick={() => setIsActive(true)}>
          <img className={s.iconMenu} src={iconMenu} alt="Menu Icon" />
        </button>
        <ul className={`${s.nav_list} ${isActive ? s.active : ""}`}>
          {isActive && (
            <li className={s.nav_item}>
              <button onClick={() => setIsActive(false)} className={s.closeBtn}>
                <img src={iconClose} alt="Close icon" className={s.closeIcon} />
              </button>
            </li>
          )}
          <li className={s.nav_item}>
            <a className={s.nav_link} href="#">Collections</a>
          </li>
          <li className={s.nav_item}>
            <a className={s.nav_link} href="#">Men</a>
          </li>
          <li className={s.nav_item}>
            <a className={s.nav_link} href="#">Women</a>
          </li>
          <li className={s.nav_item}>
            <a className={s.nav_link} href="#">About</a>
          </li>
          <li className={s.nav_item}>
            <a className={s.nav_link} href="#">Contact</a>
          </li>
        </ul>
      </nav>
      {isActive && (
        <div
          className={`modal-container ${s.closeMenuModal}`}
          onClick={() => setIsActive(false)}
        ></div>
      )}
    </>
  )
}
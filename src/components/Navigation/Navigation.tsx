import s from "./styles.module.css"

export const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.nav_list}>
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
  )
}
import ecommerceLogo from "../../assets/images/logo.svg"
import userAvatar from "../../assets/images/image-avatar.png"
import s from "./styles.module.css"
import { Navigation } from "../Navigation/Navigation"
import { Cart } from "./Cart/Cart"

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo_container}>
        <img src={ecommerceLogo} alt="Logo E-commerce" />
      </div>
      <Navigation />
      <Cart />
      <div className={s.avatarContainer}>
        <img
          className={s.avatar_img}
          src={userAvatar}
          alt="User avatar"
        />
      </div>
    </header>
  )
}
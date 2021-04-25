import React from 'react'
import { Link } from 'react-router-dom';

export type PropsTypeMenu = {
  setLogout: () => void
}

const Menu: React.FC<PropsTypeMenu> = ({setLogout}: PropsTypeMenu) => {
  return (
    <div className="menu">
      <Link to={"/dashboard/home"} className="menu__link">
        <div className="menu__button menu__search">Поиск в системе</div>
      </Link>
      <a href="/cms/excel3" className="menu__link" target="_blank">
        <div className="menu__button menu__cloud">Выгрузка</div>
      </a>
      <Link to={"/dashboard/recruit"} className="menu__link">
        <div className="menu__button menu__recruit">Рекрутинг</div>
      </Link>
      <a className="menu__link" onClick={setLogout}>
        <div className="menu__button">Выйти</div>
      </a>
    </div>
  )
}

export default Menu

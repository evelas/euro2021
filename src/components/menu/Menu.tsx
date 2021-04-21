import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import burger from '../../assets/img/cmsburger.png'
import { authActions } from '../../redux/actions';

const Menu = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const setLogout = () => {
    dispatch(authActions.setLogout());
  };
  return (
    <>
      <img id="burger" src={burger} width="22px" height="22px" alt="menu" onClick={handleToggleMenu}/>
      {
        isOpen && (
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

    </>
  )
}

export default Menu

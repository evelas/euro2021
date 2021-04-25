import React from 'react'
import { useDispatch } from 'react-redux';
import burger from '../../assets/img/cmsburger.png'
import { authActions } from '../../redux/actions';
import Menu from './Menu';

const ContainerMenu = () => {
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
          <Menu setLogout={setLogout}/>
        )
      }
    </>
  )
}

export default ContainerMenu

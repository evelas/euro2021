import classNames from 'classnames';
import React from 'react'
import preloader from '../../assets/img/preloader.gif';

interface PropsType {
  fullPage?: boolean;
}

const Preloader: React.FC<PropsType> = ({fullPage = false}: PropsType) => {
  return (
    <div className={classNames('preloader', {
      preloader_max: fullPage === true
    })}>
      <img src={preloader} width="50px" alt="preloader"/>
    </div>
  )
}

export default Preloader

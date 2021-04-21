import React from 'react'
import preloader from '../../assets/img/preloader.gif';

const Preloader: React.FC = () => {
  return (
    <div className="preloader">
      <img src={preloader} width="50px" alt="preloader"/>
    </div>
  )
}

export default Preloader

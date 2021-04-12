import React from 'react'
import footer from '../assets/img/mainfooter.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <img src={footer} alt='footer' width="100%" height="100%" />
    </footer>
  )
}

export default Footer

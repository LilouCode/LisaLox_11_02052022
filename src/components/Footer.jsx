import '../styles/main.scss';
import logoWhite from '../assets/logoWhite.svg';
function Footer() {
    return (
      <div className="footer">
        <img src={logoWhite} alt='Kasa' className='kasa-logo'>
        </img>
        <p>
        © 2020 Kasa. All rights reserved
        </p>
      </div>
    )
  }

  export default Footer
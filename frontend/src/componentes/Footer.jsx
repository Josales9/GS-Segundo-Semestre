import '../sass/styleFooter.scss'
import {} from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




const Footer = () => {
    return (
        <>
    <container className="footerContainer">
      <h5 className='footer'>@2024-todos os direitos reservados.</h5>
      <div className='div-icons'>
        <a href="https://www.facebook.com/"><FaSquareFacebook className='icons'/></a>
        <a href="https://www.instagram.com/"><FaInstagram className='icons'/></a>
        <a href="https://linkedin.com"><FaLinkedin className='icons'/></a>
      </div>
    </container>
        </>
    )
}

export default Footer
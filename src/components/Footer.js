import React from "react"
import './Footer.css'
import logo from '../assets/click ventas/logo2_00000.png'
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <img className="logo" src={logo} alt="png" width="90"/>
                <h5 className="text-uppercase">La revista digital de clasificados</h5>
                <p>Rivera - Uruguay</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Anuncia con nosotros</h5>
                <a href="https://wa.link/hos9k5"><BsWhatsapp className="whatsapp"/></a>
            </div>
            <hr className="clearfix w-100 d-md-none pb-0"/>

        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2021 Copyright:
        <a href="https://mdbootstrap.com/"> Du Agencia</a>
    </div>

</footer>

export default Footer

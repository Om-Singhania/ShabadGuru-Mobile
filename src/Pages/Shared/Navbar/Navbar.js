import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
import './Navbar.css';

import { Link } from 'react-router-dom';
import fb from '../../Images/fb.svg';
import instagram from '../../Images/instagram.svg';
import twitter from '../../Images/twitter.svg';
import youtube from '../../Images/youtube.svg';
import linkedIn from '../../Images/linkedIn.svg';
import email from '../../Images/email.svg';



export default function Navbar(props) {


    const openNav = () => {
        document.getElementById("mySidenav").style.transform = "translateX(0%)";
        const element = document.getElementById("openNav");
        element.classList.add("mystyle");
        const element1 = document.getElementById("closeHamburger");
        element1.classList.remove("mystyle");

        const element2 = document.getElementById("closeHamburger");
        element2.classList.remove("closeHamburger");

        document.getElementById("line1").style.transform = "rotate(-45deg) translate(0px, 2px)";
        document.getElementById("line1").style.transition = "1s";

        document.getElementById("line2").style.display = "none";

        document.getElementById("line3").style.transform = "rotate(45deg) translate(0px, -2px)";
        document.getElementById("line3").style.transition = "1s";
    }

    const closeNav = () => {
        document.getElementById("mySidenav").style.transform = "translateX(101%)";
        const element = document.getElementById("openNav");
        element.classList.remove("mystyle");

        const element3 = document.getElementById("closeHamburger");
        element3.classList.add("mystyle");
    }


    useEffect(() => {

        $(function () {

            $("#openNav").on("click", function () {
                $(".containerDiv").css("opacity", "0.3");
                $(".RaagNav").css("opacity", "0.3");
            });

            $("#closeHamburger").on("click", function () {
                $(".containerDiv").css("opacity", "1");
                $(".RaagNav").css("opacity", "1");
            });
        })



    }, [])



    return (
        <>
            <div className="containerFluidDiv sideNavShadow HomeNav">

                <div className="containerDiv navBG  ">
                    <div className="navBar fadeNav" style={props.navAdjustPadding}>
                        <Link to={`${props.backAddress}`} className="navBrand">
                            <img src={props.brand} alt="" />
                        </Link >

                        <Link to='/ShabadGuru-Mobile' className=''>
                            <img src={props.centerImage} alt="" />
                        </Link >

                        <div className="">
                            <Link onClick={openNav} to="#" className="navToggle" id='openNav'>
                                <div id='' className='toggleLine'></div>
                                <div id='' className='toggleLine' style={{ margin: '6px 0' }}></div>
                                <div id='' className='toggleLine'></div>
                            </Link >
                            <div className="closeHamburger" id='closeHamburger' onClick={closeNav}>
                                <div id='line1' className='toggleLine line1'></div>
                                <div id='line2' className='toggleLine line2'></div>
                                <div id='line3' className='toggleLine line3'></div>
                            </div>
                        </div>


                    </div>



                    <div className="outerShadow position-relative">
                        <div id="mySidenav" className="sidenav">
                            <div className="sideNavLinks">
                                <Link to='/ShabadGuru-Mobile'>Home</Link >

                                <div className="accordion accordion-flush sideNavAccordion" id="accordionFlushExample">
                                    <div className="accordion-item sideNavAccor">
                                        <h2 className="accordion-header" id="flush-headingThree">
                                            <button className="accordion-button collapsed sidenavDropdown" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                Raags
                                                <div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <ul className=''>
                                                    <li>
                                                        <Link to="#">Pre Raags</Link >
                                                    </li>

                                                    <li>
                                                        <Link to="/raag">Raags</Link >
                                                    </li>

                                                    <li>
                                                        <Link to="#">Post Raags</Link >
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Link to="/polularbaani">Popular Bannis</Link >
                                <Link to="/shabadradio">Shabad Radio</Link >
                                <Link to="/kirtanis">The Kirtanis</Link >
                                <Link to="/about">About us</Link >
                                <Link to="/contact">Contact Us</Link >
                            </div>

                            <div className="sideNavSocialLinks">
                                <div className="socialLinks">
                                    <Link to="#">
                                        <img className="marginRight" src={fb} alt="facebook" />
                                    </Link >
                                    <Link to="#">
                                        <img className="mediaLinksSpace" src={instagram} alt="instagram" />
                                    </Link >
                                    <Link to="#">
                                        <img className="mediaLinksSpace" src={twitter} alt="twitter" />
                                    </Link >
                                    <Link to="#">
                                        <img className="mediaLinksSpace" src={youtube} alt="youtube" />
                                    </Link >
                                    <Link to="#">
                                        <img className="marginLeft" src={linkedIn} alt="linkedIn" />
                                    </Link >
                                </div>
                                <div className="emailData">
                                    <Link to="#" className="emailIcon">
                                        <img src={email} alt="email" />
                                    </Link >
                                    <p>info@shabadguru.com</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

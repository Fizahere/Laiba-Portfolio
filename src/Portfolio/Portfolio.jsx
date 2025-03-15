import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";
import ICONS from '../assets/icons';
import Home from '../sections/Home'
import About from "../sections/About";
import Contact from "../sections/Contact";
import Projects from "../sections/Projects";
import '../App.css'
// import Logo from '../assets/images/fiza.png'

const Portfolio = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 700);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-zinc-950">
        {/* // <div className="bg-gradient-to-r to-white from-violet-300"> */}
            <div className="relative">
                <nav className={`flex text-white justify-between md:px-44 text-black py-4 fixed top-0 left-0 w-full z-10 shadow-lg
                    ${scrolled ?
                        "bg-zinc-950"
                    //    : "bg-gradient-to-r to-white from-violet-300 text-black"
                        : "bg-zinc-950"
                    }`}
                    >
                    <div className="flex flex-col md:flex-row">
                        <div className="hidden md:flex items-center ml-4 text-3xl">
                            <ScrollLink to="home" smooth={true} duration={500}>
                                <p className="ml-2 px-2 mt-1 text-md cursor-pointer font-bold tracking-wider">
                                    <Link to="/" spy={true}
                                        activeClass="border-b-2 border-lime-300"
                                        className="cursor-pointer transition-all duration-300">
                                        {/* <img className="h-14 w-32" src={'./anime.jpg'} alt="logo" /> */}
Laiba
                                    </Link>
                                </p>
                            </ScrollLink>
                        </div>
                        <div className="flex justify-evenly w-screen items-center md:hidden text-black">
                            <p className="tracking-wider font-bold text-xl">Laiba</p>
                            <div className="flex items-center text-xl" onClick={toggleDrawer}>
                                <ICONS.HAMBURGER
                                    className={`cursor-pointer mr-2 mt-1 ml-2`}
                                />
                                <p className="mt-1 cursor-pointer font-serif">
                                    Menu
                                </p>
                            </div>
                        </div>
                    </div>
                    <ul className="hidden md:flex text-black">
                        {['home', 'about', 'projects', 'contact'].map((section) => (
                            <ScrollLink
                                key={section}
                                to={section}
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass="active-link"
                                className="group relative mr-6 p-1 text-lg cursor-pointer text-white tracking-wider transition-all duration-300"
                            >
                                <span className="capitalize">{section}</span>
                                <div className="absolute left-1/2 bottom-1 w-0 h-1 bg-violet-500 transition-all duration-300 group-hover:left-0 group-hover:w-full"></div>
                            </ScrollLink>
                        ))}
                    </ul>
                </nav>
            </div>
            <div
                className={`fixed top-16 z-20 inset-0 bg-zinc-900 bg-opacity-75 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={toggleDrawer}
            >
                <div
                    className={`fixed shadow-b-2xl text-sm shadow-black top-16 p-5 left-0 w-full bg-gradient-to-r to-white from-violet-400 text-black transition-transform transform ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
                >
                    <ul className="flex flex-col">
                        {['home', 'about', 'projects', 'contact'].map((section) => (
                            <ScrollLink
                                key={section}
                                to={section}
                                smooth={true}
                                duration={500}
                                spy={true}
                                onClick={toggleDrawer}
                                activeClass="active-link-mob"
                                className="group relative mr-6 mt-1 p-1 text-sm cursor-pointer font-semibold transition-all duration-300"
                            >
                                <span className="capitalize">{section}</span>
                                <div className="absolute left-11 bottom-0 w-0 h-0.5 bg-violet-900 transition-all duration-300 group-hover:left-0 group-hover:w-[4.7rem]"></div>
                            </ScrollLink>
                        ))}
                    </ul>
                </div>
            </div>

            <div>
                    <Element name="home" id="home">
                        <Home />
                    </Element>
            </div>
            <div>
                <Element name="about" id="about">
                    <About />
                </Element>

                <Element name="projects" id="projects">
                    <Projects />
                </Element>
                <Element name="contact" id="contact">
                    <Contact />
                </Element>
            </div>

            <div className="lg:px-32 px-4 py-20 md:py-32 relative md:-top-10 bg-zinc-900 border-t-2">
                <p className="text-center text-sm md:text-lg text-white">Laiba | Copyright &copy; All rights reserved | 2025</p>
            </div>
        </div>
    );
};

export default Portfolio;

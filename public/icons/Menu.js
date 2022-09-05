import React from 'react'

import Home from '../SVG/Home.svg'
import Command from '../SVG/Command.svg'
import Dev from '../SVG/Dev.svg'
import Dots from '../SVG/Dots.svg'
import FingerPrint from '../SVG/FingerPrint.svg'
import Layers from '../SVG/Layers.svg'
import Resume from '../SVG/Resume.svg'
import RightDots from '../SVG/RightDots.svg'
import Window from '../SVG/Window.svg'

import Portfolio from '../SVG/Portfolio.svg'
import About from '../SVG/About.svg'

import Experience from '../SVG/Experience.svg'
import Work from '../SVG/Work.svg'

import './Menu.css'

export default function Menu() {
    return (
        <nav >
            <div className="small-logo" >d</div>
            <ul className="main-menu" >
                <li className="icon">
                    <img src={Home} className="icon-img" /> Home
                </li>
                <li className="icon">
                    <img src={About} className="icon-img" /> About
                </li>
                <li className="icon">
                    <img src={Experience} className="icon-img" /> Experience
                </li>
                {/* <li className="icon">
                    <img src={Portfolio} className="icon-img" />
                </li> */}
                <li className="icon">
                    <img src={Work} className="icon-img" /> Work
                </li>
                <li className="icon">
                    <img src={Resume} className="icon-img" /> Resume
                </li>
            </ul>
        </nav>
    )
}

import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaTelegram,FaInstagram,FaLinkedin,FaGithub,  } from 'react-icons/fa';
import {FcAbout} from 'react-icons/fc';
import {GiSkills} from 'react-icons/gi';
import {GrContactInfo} from 'react-icons/gr';
import {MdMail} from 'react-icons/md';

import img from './images/img.JPG';
import './Hossein.css';

const Hossein = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};
	return (<>
		<nav className="navbar">
			<a to="/" className="nav-logo">
				Hossein Abdoli
			</a>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<a href="#" className="nav-link" onClick={closeMenu}>
						Home
					</a>
				</li>
				<li className="nav-item">
					<a href="#about-me" className="nav-link" onClick={closeMenu}>
						About Me
					</a>
				</li>
				<li className="nav-item">
					<a href='#skills' className="nav-link" onClick={closeMenu}>
						Skills
					</a>
				</li>
				<li className="nav-item">
					<a href='#contact-me' className="nav-link" onClick={closeMenu}>
						Contact Me
					</a>
				</li>
			</ul>
		</nav>
        <img src={img} alt="" />
		
<br /><br /><br /><br />
        <div id='about-me' className="about">
            <h2><FcAbout/> About Me</h2>
            <p>I'm a 22 Years old Junior Front-End Developer from BandarAbbas, Iran. I started web design and development in 2022. my daily routine is the continuous development of software and my skills. I'm interested in learning new skills, taking new challenges and collaborate with others to create, deliver and maintain reliable and great products for the end-users.</p>        

        </div>
   <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
		<section id='skills' className="skills" >
        <ul>
			<h3 className='my-skills'><GiSkills/> My skills</h3>
            <li className="list-group-item">HTML, CSS, Bootstrap</li>
            <li className="list-group-item">JavaScript</li>
            <li className="list-group-item">React JS</li>
            <li className="list-group-item">Git, Github</li>
          </ul>
    </section>
<br /><br /><br /><br /><br /><br /><br />
	<section id="contact-me" class="p-5 bg-light">
        <div class="contact-me">
            <h2 class=" justify-content-between ">
                <GrContactInfo/> Contact Me
            </h2>
            <div class="row align-items-center justify-content-between  col-md p-5">
                  <a class="contact" href="mailto:hosseinabdolee@gmail.com"><MdMail/>
                   hosseinabdolee@gmail.com
                  </a>
                  <a className="contact" href="https://github.com/hosseinabdolee"><FaGithub/>
                    github.com/hosseinabdolee
                   </a>
                  
                  <a className="contact"  href="https://www.linkedin.com/in/hosseinabdolee"><FaLinkedin/>
                    linkedin.com/hosseinabdolee
                  </a>
            </div>
          </div>
    </section>


    
<br /><br /><br /><br /><br /><br /><br />
        <footer>
            <div className='container'>
               <section>
                    <div className='social'>
                      
                        <small>Copyright © 2022 | All rights reserved.</small>
                        <div className='footer-icons'>
                            <a className='f-icons' href="https://t.me/thisishossein" ><FaTelegram/></a>
                            <a className='f-icons' href="https://www.instagram.com/hosseinabdolee" ><FaInstagram/></a>
                            <a className='f-icons' href="https://www.github.com/hosseinabdolee"  ><FaGithub/></a>
                            <a className='f-icons' href="https://www.linkedin.com/hosseinabdolee" ><FaLinkedin/></a>
                            <a className='f-icons' href="mailto:hosseinabdolee@gmail.com" ><MdMail/></a>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    </>
	);
};

export default Hossein;



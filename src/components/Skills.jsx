import React from 'react'
import './skill.css'
import { SectionWrapper } from '../hoc';



export const Skills = () => {
  return (
    <section id ="skill">
            <h5 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">What Skills I Have</h5>
        
            <div className="container skill_container">
                <div className="skill_backend">
                    <h3>Programming Skills</h3>
                    <div className='skill_content'>
                       
                        <article className='skill_details'>
                            
                            <h4> &#x2022; C</h4>
                            <small className='text-light'></small>
                        </article>
                        
                        <article className='skill_details'>
                        
                            <h4> &#x2022;C++</h4>
                            <small className='text-light'></small>
                        </article>
                        <article className='skill_details'>
                        
                            <h4> &#x2022;Python</h4>
                            <small className='text-light'></small>
                        </article>
                        <article className='skill_details'>
                       
                            <h4> &#x2022;Java</h4>
                            <small className='text-light'></small>
                        </article>
                        <article className='skill_details'>
                        
                            <h4> &#x2022;R</h4>
                            <small className='text-light'></small>
                        </article>
                    
                    </div>
                </div>
                <div className="skill_frontend">
                    <h3>Web Development</h3>
                    <div className='skill_content'> 
                        <article className='skill_details'>
                            <h4>&#x2022; HTML</h4>
                            <small className='text-light'></small>
                        </article>
                        <article className='skill_details'>
                            <h4>&#x2022;CSS</h4>
                            <small className='text-light'></small>
                        </article>
                        <article className='skill_details'>
                            <h4> &#x2022; JavaScript</h4>
                            
                        </article>
                        <article className='skill_details'>
                            <h4>&#x2022;TypeScript</h4>
                            <small className='text-light'></small>
                        </article>
                        <article className='skill_details'>
                            <h4>&#x2022;Tailwind</h4>
                            <small className='text-light'></small>
                        </article>
                        <article className='skill_details'>
                            <h4>&#x2022;ReactJS</h4>
                            <small className='text-light'></small>
                        </article>
                        <article className='skill_details'>
                            <h4>&#x2022;AngularJS</h4>
                            <small className='text-light'></small>
                        </article>
                    </div>
                </div>
                <div className="skill_backend">
                    <h3>Backend Development</h3>
                    <div className='skill_content'>
                            <article className='skill_details'>
                                <h4>&#x2022;NodeJS</h4>
                                <small className='text-light'></small>
                            </article>
                            <article className='skill_details'>
                                <h4>&#x2022;MySQL</h4>
                                <small className='text-light'></small>
                            </article>
                            <article className='skill_details'>
                                <h4>&#x2022;MongoDB</h4>
                                <small className='text-light'></small>
                            </article>
                    </div>    
                </div>
            </div>
    </section>    
  )
}












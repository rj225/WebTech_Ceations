import React, { useState, createElement } from 'react'
import { content } from "../Content";



const Projects = () => {
  const { Projects } = content;
 

  return (
    <>
      <section className='min-h-fit bg-bg_light_primary' id='skills'>
       
        <div className="md:container px-5  py-14">
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
          <div className="flex flex-wrap gap-4 justify-center">
            {Projects.project_content.map((Projects, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 400}
                className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-10 max-w-sm rounded-md border-2 border-slate-200"
              >
                <div>
                  <img
                    src={Projects.image}
                    alt="..."
                    className="w-90 group-hover:scale-150 duration-200 hover:ml-10 "
                  />
                </div>
                <div>
                  <h6>{Projects.title}</h6>

                </div>
                <div className='flex justify-center item-center flex-col'>

                  <a href={Projects.link} target="_blank" className="hover:text-white">
                    <button className='border-2 border-sky-500 rounded-md rounded-full w-20 ml-2 relative top-11 left-6 hover:bg-sky-700'>
                      live
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

       


      







      </section >
    </>
  )
}

export default Projects


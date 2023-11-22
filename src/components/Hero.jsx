import React from 'react'
import { content } from '../Content'
const Hero = () => {

    const { hero } = content;
    return (
        <section id="home" className="overflow-hidden">
            <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">

                <div
                    data-aos="slide-left"
                    data-aos-delay="1200"
                    className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
                >
                    <h1 className="rotate-90 absolute top-[30%] right-[-30%] text-[#eef2f5] lg:mt-20">
                        {hero.firstName}{" "}
                        <span className="text-dark_primary">{hero.LastName}</span>
                    </h1>
                </div>
                <div className="pb-16 px-6 pt-5" data-aos="fade-down">
                    <h2>{hero.title}</h2>
                    <br />
                    <div className="flex justify-end">
                        <button className="btn"> <a href={hero.link} download="rahul_Resume.pdf">{hero.btnText}</a></button>
                    </div>

                </div>

                <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
                </div>
        </section>
    )
}

export default Hero

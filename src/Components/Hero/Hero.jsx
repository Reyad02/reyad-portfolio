import homeSVG from "../../assets/home-main.svg"
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const Hero = () => {
    const [text] = useTypewriter({
        words: ['Frontend Developer', 'MERN Developer', 'ML Researcher'],
        loop: 0
    })
    return (

        <div className="text-white">
            <div className="hero min-h-screen ">
                <div className="hero-content z-auto flex-col-reverse lg:flex-row-reverse">
                    <img
                        src={homeSVG}
                        className="md:w-1/3 rounded-lg shadow-2xl" />
                    <div className="md:w-2/3 text-white text-center lg:text-left">
                        <h1 className="text-2xl md:text-4xl  lg:text-5xl font-semibold font-orbitron">Hi!👋</h1>
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold mt-2 font-orbitron"> I'm <span className="text-[#B968C7]">AL-MOMEN REYAD</span></h1>
                        <div>
                            <p className="py-1 lg:py-6 text-[#B968C7] text-2xl md:text-4xl font-semibold">
                                {text}
                                <Cursor cursorColor='#B968C7' />
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
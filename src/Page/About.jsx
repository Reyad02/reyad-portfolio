import { LiaHandPointRightSolid } from "react-icons/lia";
import { IoLogoJavascript } from "react-icons/io";
import { ImHtmlFive2 } from "react-icons/im";
import { FaNode } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

import { FaGitAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";





const About = () => {
    return (
        <div className=" text-white max-w-7xl mx-auto px-4">
            <Helmet>
                <title>Portfolio - About</title>
            </Helmet>
            <div className=" min-h-[90vh] flex items-center lg:flex-row flex-col md:justify-between">
                <div className="w-full lg:w-[56%] text-center lg:text-left">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 font-orbitron">KNOW WHO <span className="text-[#B968C7]">I'M</span></h2>
                    <p className="text-lg md:text-xl">Hi Everyone, I am <span className="text-[#B968C7]">Al-Momen Reyad</span> from <span className="text-[#B968C7]">Dhaka, Bangladesh</span>.</p>
                    <p className="text-lg md:text-xl">I am a passionate <span className="text-[#B968C7]">Web Developer</span> with a strong interest in building user-friendly and scalable web applications. I have recently completed my <span className="text-[#B968C7]">BSc in Computer Science and Engineering (CSE)</span>.</p>
                    <p className="mt-4 text-lg md:text-xl">Apart from coding, I love other activities such as</p>
                    <p className="flex gap-2 lg:ml-8 text-lg md:text-xl items-center justify-center lg:justify-start hover:text-[#B968C7]"><LiaHandPointRightSolid></LiaHandPointRightSolid> Playing</p>
                    <p className="flex gap-2  lg:ml-8 text-lg md:text-xl items-center justify-center lg:justify-start hover:text-[#B968C7]"><LiaHandPointRightSolid></LiaHandPointRightSolid> Singing</p>
                    <p className="flex gap-2  lg:ml-8 text-lg md:text-xl items-center justify-center lg:justify-start hover:text-[#B968C7]"><LiaHandPointRightSolid></LiaHandPointRightSolid> Travelling</p>
                </div>
                <div className="w-full lg:w-[38%] flex justify-center">
                    <img src="https://i.postimg.cc/gkptDPZc/reyad.png" alt="" />
                </div>
            </div>

            <div className="pb-12 text-white">
                <p className=" font-semibold  text-center text-2xl md:text-4xl mt-8 lg:mt-0 lg:text-5xl mb-12 font-orbitron">Professional <span className="text-[#B968C7]">Skillset</span></p>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12">

                    <div className="card bg-transparent text-white  border-[#B968C7] border-2  hover:text-[#B968C7] hover:scale-105 transition-transform transform ">
                        <div className="card-body items-center text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl"><IoLogoJavascript></IoLogoJavascript></h2>
                        </div>
                    </div>

                    <div className="card bg-transparent text-white  border-[#B968C7] border-2   hover:text-[#B968C7] hover:scale-105 transition-transform transform">
                        <div className="card-body items-center text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl"><ImHtmlFive2></ImHtmlFive2></h2>
                        </div>
                    </div>

                    <div className="card bg-transparent text-white  border-[#B968C7] border-2   hover:text-[#B968C7] hover:scale-105 transition-transform transform">
                        <div className="card-body items-center text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl"><FaNode></FaNode></h2>
                        </div>
                    </div>

                    <div className="card bg-transparent text-white  border-[#B968C7] border-2   hover:text-[#B968C7] hover:scale-105 transition-transform transform">
                        <div className="card-body items-center text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl"><FaReact></FaReact></h2>
                        </div>
                    </div>

                    <div className="card bg-transparent text-white  border-[#B968C7] border-2   hover:text-[#B968C7] hover:scale-105 transition-transform transform">
                        <div className="card-body items-center text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl"><SiExpress></SiExpress></h2>
                        </div>
                    </div>

                    <div className="card bg-transparent text-white  border-[#B968C7] border-2   hover:text-[#B968C7] hover:scale-105 transition-transform transform">
                        <div className="card-body items-center text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl"><SiMongodb></SiMongodb></h2>
                        </div>
                    </div>

                    <div className="card bg-transparent text-white  border-[#B968C7] border-2   hover:text-[#B968C7] hover:scale-105 transition-transform transform">
                        <div className="card-body items-center text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl"><TbBrandRedux></TbBrandRedux></h2>
                        </div>
                    </div>

                    <div className="card bg-transparent text-white  border-[#B968C7] border-2   hover:text-[#B968C7] hover:scale-105 transition-transform transform">
                        <div className="card-body items-center text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl"><FaGitAlt></FaGitAlt></h2>
                        </div>
                    </div>

                    <div className="card bg-transparent text-white  border-[#B968C7] border-2   hover:text-[#B968C7] hover:scale-105 transition-transform transform">
                        <div className="card-body items-center text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl"><FaPython></FaPython></h2>
                        </div>
                    </div>

                    <div className="card bg-transparent text-white  border-[#B968C7] border-2   hover:text-[#B968C7] hover:scale-105 transition-transform transform">
                        <div className="card-body items-center text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl"><TbBrandCpp></TbBrandCpp></h2>
                        </div>
                    </div>

                    <div className="card bg-transparent text-white  border-[#B968C7] border-2   hover:text-[#B968C7] hover:scale-105 transition-transform transform">
                        <div className="card-body items-center text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl"><SiNextdotjs></SiNextdotjs></h2>
                        </div>
                    </div>

                    <div className="card bg-transparent text-white  border-[#B968C7] border-2   hover:text-[#B968C7] hover:scale-105 transition-transform transform">
                        <div className="card-body items-center text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl"><IoLogoFirebase></IoLogoFirebase></h2>
                        </div>
                    </div>

                    <div className="card bg-transparent text-white  border-[#B968C7] border-2   hover:text-[#B968C7] hover:scale-105 transition-transform transform">
                        <div className="card-body items-center text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl"><VscVscode></VscVscode></h2>
                        </div>
                    </div>

                    <div className="card bg-transparent text-white  border-[#B968C7] border-2   hover:text-[#B968C7] hover:scale-105 transition-transform transform">
                        <div className="card-body items-center text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl"><SiPostman></SiPostman></h2>
                        </div>
                    </div>

                    <div className="card bg-transparent text-white  border-[#B968C7] border-2   hover:text-[#B968C7] hover:scale-105 transition-transform transform">
                        <div className="card-body items-center text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl"><IoLogoVercel></IoLogoVercel></h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
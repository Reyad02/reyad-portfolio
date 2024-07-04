import { LiaHandPointRightSolid } from "react-icons/lia";
import { IoLogoJavascript } from "react-icons/io";
import { ImHtmlFive2 } from "react-icons/im";
import { FaNode } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

import { FaGitAlt } from "react-icons/fa";





const About = () => {
    return (
        <div className=" text-white max-w-7xl mx-auto px-4">
            <div className=" min-h-[90vh] flex items-center md:flex-row flex-col md:justify-between">
                <div>
                    <h2 className="text-3xl font-semibold mb-2">KNOW WHO <span className="text-[#B968C7]">I'M</span></h2>
                    <p className="text-xl">Hi Everyone, I am <span className="text-[#B968C7]">Al-Momen Reyad</span> from <span className="text-[#B968C7]">Narayanganj, Dhaka, Bangladesh</span>.</p>
                    <p className="text-xl">I am a student, pursuing a <span className="text-[#B968C7]">BSc in Computer Science and Engineering</span> from <span className="text-[#B968C7]">United International University</span>.</p>
                    <p className="mt-4 text-xl">Apart from coding, I love other activities such as</p>
                    <p className="flex gap-2 ml-8 text-xl items-center hover:text-[#B968C7]"><LiaHandPointRightSolid></LiaHandPointRightSolid> Playing</p>
                    <p className="flex gap-2 ml-8 text-xl items-center hover:text-[#B968C7]"><LiaHandPointRightSolid></LiaHandPointRightSolid> Singing</p>
                    <p className="flex gap-2 ml-8 text-xl items-center hover:text-[#B968C7]"><LiaHandPointRightSolid></LiaHandPointRightSolid> Travelling</p>
                </div>
                <div>
                    <img src="https://i.postimg.cc/gkptDPZc/reyad.png" alt="" />
                </div>
            </div>

            <div className="mb-12">
                <p className=" font-semibold text-[#B968C7] text-center text-5xl mb-12">Skillset</p>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12">

                    <div className="card bg-transparent text-neutral-content  border-[#B968C7] border-2  hover:text-[#B968C7] hover:scale-105 transition-transform transform ">
                        <div className="card-body items-center text-center">
                            <h2 className="text-5xl"><IoLogoJavascript></IoLogoJavascript></h2>
                        </div>
                    </div>

                    <div className="card bg-transparent text-neutral-content  border-[#B968C7] border-2   hover:text-[#B968C7] hover:scale-105 transition-transform transform">
                        <div className="card-body items-center text-center">
                            <h2 className="text-5xl"><ImHtmlFive2></ImHtmlFive2></h2>
                        </div>
                    </div>

                    <div className="card bg-transparent text-neutral-content  border-[#B968C7] border-2   hover:text-[#B968C7] hover:scale-105 transition-transform transform">
                        <div className="card-body items-center text-center">
                            <h2 className="text-5xl"><FaNode></FaNode></h2>
                        </div>
                    </div>

                    <div className="card bg-transparent text-neutral-content  border-[#B968C7] border-2   hover:text-[#B968C7] hover:scale-105 transition-transform transform">
                        <div className="card-body items-center text-center">
                            <h2 className="text-5xl"><FaReact></FaReact></h2>
                        </div>
                    </div>

                    <div className="card bg-transparent text-neutral-content  border-[#B968C7] border-2   hover:text-[#B968C7] hover:scale-105 transition-transform transform">
                        <div className="card-body items-center text-center">
                            <h2 className="text-5xl"><SiExpress></SiExpress></h2>
                        </div>
                    </div>

                    <div className="card bg-transparent text-neutral-content  border-[#B968C7] border-2   hover:text-[#B968C7] hover:scale-105 transition-transform transform">
                        <div className="card-body items-center text-center">
                            <h2 className="text-5xl"><SiMongodb></SiMongodb></h2>
                        </div>
                    </div>

                    <div className="card bg-transparent text-neutral-content  border-[#B968C7] border-2   hover:text-[#B968C7] hover:scale-105 transition-transform transform">
                        <div className="card-body items-center text-center">
                            <h2 className="text-5xl"><FaGitAlt></FaGitAlt></h2>
                        </div>
                    </div>

                    <div className="card bg-transparent text-neutral-content  border-[#B968C7] border-2   hover:text-[#B968C7] hover:scale-105 transition-transform transform">
                        <div className="card-body items-center text-center">
                            <h2 className="text-5xl"><FaPython></FaPython></h2>
                        </div>
                    </div>

                    <div className="card bg-transparent text-neutral-content  border-[#B968C7] border-2   hover:text-[#B968C7] hover:scale-105 transition-transform transform">
                        <div className="card-body items-center text-center">
                            <h2 className="text-5xl"><TbBrandCpp></TbBrandCpp></h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
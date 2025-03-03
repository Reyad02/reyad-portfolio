
import { Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Viewer } from '@react-pdf-viewer/core';
import resume from '../assets/Reyad_Jr_Software_Developer_Resume.pdf';
import { FaDownload } from "react-icons/fa6";
import { Helmet } from 'react-helmet-async';

const Resume = () => {

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Helmet>
                <title>Portfolio - Resume</title>
            </Helmet>
            <div className=" max-w-7xl mx-auto pb-8">
                <div className="lg:pt-24" >
                    <h1 className='text-[#B968C7] text-center text-2xl md:text-3xl lg:text-4xl  font-semibold font-orbitron'>RESUME</h1>
                    <div className='text-center my-8'>
                        <a
                            href={resume}
                            download="Al-Momen-Reyad-Resume.pdf"
                        >
                            <button className='btn text-[#B968C7] border-2 border-[#B968C7]'><FaDownload></FaDownload>
                                &nbsp;Download Resume</button>
                        </a>
                    </div>
                    <Viewer fileUrl={resume} />
                </div>
            </div>
        </Worker>

    );
};

export default Resume;
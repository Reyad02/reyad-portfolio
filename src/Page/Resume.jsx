
import { Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Viewer } from '@react-pdf-viewer/core';
import resume from '../assets/CV of_Al_Momen_Reyad.pdf';
import { FaDownload } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Resume = () => {

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <div className=" max-w-7xl mx-auto mb-8">
                <div className="lg:pt-24" >
                    <h1 className='text-[#B968C7] text-center text-3xl font-semibold '>RESUME</h1>
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
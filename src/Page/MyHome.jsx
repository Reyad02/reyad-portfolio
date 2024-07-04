import Hero from '../Components/Hero/Hero';
import Navbar from '../Components/Navbar/Navbar';

const MyHome = () => {
    return (
        <div className=''>
            {/* <div className='lg:fixed w-full'>
                <Navbar></Navbar>
            </div> */}
            <Hero></Hero>
            <div className='my-12 max-w-7xl mx-auto'>
                <h1 className='text-5xl text-center'>LET ME <span className='text-[#B968C7]'>INTRODUCE</span> MYSELF</h1>

                <div className='flex items-center'>
                    <div className='w-2/3 space-y-4'>
                        <p className='text-2xl'>I am a <span className='text-[#B968C7]'>quick learner</span> with a strong ability to <span className='text-[#B968C7]'>adapt to new technologies and environments</span>. My passion for continuous learning drives me to explore and master various programming languages and tools.</p>
                        <p className='text-2xl'> I have a solid foundation in web development technologies such as <span className='text-[#B968C7]'>JavaScript, CSS, and HTML, and I am also proficient in C++, C, and Python</span>.</p>
                    </div>
                    <div className='w-1/3'>
                        <img src="https://i.postimg.cc/x88JG9tL/avatar-male-with-glasses-free-vector-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyHome;
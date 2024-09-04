import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div className="max-w-7xl mx-auto lg:p-24 space-y-20 lg:space-y-8 text-white">
            <div className="text-center md:mb-12">
                <h1 className="text-3xl font-semibold">My Recent <span className="text-[#B968C7]">Works</span></h1>
                <p>Here are few projects I have worked on recently.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">

                <div className="card card-compact bg-base-100 hover:shadow-[#B968C7] shadow-md hover:scale-105 transition-transform transform">
                    <figure>
                        <img
                            src="https://i.postimg.cc/Kjjtp31Y/Screenshot-2024-09-03-180410.png"
                            alt="Bus-Ticket-Pro" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Bus Ticket Pro</h2>
                        <p className="text-justify">
                            A comprehensive bus ticket management system that allows customers to book bus tickets, select seats, and complete payments while providing admins with tools to manage buses, routes, and bookings through an intuitive dashboard.
                        </p>
                        <div className="card-actions justify-around">
                            <Link to={"https://github.com/Reyad02/bus-ticket-pro"} className="btn btn-sm btn-primary">Client Link</Link>
                            <Link to={"https://github.com/Reyad02/bus-ticket-pro-server"} className="btn btn-sm btn-primary">Server Link</Link>
                            <Link to={"https://bus-ticket-pro.web.app/"} className="btn btn-sm btn-primary">Demo</Link>
                        </div>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 hover:shadow-[#B968C7] shadow-md hover:scale-105 transition-transform transform">
                    <figure>
                        <img
                            src="https://i.postimg.cc/hj06wHGT/1st.png"
                            alt="alternative-product-info" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Alternative Product Info</h2>
                        <p className="text-justify">
                            Welcome to Top Tech, your go-to destination for all things gadgets and technology! At Top Tech, we're passionate about empowering you to make informed decisions based on real user experiences.
                        </p>
                        <div className="card-actions justify-around">
                            <Link to={"https://github.com/Reyad02/alternative-product-info"} className="btn btn-sm btn-primary">Client Link</Link>
                            <Link to={"https://github.com/Reyad02/alternative-product-info-server"} className="btn btn-sm btn-primary">Server Link</Link>
                            <Link to={"https://b9a11-cbd0a.firebaseapp.com/"} className="btn btn-sm btn-primary">Demo</Link>
                        </div>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 hover:shadow-[#B968C7] shadow-md  hover:scale-105 transition-transform transform">
                    <figure>
                        <img
                            src="https://i.postimg.cc/fbcrt6mp/2nd.png"
                            alt="Art-and-craft" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">ART & CRAFT</h2>
                        <p className="text-justify">
                            Welcome to our Painting and Drawing website, where creativity meets craftsmanship. Dive into a world of unique and inspiring artworks created by talented artists.
                        </p>
                        <div className="card-actions justify-around">
                            <Link to={"https://github.com/Reyad02/painting-client-part"} className="btn btn-sm btn-primary">Client Link</Link>
                            <Link to={"https://github.com/Reyad02/painting-server"} className="btn btn-sm btn-primary">Server Link</Link>
                            <Link to={"https://artcraft-c8559.web.app/"} className="btn btn-sm btn-primary">Demo</Link>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Projects;
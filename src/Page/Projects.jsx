import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto lg:p-24 space-y-20 lg:space-y-8 text-white pb-12">
      <Helmet>
        <title>Portfolio - Projects</title>
      </Helmet>
      <div className="text-center md:mb-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-orbitron">
          <span className="text-[#B968C7]">Full Stack</span> Projects
        </h1>
        <p className="text-base md:text-lg pt-1">
          These projects are based on the MERN stack
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-2">
        <div className="card card-compact bg-base-100 hover:shadow-[#B968C7] shadow-md hover:scale-105 transition-transform transform">
          <figure >
            <img
              src="https://i.postimg.cc/63sVmhp7/Screenshot-2025-03-02-233554.png"
              alt="bicycle store"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bicycle Store</h2>
            <p className="text-justify">
              Bicycle Store is an e-commerce platform where customers can
              explore and purchase bicycles, while admins can manage products,
              orders and users. It offers a seamless shopping experience with
              secure authentication and efficient order management.{" "}
            </p>
            <div className="card-actions justify-around">
              <Link
                to={"https://github.com/Reyad02/bicycle-store"}
                className="btn btn-sm bg-white text-black hover:bg-[#B968C7] hover:text-white"
              >
                Client Link
              </Link>
              <Link
                to={"https://github.com/Reyad02/bicycle-store-backend"}
                className="btn btn-sm bg-white text-black hover:bg-[#B968C7] hover:text-white"
              >
                Server Link
              </Link>
              <Link
                to={"https://bicycle-store-nine-flame.vercel.app/"}
                className="btn btn-sm bg-white text-black hover:bg-[#B968C7] hover:text-white"
              >
                Demo
              </Link>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 hover:shadow-[#B968C7] shadow-md hover:scale-105 transition-transform transform">
          <figure>
            <img
              src="https://i.postimg.cc/Kjjtp31Y/Screenshot-2024-09-03-180410.png"
              alt="Bus-Ticket-Pro"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bus Ticket Pro</h2>
            <p className="text-justify">
              A comprehensive bus ticket management system that allows customers
              to book bus tickets, select seats, and complete payments while
              providing admins with tools to manage buses, routes, and bookings
              through an intuitive dashboard.
            </p>
            <div className="card-actions justify-around">
              <Link
                to={"https://github.com/Reyad02/bus-ticket-pro"}
                className="btn btn-sm bg-white text-black hover:bg-[#B968C7] hover:text-white"
              >
                Client Link
              </Link>
              <Link
                to={"https://github.com/Reyad02/bus-ticket-pro-server"}
                className="btn btn-sm bg-white text-black hover:bg-[#B968C7] hover:text-white"
              >
                Server Link
              </Link>
              <Link
                to={"https://bus-ticket-pro.web.app/"}
                className="btn btn-sm bg-white text-black hover:bg-[#B968C7] hover:text-white"
              >
                Demo
              </Link>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 hover:shadow-[#B968C7] shadow-md hover:scale-105 transition-transform transform">
          <figure>
            <img
              src="https://i.postimg.cc/x86znGn3/Screenshot-2025-03-02-234510.png"
              alt="Device Master"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Device Master</h2>
            <p className="text-justify">
              Device Master is a tech service platform offering professional
              device repair and maintenance solutions. Customers can book
              services for smartphones and laptops, while admins can efficiently
              manage service requests, orders and customer interactions.
            </p>
            <div className="card-actions justify-around">
              <Link
                to={"https://github.com/Reyad02/device-master"}
                className="btn btn-sm bg-white text-black hover:bg-[#B968C7] hover:text-white"
              >
                Client Link
              </Link>
              <Link
                to={"https://github.com/Reyad02/Device_Master_Backend"}
                className="btn btn-sm bg-white text-black hover:bg-[#B968C7] hover:text-white"
              >
                Server Link
              </Link>
              <Link
                to={"https://device-master-2614d.web.app/"}
                className="btn btn-sm bg-white text-black hover:bg-[#B968C7] hover:text-white"
              >
                Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center md:mb-12  pt-12 ">
        <h1 className="font-orbitron text-2xl md:text-3xl lg:text-4xl font-semibold">
          <span className="text-[#B968C7]">Machine Learning(ML)</span> Projects
        </h1>
        <p className="text-base md:text-lg pt-1">
          These projects are based on computer vision
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-2 justify-items-center ">
        <div className="card card-compact bg-base-100 hover:shadow-[#B968C7] shadow-md hover:scale-105 transition-transform transform max-w-sm">
          <figure>
            <img
              src="https://i.postimg.cc/rmQmr838/Experimental-Design-1.png"
              alt="MedSecureNet"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">MedSecureNet</h2>
            <p className="text-justify">
              MedSecureNet is a project focused on MRI image-based tumor
              detection using federated learning and end-to-end encryption. It
              aims to securely transmit and analyze MRI images while preserving
              patient privacy and data integrity, avoiding centralized storage
              risks.
            </p>
            <div className="card-actions justify-around">
              <Link
                to={"https://github.com/sonjoy2074/CSE4531-Project"}
                className="btn btn-sm bg-white text-black hover:bg-[#B968C7] hover:text-white"
              >
                Github
              </Link>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 hover:shadow-[#B968C7] shadow-md hover:scale-105 transition-transform transform max-w-sm">
          <figure className="h-full">
            <img
              src="https://i.postimg.cc/qB1htLH8/Experimental-Design.png"
              alt="Poultry Scan"
              className="h-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Poultry Scan</h2>
            <p className="text-justify">
              The implementation of a disease detection system for poultry using
              five deep learning models: VGG19, Vision Transformer (ViT), Swin
              Transformer, EfficientNetB7, and MobileNetV3. The system is
              designed to classify images into four distinct classes: Healthy,
              Coccidiosis (Cocci), Salmonellosis (Salmo), and Newcastle disease
              (NCD).
            </p>
            <div className="card-actions justify-around">
              <Link
                to={"https://github.com/Reyad02/PoultryScan"}
                className="btn btn-sm bg-white text-black hover:bg-[#B968C7] hover:text-white"
              >
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

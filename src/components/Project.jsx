import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import "../assets/css/projects.css";  // Updated CSS

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Shopping App",
      description: "An e-commerce app with dynamic product search and checkout",
    },
    {
      img: project2,
      name: "Chat App",
      description: "A real-time messaging application with secure communication",
    },
    {
      img: project3,
      name: "Facebook Clone",
      description: "A social media clone with news feed, messaging, and profiles",
    },
  ];

  return (
    <section id="projects">
      <div className="project-header">
        <h2>Explore My <span>Portfolio</span></h2>
        <p>A showcase of my recent work</p>
      </div>
      <div className="project-gallery">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            600: {
              slidesPerView: 1.5,
            },
            1200: {
              slidesPerView: 2,
            },
            1201: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          autoplay={{
            delay: 4000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="project-slider"
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <div className="project-card">
                <img
                  src={project.img}
                  srcSet={`${project.img} 400w, ${project.img} 800w, ${project.img} 1200w`}
                  sizes="(max-width: 600px) 100vw, 
                         (min-width: 601px) and (max-width: 1200px) 50vw, 
                         (min-width: 1201px) 33vw"
                  alt={project.name}
                  className="project-img"
                />
                <div className="project-details">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;

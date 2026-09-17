// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Projects.css";

// gsap.registerPlugin(ScrollTrigger);

// const Projects = () => {
//   const sectionRef = useRef(null);

//   const projectsData = [
//     {
//       id: 1,
//       title: "Barber Store Website",
//       description: "An online store for barber tools and grooming essentials, featuring product listings, categories.",
//       img: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=2070&auto=format&fit=crop",
//       link: "https://suffibarberstore.netlify.app",
//     },
//     {
//       id: 2,
//       title: "Food Ordering Website",
//       description: "A full-stack food ordering website with menu, cart, and order features.",
//       img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
//       link: "https://foodvillahub.netlify.app",
//     },
//     {
//       id: 3,
//       title: "Healthy Food Corner",
//       description:
//         "A healthy food ordering website focused on nutritious meals and easy online ordering.",
//       img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
//       link: "https://healthyfoodcorner.netlify.app",
//     },
//     {
//       id: 4,
//       title: "Gym Website",
//       description: "A fully responsive gym website with booking features.",
//       img: "https://media.istockphoto.com/id/1679800838/photo/close-up-of-feet-sportman-runner-running-on-treadmill-in-fitness-club-cardio-workout-healthy.jpg?s=2048x2048&w=is&k=20&c=gCxijqL4nBoDraULTQsitBQtisUGhQH-RhdhHj9DjGo=",
//       link: "https://elitefitnessedge.netlify.app",
//     },
//   ];
// useEffect(() => {
//   const ctx = gsap.context(() => {
//     const cards = gsap.utils.toArray(".project-card");
//     const images = gsap.utils.toArray(".project-card img");

//     const leftCards = cards.filter((_, i) => i % 2 === 0);
//     const rightCards = cards.filter((_, i) => i % 2 === 1);


//     gsap.set(cards, { transition: "none" });

//     gsap.set(leftCards, { autoAlpha: 0, x: -300 });
//     gsap.set(rightCards, { autoAlpha: 0, x: 300 });

//     const tween = gsap.timeline({ paused: true })
//       .to(
//         leftCards,
//         {
//           autoAlpha: 1,
//           x: 0,
//           duration: 1.8,
//           stagger: 0.3,
//           ease: "power2.out"
//         },
//         0
//       )
//       .to(
//         rightCards,
//         {
//           autoAlpha: 1,
//           x: 0,
//           duration: 1.8,
//           stagger: 0.3,
//           ease: "power2.out"
//         },
//         0
//       )
//       .call(() => {
//         gsap.set(cards, { clearProps: "transform,transition" });
//       });

//     ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "top 80%",
//       onEnter: () => tween.play()
//     });

//     let loadedCount = 0;
//     images.forEach((img) => {
//       if (img.complete) {
//         loadedCount++;
//       } else {
//         img.addEventListener("load", () => {
//           loadedCount++;
//           if (loadedCount === images.length) {
//             ScrollTrigger.refresh();
//           }
//         });
//       }
//     });
//     if (loadedCount === images.length) {
//       ScrollTrigger.refresh();
//     }
//   }, sectionRef);

//   return () => ctx.revert();
// }, []);

//   return (
//     <div className="projects-section" id="projects" ref={sectionRef}>
//       <h2>Projects</h2>
//       <div className="projects-container">
//         {projectsData.map((project) => {
//           return (
//             <a
//               key={project.id}
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="project-card"
//             >
//               <img src={project.img} alt={project.title} />
//               <h3>{project.title}</h3>
//               <p>{project.description}</p>
//             </a>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Projects;


import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);

  const projectsData = [
    {
      id: 1,
      title: "Barber Store Website",
      description:
        "An online store for barber tools and grooming essentials, featuring product listings, categories.",
      img: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=2070&auto=format&fit=crop",
      link: "https://suffibarberstore.netlify.app",
    },
    {
      id: 2,
      title: "Food Ordering Website",
      description:
        "A full-stack food ordering website with menu, cart, and order features.",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
      link: "https://foodvillahub.netlify.app",
    },
    {
      id: 3,
      title: "Healthy Food Corner",
      description:
        "A healthy food ordering website focused on nutritious meals and easy online ordering.",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
      link: "https://healthyfoodcorner.netlify.app",
    },
    {
      id: 4,
      title: "Gym Website",
      description:
        "A fully responsive gym website with booking features.",
      img: "https://media.istockphoto.com/id/1679800838/photo/close-up-of-feet-sportman-runner-running-on-treadmill-in-fitness-club-cardio-workout-healthy.jpg?s=2048x2048&w=is&k=20&c=gCxijqL4nBoDraULTQsitBQtisUGhQH-RhdhHj9DjGo=",
      link: "https://elitefitnessedge.netlify.app",
    },
  ];

  useEffect(() => {
  const ctx = gsap.context(() => {
    const cards = gsap.utils.toArray(".project-card");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: index % 2 === 0 ? -80 : 80,
          scale: 0.98,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -5,
          scale: 1.01,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.35,
          ease: "power2.out",
        });
      });
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <div className="projects-section" id="projects" ref={sectionRef}>
      <h2>Projects</h2>

      <div className="projects-container">
        {projectsData.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src={project.img} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
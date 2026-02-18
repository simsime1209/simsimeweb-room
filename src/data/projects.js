const projects = [
  {
    name: "The Garden",
    preview: "/images/project-garden.png",
    link: "https://reisgarden.ca/",
    thumbnail: "/images/project-garden-thumbnail.png",
    description:
        "The Garden is a 3D interactive garden that showcases all of my non-technical works. \n Similar to my personal website, it is made using a THREE.js scene, with custom GLSL shaders for the grass blades, wind and portal effects. \n The garden portion of the website hosts drawings made by over 200 visitors, and was made with the goal of bringing together a community of builders.",
    madewith: ["THREE.js", "Next.js", "React", "Firebase"],
  },
  {
    name: "Watguessr.io",
    preview: "/images/project-watguessr.png",
    link: "https://watguessr.io",
    thumbnail: "/images/project-watguessr-thumbnail.png",
    description:
        "**Real-time multiplayer project for the University of Waterloo!** \n WatGuessr.io is a **real-time multiplayer web game** inspired by GeoGuessr, built specifically for the **University of Waterloo campus**. \n I designed and developed the full-stack platform, using Vue/Vuex and websockets for frontend game state management in multiplayer and ranked game modes. The frontend also integrates **Mapbox API** to provide an interactive guessing experience where players can compete to identify locations around campus. \n I implemented **JWT authentication, Google OAuth, and secure HTTP cookies** to protect user data. We ensured backend security with **IP-based rate limiting**, essential in an application made for students where DDoSing is common. \n Images are stored in an AWS S3 bucket, with scene information stored in our database, so streamline deployment, I automated the image upload pipeline with **Python and AWS S3**, cutting deployment preparation time by over **80%**. I deployed the frontend with Cloudflare, configuring workers to ensure security. \n The result is a polished, secure, and interactive platform where students can challenge their geography knowledge in real-time.",
    madewith: ["Java", "Spring Boot", "PostgreSQL", "Vue/Vuex", "Websockets (STOMP.js)", "Mapbox API", "AWS S3", "Python", "Node.js", "Cloudflare"],
  },
  {
    name: "The Ocean",
    preview: "/images/project-ocean.png",
    link: "https://symposium.socratica.info/ocean",
    thumbnail: "/images/project-ocean-thumbnail.png",
    description:
        "The Ocean is a 3D interactive community visualizer that displays all participants of the Socratica Symposium 2026. \n It is made in partnership with the Socratica team to get participants acquainted with one another virtually and explore each others' aspirations. The scene features a custom GLSL water shader plane I experimentally made.",
    madewith: ["THREE.js", "React", "Supabase"],
  },
  {
    name: "PolyPace",
    preview: "/images/project-polypace.png",
    link: "https://devpost.com/software/polypace",
    thumbnail: "/images/project-polypace-thumbnail.png",
    description:
        "(Submitted to GeeseHacks 2025) \n PolyPace is a **first-person VR fitness game** that blends exercise and entertainment into a seamless, engaging experience. Players progress through immersive obstacle courses where their **real-world movements are tracked using OpenCV and OpenXR**, and translated into precise in-game actions on the **MetaQuest 3**. \n To enhance immersion, the game features **stunning custom-designed environments modeled in Blender**, seamlessly integrated with **Unity** for polished visuals and smooth gameplay. A **bespoke soundtrack** ties the entire experience together, making fitness both fun and rewarding. At the end of each level, players can track calories burned, creating a measurable and personalized fitness journey!",
    madewith: ["Unity", "OpenXR", "OpenCV", "Blender"],
  },
  {
    name: "BloomScroll",
    preview: "/images/project-bloomscroll.png",
    link: "https://devpost.com/software/bloomscroll-c78udn",
    description:
        "(Submitted to DeltaHacks 2025) \n BloomScroll reimagines the **infinite scroll format** of TikTok and Instagram Reels as a tool for learning. It generates **AI-powered educational videos** on user-selected topics, complete with **AI narrations, subtitles, and engaging visuals**. \n The frontend was designed in **Figma** and developed in **React**, ensuring smooth performance across devices. Behind the scenes, I built an automated video generation pipeline: **Groq generates scripts**, **Pexels provides visuals**, **ElevenLabs creates narrations**, **Whisper handles timestamping**, and **MoviePy/ffmpeg stitches the content** into polished videos, with MongoDB for storing data. \n To optimize performance, I implemented **video preloading on scroll**, cutting wait times by over **65%**. BloomScroll blends AI, design, and mobile development into a platform that makes education as engaging as social media. \n After the hackathon, this idea was later adapted into a mobile app version using Expo and React Native.",
    thumbnail: "/images/project-bloomscroll-thumbnail.png",
    madewith: ["React", "TypeScript", "React Native (Expo)", "Python", "Groq", "MoviePy/ffmpeg", "ElevenLabs", "Whisper", "MongoDB", "Pexels API"],
  },
  {
    name: "Portfolio",
    link: "https://rachelqrwei.ca/",
    preview: "/images/project-website.png",
    description:
      "Welcome to my website! \n This space showcases not only my technical skills, but also who I am as a person in an immersive 3D experience. I modeled the entire 3D room in Blender from scratch, complete with **materials design, UV painting, and texture baking**. I then brought it to the web using THREE.js. \n I designed the layout of each modal in Figma, then transformed it into a fully functional and **mobile-responsive React website**. \n Just like how someone's room reflects its inhabitant, this website serves as a glimpse into my learning journey and a creative representation of myself as a creator. This portfolio's design resonated with over 200 000 viewers on LinkedIn, and over **25,000+ unique visitors!**",
    thumbnail: "/images/project-website-thumbnail.png",
    madewith: ["THREE.js", "React", "Blender", "Figma", "TailwindCSS", "Framer"],
  },
  {
    name: "Protential",
    link: "https://devpost.com/software/protential",
    preview: "/images/project-proteintial.jpg",
    description:
        "(Second Place Overall, RythmHacks 2023) \n Protential is a **healthcare-focused web platform** that merges **AI, biotechnology, and blockchain** to accelerate protein research and drug discovery. Using **AlphaFold2**, the system rapidly generates and visualizes **3D protein folding structures**, significantly reducing the reliance on traditional x-ray crystallography. \n To improve accessibility for researchers, I integrated a **ChatGPT-powered assistant** capable of explaining protein inhibition and related biochemical processes. Patient data security was ensured through **Ethereum-based smart contracts**, allowing controlled access and privacy-preserving collaboration. The application was built with **React, TailwindCSS, and Python**, uniting complex technologies into a single streamlined research tool. \n Protential earned **Second Place Overall** for its innovative use of AI and blockchain in advancing scientific discovery.",
    thumbnail: "/images/project-proteintial-thumbnail.jpg",
    madewith: ["AlphaFold2", "Python", "React", "Ethereum (Solidity)", "ChatGPT API", "TailwindCSS", "JavaScript"],
  },
  {
    name: "ARcademy",
    link: "https://devpost.com/software/arcademy-5oq17w",
    preview: "/images/project-arcademy.png",
    description:
        "(First Place Overall, IgnitionHacks 2023) \n ARcademy is an **award-winning AR learning platform** built to make education more engaging for **kinesthetic learners**. The system allows users to interact with **gesture-controlled 3D simulations**, making traditionally expensive, hands-on lessons accessible through augmented reality. \n Gesture recognition was powered by the **Mobilenet-SSD model with custom transfer learning**, while **WebXR** enabled seamless AR deployment in the browser. On the frontend, I designed and developed interactive components with **Figma, React, TailwindCSS, and Blender**, integrating them with **Echo3D** for asset hosting. The platform also includes a **ChatGPT-powered AI assistant** and real-time input through **Arduino**, bridging physical gestures with digital simulations. \n Out of over 300 participants, ARcademy won **First Place Overall**, demonstrating both the technical strength and transformative potential of AR in education.",
    thumbnail: "/images/project-arcademy-thumbnail.jpg",
    madewith: ["WebXR", "Mobilenet-SSD (Transfer Learning)", "React", "Arduino (C++)", "Blender", "Echo3D", "ChatGPT API", "TailwindCSS"],
  },
  {
    name: "",
    preview: "/images/project-missing.png",
    thumbnail: "/images/project-missing-thumbnail.png",
    description:
      "Coming Soon... \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    madewith: ["Coming Soon..."],
  },
]

export default projects

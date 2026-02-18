import React, { useState } from "react"
import { motion } from "framer-motion" // Import Framer Motion
import "../../index.css" // Import Tailwind CSS file
import projects from "../../data/projects"

import folderBack from "/images/folder-back.png"
import folderFront from "/images/folder-front.png"
import folderFrontOpen from "/images/folder-front-open.png"

//__________________________________________________________________________________________________________

const FolderGrid = () => {
  //__________________________________________________________________________________________________________

  const [selectedProject, setSelectedProject] = useState(null)
  const handleProjectClick = (project) => {
    setSelectedProject(project)
  }
  const closeModal = () => {
    setSelectedProject(null)
  }

  const parseBoldText = (text) => {
    if (!text) return text
    
    const parts = text.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.slice(2, -2)
        return <strong key={index}>{boldText}</strong>
      }
      return part
    })
  }

  //__________________________________________________________________________________________________________

  return (
    <>
    <div className="grid portrait:grid-cols-3 grid-cols-3 ml-[6%] mt-2 flex justify-center items-center">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className=" relative cursor-pointer flex justify-center items-center w-[77%] h-[80%] mb-6 max-w-[20vw] max-h-[20vh]"
          whileHover={{ y: -8 }}
          onClick={() => handleProjectClick(project)}
        >
          {/* folder back image */}
          <img
            src={folderBack || "/placeholder.svg"}
            className="absolute w-full max-w-[20vw] pointer-events-none"
            alt="folder back"
          />

          {/* project preview */}
          <motion.img
            src={project.preview}
            className="absolute z-10  mb-[12%] w-auto h-[50%] max-w-[10vw]  border-2 border-color-[#bfb6a8]"
            alt={project.name}
          />

          {/* folder front image (hover effect switches to open folder) */}
          <motion.img
            src={folderFront}
            className="absolute w-full z-20 max-w-[20vw] user-select: none;"
            alt="folder front"
            onHoverStart={(e) => (e.target.src = folderFrontOpen)}
            onHoverEnd={(e) => (e.target.src = folderFront)}
          />
          <p className=" portrait:mt-[99%] portrait:text-[1.8vh] text-[#DED9CF]  text-[2vh] mt-[93%]  ">
            {project.name}
          </p>
        </motion.div>
      ))}

    </div>

      {/* Modal */}
      {selectedProject && (
        <div className="absolute left-0 right-0 bottom-0 top-[9%] flex justify-center items-center z-50" onWheel={(e) => e.stopPropagation()}>
          <div className="portrait:w-[92%] w-[90%] h-[85%] bg-[#d1cbbd] pl-4 pb-3 pt-2 pr-2 rounded-lg shadow-lg flex flex-col">
            <div className="flex flex-row justify-between bg-[#d1cbbd]">
              <h2 className="portrait:text-[2.5vh] text-[3vh] text-[#393229] font-bold mt-1">{selectedProject.name}</h2>
              <button onClick={closeModal} className="portrait:text-[2.5vh] text-[3vh] text-[#52483b] mb-1 mr-3">
                ⨉
              </button>
            </div>
            <div className="rounded flex-1 overflow-hidden min-h-0">
              <div className="overflow-y-auto overflow-x-hidden h-full px-2 scrollbar-thin scrollbar-thumb-[#bfb6a8] scrollbar-track-transparent">
                <div
                  className="w-[100%] portrait:h-[20vh] rounded h-[28vh] bg-cover"
                  style={{ backgroundImage: `url(${selectedProject.thumbnail})`, backgroundPosition: "center 50%" }}
                >
                  {" "}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedProject.madewith.map((madewith, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#c4bcb0] text-[#52483b] rounded-md portrait:text-[1.8vh] text-[2vh]"
                    >
                      {madewith}
                    </span>
                  ))}
                </div>
                <div className="mt-3">
                  {selectedProject.description.split("\n").map((line, index) => (
                    <p className="w-[99%] portrait:text-[1.8vh] px-4 text-[2vh] text-[#52483b] mt-2" key={index}>
                      {parseBoldText(line)}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-right mt-2 text-[1.6vh] font-bold underline">
              <a
                href={selectedProject.link}
                className="text-[#393229] hover:text-[#52483b]"
                target="_blank"
                rel="noopener noreferrer"
              >
                View this Project
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FolderGrid


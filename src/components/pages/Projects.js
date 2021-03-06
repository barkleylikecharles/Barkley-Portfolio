import React from 'react';
import dominateImage from "../../assets/DominateYourDay.jpeg";
import veganImage from "../../assets/howtovegan.jpg";
function Projects() {
  return (
    <div>
      <h1>Development Projects</h1>
      <div>
              <a href="https://barkleylikecharles.github.io/project-homepage/">
              <img src={dominateImage} className="my-2" style={{ width: "50%" }} alt="cover" /></a>
        </div>
        <div>
              <a href="https://github.com/barkleylikecharles/How-To-Vegan">
              <img src={veganImage} className="my-2" style={{ width: "50%" }} alt="cover" /></a>
        </div>
      
    </div>
  );
}

export default Projects;
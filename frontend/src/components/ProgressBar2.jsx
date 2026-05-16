import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Node js", percent: 85 },
  { name: "express js", percent: 60 },
  { name: "JWT", percent: 80 },
  { name: "Encryption", percent: 65 },
  { name: "database", percent: 75 },
];

const ProgressBar2 = () => {
  return (
    <div className="mt-[4vw]">
      {skills.map((skill, index) => (
        <div key={index} className="mb-[1vw]">
          {/* Skill Name - Responsive */}
          <h3 className="
            font-['Raleway'] 
            font-normal 
            text-[1.3vw] 
        
            leading-[1.8] 
            
            uppercase 
            text-black 
             
            
          ">
            {skill.name}
          </h3>

          {/* Progress Bar Background - Responsive */}
          <div className="
            
            h-[1.5vh]  
            bg-[#e0eef7] 
            rounded-[3px] 
            overflow-hidden 
            relative
          ">
            {/* Animated Filled Bar */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.percent}%` }}
             viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 1.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="
                h-full 
                bg-[#4f3194]
                rounded-[2.5px]
              "
            />

            {/* Percentage Text - Responsive */}
            <span className="
              absolute 
              right-[0.2vw] 
              top-1/2 
              -translate-y-1/2 
              font-bold 
              text-[1.8vw] 
              md:text-[14px]
              text-black
              drop-shadow-md
            ">
              {skill.percent}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar2;
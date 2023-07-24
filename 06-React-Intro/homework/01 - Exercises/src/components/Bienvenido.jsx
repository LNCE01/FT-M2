import React from "react";

const studentName = "Nicolas";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  
  return (
  <div>
    <h1>Soy Henry</h1>
    <h3>{studentName}</h3>
    <ul>
        {(() => {
          const skills = [];
          for (let i = 0; i <techSkills.length; i++) {
            skills.push(<li key={i}>{techSkills[i]}</li>);
          }
          return skills;
        })()}
      </ul>
  </div>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };

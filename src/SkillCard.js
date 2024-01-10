function SkillCard({ category, skills }) {
    return (
      <div className="skill-category-div">
        <h4>{category}</h4>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default SkillCard;
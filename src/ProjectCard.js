function ProjectCard({ id, imageUrl, siteUrl, githubUrl, title, description }) {
  return (
    <div className="inner-div" id={id}>
      <div className="inner-left-div">
        <img className="project-img" src={imageUrl} alt={title} />
        <div className="project-button-div">
          <a href={siteUrl}><button className="general-button">Site</button></a>
          <a href={githubUrl}><button className="general-button">Github</button></a>
        </div>
      </div>
      <div className="inner-right-div">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
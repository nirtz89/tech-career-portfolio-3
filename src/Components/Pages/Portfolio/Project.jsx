function Project(props) {
    return (
        <div>
            <img src={props.image} alt="project"/>
            <h3>{props.name}</h3>
        </div>
    )
}
export default Project;
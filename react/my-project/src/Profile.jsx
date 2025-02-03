import PropTypes  from "prop-types";



function Profile(props) {
    return (

        <div className="container">
            <img src={props.image} alt={props.name} className='prof-img'/>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>

    );
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};
export default Profile;
import propTypes from 'prop-types'
import guest from './assets/guest.jpg'

function Card(props){
    return(
    <>
        <div className="card">
            <img id='card-image' src={props.profilePick} alt="this is my img." />
            <h2 id='card-title'>{props.name}</h2>
            <p className='about'>{props.discription}</p>
        </div>
    </>
    );
}
Card.propTypes={
    
    name: propTypes.string,
    discription: propTypes.string,
}

Card.defaultProps={
    name: "Guest",
    profilePick: guest ,
    discription:"plz add discription "
}

export default Card;
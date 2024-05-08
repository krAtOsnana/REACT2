/**
 * 
 * conditional rendering
 */
import propType from 'prop-types'

function Greeting(props){

    let welcomeMessage = <h1 className="welcomeMessage">welcome {props.username}</h1>
    let logInMessage = <h1 className="logInMessage">please log In</h1>
    return(
        props.isLoggedIn ? welcomeMessage : logInMessage 
    );
}

Greeting.prototype={
    username: propType.string,
    isLoggedIn: propType.bool,
}

Greeting.defaultProps={
    username:"guest",
    isLoggedIn:false,
}

export default Greeting;
import PropTypes from 'prop-types';

function UserGreeting(props) {
    const welcome = <h2 className="welcome">Welcome, {props.username}!</h2>;
    const nowelcome = <h2 className="nowelcome">Please log in to continue, {props.username}</h2>;

    return props.islogin ? welcome : nowelcome;
}

UserGreeting.propTypes = {  
    islogin: PropTypes.bool,   
    username: PropTypes.string,
};

UserGreeting.defaultProps = {
    islogin: false,
    username: "Guest",
};

export default UserGreeting;

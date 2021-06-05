import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Profile = (props) => {
    let history = useHistory();
    const logout = () => {
        props.dispatch({type: 'LOGOUT'});
        history.push("/shop");
    }

    return(
        <div>
            <div className = "sidebar">
                <div>
                    <button>Orders</button>
                    <button>Settings</button>
                </div>
                
                <button onClick = {logout}>Logout</button>
            </div>
        </div>
    );
}

export default connect()(Profile);
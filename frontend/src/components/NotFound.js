import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h4>Kažkas neveikia...</h4>
            <Link to="/profile">Grįžti į mano profilį...</Link>
        </div>
     );
}
 
export default NotFound;
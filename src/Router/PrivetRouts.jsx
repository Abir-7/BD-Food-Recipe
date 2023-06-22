import { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";



const PrivetRouts = ({ children }) => {
  const location = useLocation();
  const { user, loader } = useContext(Authcontext)
  if (loader) {
    return <div className='d-flex justify-content-center'>
      <div className='mt-5'>
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  }


  if (user) {
    return children
  }
  else {
    return <Navigate to='/user/login' state={{ from: location }} replace></Navigate>
  }
};

export default PrivetRouts;
import { useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';
import { RootState } from '../redux/store';
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const auth = useSelector((state:RootState)=> state.auth)
  if (!auth.isAuthentificated && !auth.loading) {
    return <Navigate to="/login"/>;
  }
  return children;
};

export default PrivateRoute;
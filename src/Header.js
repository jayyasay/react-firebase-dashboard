import { useNavigate } from 'react-router-dom';
import { useSession } from './firebase/userProvider';
import { logout } from './firebase/auth';

export const Header = () => {
    const hello = useNavigate();
  
    const logoutUser = async () => {
      await logout();
      hello('/login')
    }

    const { user }  = useSession();

    return (
        <>
        { !!user &&
            <button className="ui secondary button logout" onClick={ logoutUser }>
            LOGOUT
        </button>}
        </>
            )
        
}

export default Header;
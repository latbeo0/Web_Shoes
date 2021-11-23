import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLogout } from './../../services/userFetch';
import { dispatchLogout } from './../../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        fetchLogout()
            .then(() => {
                localStorage.removeItem('firstLogin');
                dispatch(dispatchLogout());
                navigate('/');
            })
            .catch((err) => console.log(err));
    });

    return <div></div>;
};

export default Logout;

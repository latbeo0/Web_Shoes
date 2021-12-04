import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';
import { dispatchLogAdmin } from './../../redux/actions/authActions';
import { Container } from './Admin_Elements';
import { Outlet } from 'react-router-dom';
import TopBar from '../../components/TopBar';

const Admin = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(dispatchLogAdmin());
    }, [dispatch]);

    return (
        <>
            <TopBar />
            <Container>
                <Sidebar />
                <Outlet />
            </Container>
        </>
    );
};

export default Admin;

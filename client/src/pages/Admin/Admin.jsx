import Sidebar from '../../components/Sidebar/Sidebar';
import { Container } from './Admin_Elements';
import { Outlet } from 'react-router-dom';
import TopBar from '../../components/TopBar';

const Admin = () => {
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

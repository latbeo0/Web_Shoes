import styled from 'styled-components';
import EnhancedTable from './../components/CpnTestContainer';

const Container = styled.div`
    flex: 4;
    /* background-color: #ccc; */
    margin: 0 50px;
`;

const Test = () => {
    return (
        <Container style={{ fontSize: '30px' }}>
            <EnhancedTable />
        </Container>
    );
};

export default Test;

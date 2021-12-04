import styled from 'styled-components';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

export const MapContainer = styled.div`
    padding: 50px 270px;
    height: 100vh;
    width: 100vw;
`;

export const Title = styled.h3`
    font-size: 38px;
`;

export const MapDiv = styled.div`
    width: 1000px;
    height: 500px;
`;

function map() {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 10.817196, lng: 106.658433 }}
        />
    );
}
const WrappedMap = withScriptjs(withGoogleMap(map));

const Map = () => {
    return (
        <MapContainer>
            <Title>MAP</Title>
            <MapDiv>
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCyEVYyIvhNFx4BfoqnFfg2iCSvh8tRv7c&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: '100%' }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </MapDiv>
        </MapContainer>
    );
};

export default Map;

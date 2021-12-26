import styled from "styled-components";
import { useState } from "react";
import areas from "../../helpers/areas-data.json";

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
export const SelectDiv = styled.div`
  font-size: 25px;
  margin: 20px 0px;
`;
export const Option = styled.option`
  font-size: 16px;
`;

const iframes = {
  HCM: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4843009459537!2d106.76973361458973!3d10.850721392271149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752763f23816ab%3A0x282f711441b6916f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1640248795070!5m2!1svi!2s",
  DN: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.771503266693!2d108.21123561465146!3d16.077342788875896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142184792140755%3A0xd4058cb259787dac!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgUGjhuqFtIEvhu7kgdGh14bqtdCAtIMSQ4bqhaSBo4buNYyDEkMOgIE7hurVuZw!5e0!3m2!1svi!2s!4v1640247562610!5m2!1svi!2s",
};

const Map = () => {
  const [iframe, setIframe] = useState("");

  const onChange = (e) => {
    setIframe(iframes[e.target.value]);
  };

  return (
    <MapContainer>
      <Title>MAP</Title>
      <SelectDiv>
        <select
          className="mdb-select md-form form-control"
          onChange={onChange}
          searchable="Search here.."
        >
          <Option value="" disabled selected>
            Choose an area
          </Option>
          {areas.map((item) => {
            return (
              <Option key={item.Code} value={item.Code}>
                {item.Code} - {item.name}
              </Option>
            );
          })}
        </select>
      </SelectDiv>
      <div>
        <iframe
          src={iframe}
          height="500px"
          width="100%"
          title="Iframe Example"
        ></iframe>
      </div>
    </MapContainer>
  );
};

export default Map;

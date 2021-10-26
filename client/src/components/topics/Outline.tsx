import * as React from "react";
import styled from "styled-components";

const TagComponent = styled.div`
  width: 100%;
  padding: 80px 16px;
  margin: 0px auto;
  box-sizing: border-box;
  color: white;
  text-align: center;
  margin-top: -18px;
`;

const TilesContainer = styled.div`
  padding: 5px;
  float: left;
  text-align: center;
`;

const Tiles1 = styled.div`
  padding: 10px 10px;
  color: white;
  min-height: 5vh;
  border-radius: 10px;
  background-color: black;
  box-shadow: 0px 0px 50px #ff6600;

  &:hover {
    background-color: #087179;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const Body = styled.div`
  margin: 0;
  padding: 1px 1px;
  color: white;
  font-size: 20px;
  min-height: 70vh;
  border-radius: 30px;
  position: relative;
`;

const StyledText = styled.div`
  color: white;
  text-align: center;
  font-size: 20px;
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: justify;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

class Outline extends React.Component {
  render() {
    return (
      <TagComponent>
        <Body>
          <TilesContainer>
            <Tiles1 onClick={(event) => (window.location.href = "/topic1")}>
              <h3>TOPIC 1</h3>
            </Tiles1>
            <StyledText>
              <p>Topic 1: lets test your knowledge on this subject...</p>
            </StyledText>
          </TilesContainer>
        </Body>
      </TagComponent>
    );
  }
}

export default Outline;

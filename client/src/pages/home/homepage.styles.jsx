import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;

  @media only screen and (max-width: 750px) {
    padding: 20px 5vw;
  }
`;

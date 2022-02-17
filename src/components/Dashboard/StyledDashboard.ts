import styled from "styled-components";

export const StyledDashBoard = styled.div`
  .dashboard {
    margin: 0px auto;
    margin-top: 200px;
    padding: 100px;
    border: 4px solid black;
    width: fit-content;
    font-size: 40px;
    background: #eff1f8;
    color: black;

    &__title {
      margin-bottom: 20px;
      font-weight: 600;
    }
    &__route {
      margin-bottom: 5px;
      cursor: pointer;
    }
  }
`;

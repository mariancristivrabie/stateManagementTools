import styled from "styled-components";

export const StyledCounterArea = styled.div`
  && {
    width: 500px;
    height: 250px;
    padding: 20px;
    border: 4px solid black;
    font-size: 40px;
    background: #eff1f8;
    color: black;
  }

  .counter {
    &__value {
      text-align: center;
      margin-top: 50px;
    }

    &__actions {
      display: flex;
      margin: 0px auto;
      width: 180px;
      justify-content: space-between;
      margin-top: 20px;
    }
  }
`;

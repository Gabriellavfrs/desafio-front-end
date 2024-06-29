import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 99999;
`;

export const Loader = styled.div`
  position: absolute;
  z-index: 1;
  border: 14px solid var(--white);
  border-top: 14px solid var(--primary-10);

  border-radius: 50%;
  width: 167px;
  height: 167px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

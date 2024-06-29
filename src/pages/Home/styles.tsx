import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 95%;
  max-width: 960px;
  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: center;

  @media (max-width: 650px) {
    width: 90%;
    max-width: 335px;
    gap: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  height: 28px;
  margin: 0;
`;

export const TitleContainer = styled.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  height: 48px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 650px) {
    height: 104px;
    margin-top: 20px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SearchInput = styled.input`
  height: 48px;
  width: 100%;
  padding: 12px 40px 12px 16px;
  box-sizing: border-box;
  outline: none;
  border: 1px solid var(--gray-10);
  border-radius: 8px;
  font-size: 16px;

  &::placeholder {
    color: var(--gray-20);
  }
`;

export const SearchButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  border: unset;
  background-color: var(--white);
  cursor: pointer;
  padding: 4px;
  position: absolute;
  right: 16px;
  top: 12px;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 287px;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

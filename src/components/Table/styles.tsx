import styled from "styled-components";

export const TableContainer = styled.table`
  border-collapse: separate;
  border-spacing: 0px 2px;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
`;

export const TableHead = styled.thead`
  width: 100%;
`;

export const TableHeadRow = styled.tr`
  background: linear-gradient(var(--primary-00), var(--primary-10));
  text-align: left;
  height: 47px;
  color: var(--white);
  font-size: 16px;
  text-transform: uppercase;
  box-shadow: 0px 1px 2px 0px var(--gray-10);
  display: flex;
  gap: 20px;
  padding: 12px 30px;
  align-items: center;
  box-sizing: border-box;

  th {
    width: 100%;
    font-weight: 500;
  }

  th:first-child {
    max-width: 100px;
  }

  @media (max-width: 650px) {
    gap: unset;
    justify-content: space-between;
    padding: 15px;

    th {
      width: fit-content;
    }

    th:nth-child(3),
    th:nth-child(4),
    th:nth-child(5) {
      display: none;
    }
  }

  @media (min-width: 650px) {
    th:last-child {
      display: none;
    }
  }
`;

export const TableBodyRow = styled.tr<{ $isOpen: boolean }>`
  border: 1px solid var(--gray-10);
  background-color: var(--white);
  box-shadow: 0px 1px 2px 0px var(--gray-10);
  font-size: 16px;
  display: flex;
  gap: 20px;
  padding: 12px 30px;
  box-sizing: border-box;
  align-items: center;

  td {
    width: 100%;
    font-weight: 400;
    display: flex;
    align-items: center;
  }

  td:first-child {
    max-width: 100px;
  }

  @media (max-width: 650px) {
    overflow: hidden;
    flex-direction: column;
    transition: height 0.2s ease-in-out;
    height: ${({ $isOpen }) => ($isOpen ? "224px" : "62px")};
    padding: 12px 15px;
    align-items: stretch;
    gap: 16px;

    td:nth-child(1),
    td:nth-child(2) {
      display: none;
    }

    td:nth-child(4),
    td:nth-child(5),
    td:nth-child(6) {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px dashed var(--gray-10);
    }

    td::before {
      content: attr(data-cell);
      font-weight: 700;
    }
  }

  @media (min-width: 650px) {
    td:nth-child(3) {
      display: none;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  border: unset;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  padding: 0;
  margin-bottom: 30px;
  background: none;

  h3 {
    font-size: 16px;
    font-weight: 400;
  }

  @media (min-width: 650px) {
    display: unset;
  }
`;
export const Image = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
`;

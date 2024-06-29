import { useEffect, useState } from "react";
import { ArrowDownIcon } from "../Icons/ArrowDownIcon";
import { ArrowUpIcon } from "../Icons/ArrowUpIcon";
import {
  Button,
  Image,
  TableBodyRow,
  TableContainer,
  TableHead,
  TableHeadRow,
} from "./styles";
import { CircleIcon } from "../Icons/CircleIcon";
import { Employee } from "../../types/employeeType";
import { formatDate } from "../../utils/formatDate";
import { formatPhone } from "../../utils/formatPhone";

type Props = {
  data: Employee[];
};

export const Table = ({ data }: Props) => {
  const [rowToExpand, setRowToExpand] = useState<number | null>(null);

  const handleExpandRow = (index: number) => {
    if (rowToExpand === index) {
      setRowToExpand(null);
    } else {
      setRowToExpand(index);
    }
  };

  useEffect(() => {
    if (rowToExpand === null) return;
    setRowToExpand(null);
    console.log("renderizei");
  }, [data]);

  return (
    <TableContainer>
      <TableHead>
        <TableHeadRow>
          <th>Foto</th>
          <th>Nome</th>
          <th>Cargo</th>
          <th>Data de Admissão</th>
          <th>Telefone</th>
          <th>
            <CircleIcon />
          </th>
        </TableHeadRow>
      </TableHead>
      <tbody>
        {data.map((row, index) => (
          <TableBodyRow $isOpen={rowToExpand === index} key={index}>
            <td>
              <Image src={row.image} />
            </td>
            <td>{row.name}</td>
            <td>
              <Button onClick={() => handleExpandRow(index)}>
                <Image src={row.image} />
                <h3>{row.name}</h3>
                {rowToExpand === index ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </Button>
            </td>
            <td data-cell="Cargo">{row.job}</td>
            <td data-cell="Data de admissão">
              {formatDate(row.admission_date)}
            </td>
            <td data-cell="Telefone">{formatPhone(row.phone)}</td>
          </TableBodyRow>
        ))}
      </tbody>
    </TableContainer>
  );
};

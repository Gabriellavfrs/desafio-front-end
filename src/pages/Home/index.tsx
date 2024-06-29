import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchIcon } from "../../components/Icons/SearchIcon";
import { Table } from "../../components/Table";
import {
  Main,
  SearchButton,
  SearchContainer,
  SearchInput,
  Title,
  TitleContainer,
  Wrapper,
} from "./styles";
import { Employee } from "../../types/employeeType";
import { Loading } from "../../components/Loading";
import { getEmployees } from "../../services/getEmployees";
import Fuse, { IFuseOptions } from "fuse.js";
import { toast, ToastOptions } from "react-toastify";

const fuseOptions: IFuseOptions<Employee> = {
  threshold: 0.0,
  ignoreLocation: true,
  keys: ["job", "name", "phone"],
};

const toastOptions: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export const Home = () => {
  const [employeesData, setEmployeesData] = useState<Employee[]>([]);
  const [employeesSearch, setEmployeesSearch] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setIsLoading(true);
      const result = await getEmployees();
      setEmployeesData(result);
      setEmployeesSearch(result);
    } catch (e) {
      toast.error("Não foi possível buscar os dados!", toastOptions);
    } finally {
      setIsLoading(false);
    }
  }

  const fuse = new Fuse(employeesData, fuseOptions);

  const handleSearhClick = () => {
    if (!search) {
      return setEmployeesSearch(employeesData);
    }
    const filteredData = fuse.search(search).map(({ item }) => item);
    setEmployeesSearch(filteredData);
  };

  return (
    <>
      <Header />
      {isLoading && <Loading />}
      <Main>
        <Wrapper>
          <TitleContainer>
            <Title>Funcionários</Title>
            <SearchContainer>
              <SearchInput
                placeholder="Pesquisar"
                value={search}
                onChange={({ target }) => setSearch(target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearhClick();
                  }
                }}
              />
              <SearchButton onClick={handleSearhClick}>
                <SearchIcon />
              </SearchButton>
            </SearchContainer>
          </TitleContainer>
          <Table data={employeesSearch} />
        </Wrapper>
      </Main>
    </>
  );
};

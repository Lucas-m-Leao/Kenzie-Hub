/* eslint-disable react-hooks/exhaustive-deps */
import logo from "../../assets/Logo.svg";
import Api from "../../components/data";
import Moda from "../../components/Modal";

import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  ContainerPa,
  ContainerTec,
  ContainerTitle,
  ContainerUl,
  Div,
} from "./styles";

export const Home = () => {
  const [user, setUser] = useState("");
  const [tech, setTech] = useState([]);
  const [modal, setMoldal] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [selec, setSelec] = useState({});

  const History = useHistory();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    api();
    localStorage.getItem("user") === null && History.push("/");
  }, []);

  const api = () => {
    Api.get(`/users/${localStorage.getItem("id")}`).then((res) => {
      setTech(res.data.techs);
    });
  };
  const onclick = (e) => {
    const filter = tech.find((item) => item.id === e.target.id);
    setSelec(filter);
    setModalEditar(true);
  };
  const logaut = (e) => {
    e.preventDefault();
    localStorage.clear();
    History.push("/");
  };
  return (
    <>
      <Container>
        <Div>
          <ContainerTitle>
            <img src={logo} alt="" />
            <button onClick={(e) => logaut(e)}>Sair</button>
          </ContainerTitle>
          <ContainerPa>
            <h1>Ola,{user.name}</h1>
            <span>{user.module}</span>
          </ContainerPa>
          <ContainerTec>
            <h2>Tecnologias</h2>
            <button onClick={() => setMoldal(true)}>+</button>
          </ContainerTec>
          <ContainerUl>
            {tech.toString() === "" ? (
              <h2>Não há tecnologias cadastradas</h2>
            ) : (
              tech.map((item) => {
                return (
                  <li key={item.id} id={item.id} onClick={(e) => onclick(e)}>
                    <h2 id={item.id}>{item.title} </h2>
                    <span id={item.id}>{item.status}</span>
                  </li>
                );
              })
            )}
          </ContainerUl>
        </Div>
        {modal && (
          <Moda user={user} setMoldal={setMoldal} set={true} api={api} />
        )}
        {modalEditar && (
          <Moda
            user={user}
            setModalEditar={setModalEditar}
            set={false}
            api={api}
            selec={selec}
          />
        )}
      </Container>
    </>
  );
};

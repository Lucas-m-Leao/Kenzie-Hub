import { Input } from "../Input";
import Api from "../../components/data";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useState } from "react";
import { toast } from "react-toastify";

import {
  ButtonCad,
  ButtonExcluir,
  ButtonSave,
  ContainerEdit,
  ContainerModalInput,
  ContainerModalTitle,
  ConteinerModal,
  Modal,
} from "./styled";

const Moda = ({ setMoldal, set, user, api, setModalEditar, selec }) => {
  const [status, setStatus] = useState(selec && selec.status);
  const shema = yup.object().shape({
    title: yup.string().required("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shema),
  });

  const onFunctionSubmit = (data) => {
    Api.post("/users/techs", data, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then(() => {
        setMoldal(false);
        api();
        toast.success("Techs criada com Sucesso!!!");
      })
      .catch(() => {
        toast.error("Ja existe techs com esse nome.");
      });
  };
  const onFunctionSubmitEdit = (e, data) => {
    e.preventDefault();
    delete data.title;
    Api.put(`/users/techs/${selec.id}`, data, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then(() => {
        setModalEditar(false);
        api();
        toast.success("Techs editada com Sucesso!!!");
      })
      .catch(() => {
        toast.error("Nada Modificado");
      });
  };
  const Delete = (e, data) => {
    e.preventDefault();
    Api.delete(`/users/techs/${data}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }).then(() => {
      setModalEditar(false);
      api();
      toast.success("Techs deletada com Sucesso!!!");
    });
  };
  return (
    <>
      {set ? (
        <Modal>
          <ConteinerModal>
            <ContainerModalTitle>
              <h2>Cadastrar Tecnologia</h2>
              <button onClick={() => setMoldal(false)}>X</button>
            </ContainerModalTitle>
            <ContainerModalInput onSubmit={handleSubmit(onFunctionSubmit)}>
              <Input
                register={register}
                name="title"
                label="Nome"
                placeholder="Digite o nome da Tecnologia"
                errors={errors.title && errors.title.message}
              />
              <span>Selecionar status</span>
              <select name="" id="" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <ButtonCad>Cadastrar Tecnologia</ButtonCad>
            </ContainerModalInput>
          </ConteinerModal>
        </Modal>
      ) : (
        <Modal>
          <ConteinerModal>
            <ContainerModalTitle>
              <h2>Tecnologia Detalhes</h2>
              <button onClick={() => setModalEditar(false)}>X</button>
            </ContainerModalTitle>
            <ContainerModalInput>
              <Input
                value={selec.title}
                register={register}
                name="title"
                label="Nome"
                errors={errors.title && errors.title.message}
              />
              <span>Selecionar status</span>
              <select
                value={status}
                onChange={(e) => setStatus({ status: e.target.value })}
              >
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <ContainerEdit>
                <ButtonSave onClick={(e) => onFunctionSubmitEdit(e, status)}>
                  Salvar alterações
                </ButtonSave>{" "}
                <ButtonExcluir onClick={(e) => Delete(e, selec.id)}>
                  Excluir
                </ButtonExcluir>
              </ContainerEdit>
            </ContainerModalInput>
          </ConteinerModal>
        </Modal>
      )}
    </>
  );
};
export default Moda;

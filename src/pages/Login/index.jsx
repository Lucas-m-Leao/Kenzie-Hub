/* eslint-disable react-hooks/exhaustive-deps */
import logo from "../../assets/Logo.svg";
import Api from "../../components/data";
import { Conteiner, Section } from "./styles";
import { Input } from "../../components/Input";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory } from "react-router-dom";
import { useEffect } from "react";

import { toast } from "react-toastify";

export const Login = () => {
  const history = useHistory();
  useEffect(() => {
    localStorage.getItem("user") !== null && history.push("/home");
  }, []);
  const shema = yup.object().shape({
    email: yup.string().required("Campo Obrigatorio").email("Email Invalido"),
    password: yup
      .string()
      .required("Campo Obrigatorio")
      .min(8, "minimo 8 caracteres"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shema),
  });
  const functionSubmit = (data) => {
    Api.post("/sessions", { ...data })
      .then((ress) => {
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: ress.data.user.name,
            module: ress.data.user.course_module,
            token: ress.data.token,
          })
        );
        localStorage.setItem("id", ress.data.user.id);
        history.push("/home");
      })
      .catch(() => {
        toast.error("E-mail ou senha está incorreto");
      });
  };
  return (
    <Section>
      <img src={logo} alt="" />
      <Conteiner>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(functionSubmit)}>
          <Input
            errors={errors.email ? errors.email.message : false}
            register={register}
            label="Email"
            placeholder="Digite seu Email"
            name={"email"}
          />
          <Input
            errors={errors.password ? errors.password.message : false}
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            register={register}
            name={"password"}
          />
          <button>Entrar</button>
        </form>
        <span>Ainda não possui uma conta?</span>
        <button onClick={() => history.push("/register")}>Cadastre-se</button>
      </Conteiner>
    </Section>
  );
};

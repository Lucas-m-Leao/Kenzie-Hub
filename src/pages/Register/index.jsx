import logo from "../../assets/Logo.svg";
import Api from "../../components/data";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useHistory } from "react-router-dom";
import { Input } from "../../components/Input";

import {
  Container,
  ConteinerTitulo,
  Div,
  SectionRegister,
  Span,
} from "./styles";

export const Register = () => {
  const history = useHistory();
  const shema = yup.object().shape({
    name: yup
      .string()
      .required("Campo Obrigatorio")
      .matches(/^[a-zA-Z]+/g, "Nome Invalido não pode conter Numeros"),
    email: yup.string().required("Campo Obrigatorio").email("Email invalido"),
    password: yup
      .string()
      .required("Campo Obrigatorio")
      .min(8, "No minimo 8 caracteres")
      .max(18, "No maximo 18 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?&-]{8,}$/,
        "A senha deve conter uma das, uma Letra maiuscula e minuscula e um Caracteres especial(@ , $, !, %, *, ?, &, -) "
      ),
    confirmpassword: yup
      .string()
      .required("Campo Obrigatorio")
      .oneOf([yup.ref("password")], "Senha não coincidem"),
    bio: yup
      .string()
      .required("Campo Obrigatorio")
      .min(10, "No minimo 10 caracteres"),
    contact: yup.string().required("Campo Obrigatorio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shema),
  });
  const onFunctionSubmit = (data) => {
    delete data.confirmpassword;
    Api.post("/users", data)
      .then(() => history.push("/"))
      .catch((err) => console.log(err));
  };

  return (
    <SectionRegister>
      <ConteinerTitulo>
        <img src={logo} alt="" />
        <button onClick={() => history.push("/")}>Voltar</button>
      </ConteinerTitulo>
      <Container>
        <h1>Crie sua conta</h1>
        <span>Rapido e grátis, vamos nessa</span>
        <form onSubmit={handleSubmit(onFunctionSubmit)}>
          <Input
            placeholder="Digite aqui seu nome"
            label="Name"
            register={register}
            name="name"
            errors={errors.name && errors.name.message}
          />
          <Input
            placeholder="Digite aqui seu email"
            label="Email"
            type="Email"
            register={register}
            name="email"
            errors={errors.email && errors.email.message}
          />
          <Input
            placeholder="Digite aqui sua senha"
            label="Senha"
            type="password"
            register={register}
            name="password"
            errors={errors.password && errors.password.message}
          />
          <Input
            placeholder="Repita sua senha"
            type="password"
            label="Confirmar Senha"
            register={register}
            name="confirmpassword"
            errors={errors.confirmpassword && errors.confirmpassword.message}
          />
          <Input
            placeholder="Fale sobre você"
            label="Bio"
            register={register}
            name="bio"
            errors={errors.bio && errors.bio.message}
          />
          <Input
            placeholder="Opção de contato"
            label="Contato"
            type="tel"
            register={register}
            name="contact"
            errors={errors.contact && errors.contact.message}
          />
          <Div>
            <Span>Selecionar módulo</Span>

            <select name="modulo" {...register("course_module")}>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo (Introdução ao Frontend)
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo módulo (Frontend Avançado)
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo (Introdução ao Backend)
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto módulo (Backend Avançado)
              </option>
            </select>
          </Div>

          <button>Cadastrar</button>
        </form>
      </Container>
    </SectionRegister>
  );
};

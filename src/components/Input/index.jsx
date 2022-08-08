import { Container, InputConteiner } from "./styles";

export const Input = ({ label, register, errors, name, ...rest }) => {
  return (
    <Container>
      <div>{label}</div>
      <InputConteiner {...rest} {...register(name)} />
      {errors && <span>{errors}</span>}
    </Container>
  );
};

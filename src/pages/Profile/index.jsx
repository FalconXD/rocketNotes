import { Container, Form, Avatar } from "./style";

import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

export function Profile(){
  return(
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft></FiArrowLeft>
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/FalconXD.png" alt="Foto do Usuário" />
          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />

        <Button title="Salvar" />
      </Form>

    </Container>
  );
  
}
import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './style';
import { Link } from 'react-router-dom';

export function Header(){
  return(
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/FalconXD.png" alt="Foto do usuário"/>

        <div>
          <span>Bem-vindo</span>
          <strong>Gustavo Araujo</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>

    </Container>
  );
}
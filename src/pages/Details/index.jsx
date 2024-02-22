import { Container } from './style';

import { Button } from '../../components/Button';

export function Details(){
  return(
      <Container>
        <h1>Gustavo Araujo</h1>
        <Button title="Cadastrar" loading/>
        <Button title="Excluir"/>
      </Container>
  )
}
import { Header } from '../../components/Header';
import { Container, Form } from './style';

import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';

import { Link } from 'react-router-dom';

export function New(){
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Título" />
          <TextArea placeholder="Observações" />

          <Section title="Links úteis">
            <NoteItem value="https://github.com"/>
            <NoteItem placeholder="Novo item" isnew/>
          </Section>

        </Form>
      </main>
    </Container>
  );
}
import { Container, Links, Content } from './style';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';

export function Details(){
  return(
      <Container>
        <Header/>
        <main>
          <Content>          
            <ButtonText title="Excluir nota" />

            <h1>Introdução ao React</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quam sed quia porro commodi, iusto magni aspernatur obcaecati cum, 
              esse nam modi eum, veritatis atque iste quo temporibus quis explicabo 
              rem.</p>

            <Section title="Links úteis">
              <Links>
                <li>
                  <a href="https://github.com/FalconXD">https://github.com/FalconXD</a>
                </li>
                <li>
                <a href="https://github.com/FalconXD">https://github.com/FalconXD</a>
                </li>
              </Links>
            </Section>

            <Section title="Marcadores">
              <Tag title="Express" />
              <Tag title="Node" />
            </Section>

            <Button title="Voltar"/>
          </Content>
        </main>
      </Container>
  )
}
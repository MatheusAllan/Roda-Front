import React from 'react';
import { Container } from './styles';

import {Body, Header, Avatar, TituloLivro, Genero, Content, TituloPost, img , ImageContent, Resenha } from './styles';

const PostResenha: React.FC = () => {
  return (
    <Container>
         
      <Body>
        <Header>
        <Avatar/>
        <strong> Thiago Fulano</strong>
        <time>32 min atrás</time>
        <TituloLivro>
          Caverna do Dragão
        </TituloLivro>
        <Genero>
          FANTASIA
        </Genero>
        </Header>
        <Content>
  
        <img
        src="https://ogimg.infoglobo.com.br/in/8211328-b01-300/FT1086A/caverna-1.jpg"
        alt="Capa Livro"
      />
          <TituloPost>
            <h2>Lorem ipsum dolor sit amet consecet</h2>
          </TituloPost>
          <ImageContent />
          <Resenha>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
              Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. 
          </Resenha>
        </Content>
        
      </Body>
    </Container>
  );
};

export default PostResenha;
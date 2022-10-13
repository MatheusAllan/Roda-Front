import React from 'react';

import PostResenha from "../Post";

 import { Container, Postagens } from './style';

 const Feed: React.FC = () => {
    return (
        <Container>
    
  
        <Postagens>
          <PostResenha />
          <PostResenha />
          <PostResenha />
          <PostResenha />
          <PostResenha />
        </Postagens>
      </Container>
    );
  };
  
  export default Feed;

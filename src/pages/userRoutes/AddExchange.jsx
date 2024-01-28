import React from 'react'
import Base from '../../components/Base';
import { Container } from 'reactstrap';
import AddPostExchange from '../../components/AddPostExchange';

const AddExchange = () => {

  return (
    <Base>
      <div
        style={{
          backgroundImage: "url('../image/background6.jpg')",
          marginTop: '0px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',

        }}
      >
        <Container className="mt-3">
          <AddPostExchange />
        </Container>
      </div>
    </Base>
  )
}

export default AddExchange;




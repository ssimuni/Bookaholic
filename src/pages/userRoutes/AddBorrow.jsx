import React from 'react'
import Base from '../../components/Base';
import AddPostBorrow from '../../components/AddPostBorrow';
import { Container } from 'reactstrap';

const AddBorrow = () => {

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
          <AddPostBorrow />
        </Container>
      </div>
    </Base>
  )
}

export default AddBorrow;




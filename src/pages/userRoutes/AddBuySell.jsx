import React from 'react'
import Base from '../../components/Base';
import AddPost from '../../components/AddPost';
import { Container } from 'reactstrap';

const AddBuySell = () => {

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
          <AddPost />
        </Container>
      </div>
    </Base>
  )
}

export default AddBuySell;



// {/* ei part <Base> er por chilo.
// <div>
//   <Container>
//    <AddPost/>
//    </Container>
//     </div>
//  */}
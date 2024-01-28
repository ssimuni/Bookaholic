import React, { useEffect, useState } from 'react'
import { getBorrowPosts } from '../services/user-service';
import { Col, Row, Button, Container } from 'reactstrap';
import PostBorrow from './PostBorrow';
function MarketPlaceBorrow() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    //load all the borrow posts from server
    getBorrowPosts().then((response) => {
      console.log(response);
      setPosts(response);
    }).catch((error) => {
      console.log(error);
    })
  }, [])
  return (
    posts ? (
      <Container style={{ marginTop: '80px' }}>
        <Row >
          <Col md={{ size: 10, offset: 1 }}>
            <h1 style={{ color: 'white' }}>Borrowable Books</h1>
            <Button color='primary' href="/user/addborrow">Add Books to Give for Borrow</Button>
            {
              posts.map((post) => {
                return <PostBorrow post={post} key={post.bid} />
              })

            }
          </Col>
        </Row>
      </Container>
    ) : "Loading..."

  )
}

export default MarketPlaceBorrow;
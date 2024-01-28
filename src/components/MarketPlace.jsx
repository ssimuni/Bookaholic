import React, { useEffect, useState } from 'react'
import { getBuyPosts } from '../services/user-service';
import { Button, Col, Container, Row } from 'reactstrap';
import Post from './Post';
function MarketPlace() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    //load all the sell posts from server
    getBuyPosts().then((response) => {
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
            <h1 style={{ color: '#2B2A4C', position: 'relative' }}>Books For Sell</h1>
            <Button color='primary' href="/user/addsell" style={{ background: '#CD5C08', color: 'white', border: 'none', position: 'relative' }}>Add Books for Sell</Button>
            {
              posts.map((post) => {
                return <Post post={post} key={post.bid} />
              })
            }
          </Col>
        </Row>
      </Container>
    ) : "Loading..."

  )
}

export default MarketPlace;
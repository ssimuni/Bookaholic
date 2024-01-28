import React from 'react'
import { Button, Card, CardBody, CardText, Badge } from 'reactstrap'

function Post({ post = { b_title: "This is default post title", b_authorname: "Author", b_edition: "Edition", bid: "Identity code", b_numOfPages: "number", b_price: "unknown", b_description: "This is default post description", image: "Image of book" } }) {
  return (
    <Card className='border-1 shadow-lg my-3'
      style={{
        background: 'linear-gradient(rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)', // Transparent gradient
        backdropFilter: 'blur(5px) brightness(1.1) hue-rotate(5deg) saturate(0.9)', // Adjusted blur and saturation
        border: '1px solid rgba(200, 200, 200, 0.1)', // Light border
        boxShadow: '0px 50% ${blur(normal)} ${inset}',
      }}>
      <CardBody>
        <h4>
          <Badge color="info" >

          </Badge>
        </h4>
        <h1>
          {post.b_title}
        </h1>
        <h4>
          By {post.b_authorname}
        </h4>
        <h5>
          {post.b_edition} Edition   ||  Number of Pages: {post.b_numOfPages}
        </h5>
        <h6>
          Book ID: {post.bid}
        </h6>
        <h5>
          <Badge color="#FF7518" style={{ background: '#CD5C08', color: 'white', border: 'none' }}>
            Tk. {post.b_price}
          </Badge>
        </h5>
        <CardText>
          {post.b_description}...
        </CardText>
        <img
          src={post.image} // Assuming the image path is provided by the backend
          className='image'
          alt={post.b_title}
          style={{
            height: 'auto',
            marginTop: '10px',
            marginLeft: '100px'
          }}
        />
        <div className='text-center'>
          <Button href="/user/orderplace" style={{ background: '#CD5C08', color: 'white', border: 'none' }}>Buy</Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default Post;
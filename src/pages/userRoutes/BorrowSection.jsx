import React from 'react'
import Base from '../../components/Base';
import { Container, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import MarketPlaceBorrow from '../../components/MarketPlaceBorrow';
const BorrowSection = () => {

  return (
    <Base>
      <div
        style={{
          backgroundImage: "url('../image/background6.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Container>
          <MarketPlaceBorrow />
        </Container>
      </div>
      <Container className="d-flex justify-content-center my-4">
        <Pagination >
          <PaginationItem>
            <PaginationLink previous>
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next>
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </Container>
    </Base>
  )
}

export default BorrowSection;
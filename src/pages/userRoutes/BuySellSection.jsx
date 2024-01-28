import React from 'react'
import Base from '../../components/Base';
import { Container, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import MarketPlace from '../../components/MarketPlace';
const BuySellSection = () => {

  return (
    <Base>
      <div
        style={{
          height: '120vh',
          background: '#F5F5F5',
          marginTop: '0px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Container>
          <MarketPlace />
        </Container>
      </div>
      <Pagination style={{

        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
      }}>
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
    </Base>
  )
}

export default BuySellSection;

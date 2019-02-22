import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr;
  margin: 0 auto;
  max-width: 560px;
  min-height: 100vh;
  padding: 40px;

  & > * {
    justify-self: center;
  }
`

export default ({ children }) => (
  <Container>
    {children}
  </Container>
)

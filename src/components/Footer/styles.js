import styled from 'styled-components'
import Twitter from '../Icons/Twitter'

export const FooterComponent = styled.div`
  background-color:green;
`

export const StyledTwitter = styled(Twitter)`
    opacity:0.5;
    transition: opacity 200ms ease;

    &:hover{
      opacity:1;
    }
`
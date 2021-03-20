import React from 'react'
import * as S from './styles'

import  Link  from '../Link/Link'



const twitter = 'https://twitter.com/gnikoglou79'



const FooterComponent = () => {
  return (
    <S.FooterComponent>
      <h1> Footer </h1>
      <Link el='a' to ={twitter}>
        <S.StyledTwitter />
      </Link>
    </S.FooterComponent>
  )
}

export default FooterComponent

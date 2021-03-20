import { css , createGlobalStyle } from 'styled-components'
import 'focus-visible'

import * as BreakPoints from './BreakPoints'
import * as Colors from './Colors'

const sansSerifFallback = "'-apple-system' , 'BlinkMacSystemFont', 'Roboto', 'sans-serif'"
export const fontFamily = `'Quasimoda', ${sansSerifFallback}`

export const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700
}

export const body = css `
  font-size: 14px;

  @media(min-width: ${BreakPoints.mobile}) {
    font-size: 16px;
  }
`

export const body10 = css `
  font-size:16px;
  line-height:30px;
  font-weight: ${fontWeights.medium};

  @media(min-width: ${BreakPoints.mobile}) {
    font-size:18px;
    line-height:34px;
  }
`

export const header1 = css `
  font-size: 50px;
  line-height:152%;
  font-weight: ${fontWeights.bold};

  @media(max-width: ${BreakPoints.mobile}) {
    font-size: 28px;
    line-height: 122%;
  }
`

export const header2 = css `
  font-size: 1.6em;
  font-weight: ${fontWeights.bold};
  margin:0;
`

export const header3 = css `
  font-size: 24px;
  line-height: 152%;
  font-weight: ${fontWeights.bold};
  margin:0;

  @media(max-width: ${BreakPoints.mobile}) {
    font-size:20px;
    line-height: 138%;
  }
  
`

export const header4 = css `
  font-size: 24px;
  line-height: 152%;
  font-weight: ${fontWeights.medium};
  margin:0;

  @media(max-width: ${BreakPoints.mobile}) {
    font-size:20px;
    line-height: 138%;
  }
`

export const capsTitle = css `
  font-weight: ${fontWeights.medium};
  font-size: 14px;
  letter-spacing: 0.14em;
  text-transform: uppercase;

  @media(min-width: ${BreakPoints.mobile}) {
    font-size: 17px;
    letter-spacing: 0.18em;
  }
`


export const GlobalType = createGlobalStyle `
  body {
    ${body};
    font-family: ${fontFamily};
  }

  h1 {
    ${header1};
  }

  h2 {
    ${header2};
  }

  h3 {
    ${header3};
  }

  h4 {
    ${header4};
  }

  p {
    margin:0;
  }

  a {
    transition: all 300ms ease;
    color: ${Colors.text};
    cursor:pointer;
    text-decoration:none;

    &:hover {
      color: ${Colors.text};
    }

    &:focus {
      outline:none;
      box-shadow: 0 0 0 2px ${Colors.text};
      border-radius: 4px;
    }

    &:focus::not(.focus-visible) {
      outline:none;
      box-shadow:none;
    }
  }
`

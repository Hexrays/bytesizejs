import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import { scale } from "../utils/typography"

const headlineBase = {
  marginBottom: 0,
  marginTop: 0,
}

const H3 = styled.h3({ ...headlineBase })
const H1 = styled.h1({ ...headlineBase, ...scale(1) })

const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #000;
  height: 48px;
`

const StyledLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: #fff;
  padding-left: 1rem;

  &:hover {
    color: #fff;
  }
`

const SiteHeader = ({ isRoot, title }) => {
  let contents

  if (isRoot) {
    contents = (
      <H1>
        <StyledLink to={`/`}>{title}</StyledLink>
      </H1>
    )
  } else {
    contents = (
      <H3>
        <StyledLink to={`/`}>{title}</StyledLink>
      </H3>
    )
  }
  return <Header>{contents}</Header>
}

export default SiteHeader

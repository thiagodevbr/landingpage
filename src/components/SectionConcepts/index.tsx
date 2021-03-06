import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { SectionConceptsProps } from 'types/api'

const SectionConcepts = ({ title, conceptsItems }: SectionConceptsProps) => {
  console.log(conceptsItems)
  return (
    <Container>
      <S.Box>
        <Heading lineBottom>{title}</Heading>
        <S.List>
          {conceptsItems.map((item) => (
            <S.Item key={item.text}>{item.text}</S.Item>
          ))}
        </S.List>
      </S.Box>
    </Container>
  )
}

export default SectionConcepts

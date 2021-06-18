import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { TechSection } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionTech = ({ title, techIcons }: TechSection) => {
  console.log(techIcons)
  return (
    <S.Wrapper>
      <Container>
        <Heading reverseColor>{title}</Heading>
        <S.IconsContainer>
          {techIcons.map(({ title, icon }) => (
            <S.Icon key={title}>
              <S.Icons
                src={getImageUrl(icon.url)}
                alt={icon.alternativeText}
                loading="lazy"
              />
              <S.IconsName>{title}</S.IconsName>
            </S.Icon>
          ))}
        </S.IconsContainer>
      </Container>
    </S.Wrapper>
  )
}

export default SectionTech

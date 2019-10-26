import React from "react"

import Logo from "../Logo"
import * as S from "./styled"

const HomeContents = () => (
  <S.HomeContentWrapper>
    <S.HomeContentTitle>Quem Somos</S.HomeContentTitle>
    <S.HomeContentDescription>
      <p>
        Empresa criada em 2010 com o propósito inicial de fornecer consultoria e
        treinamento para usuários em ERP de terceiros (Winthor, Jetdata e
        Protheus/Totvs), elaboração de manuais operacionais e suporte técnico,
        remoto ou presencial.
      </p>
    </S.HomeContentDescription>
    <S.HomeContentDescription>
      <p>
        Neste ano de 2019 ampliou suas atividades para desenvolvimento de
        websites para pequenas empresas e profissionais autônomos, além de
        tornar-se representante comercial certificado do ERP Solution 3, do
        Grupo CyberSul.
      </p>
    </S.HomeContentDescription>
    <S.HomeContentDescription>
      <p>
        Anderson Rocha é seu criador: com graduação em Análise e Desenvolvimento
        de Sistemas pela UNCISAL, participa, constantemente, de cursos e
        treinamentos na área de Tecnologia da Informação, além de possuir
        conhecimentos e habilidades em gestão de pessoas.
      </p>
    </S.HomeContentDescription>
    <S.HomeContentLinks>
      <S.HomeContentLinksList>
        <S.HomeContentLinksItem>
          <S.HomeContentLinksImage>
            <Logo />
          </S.HomeContentLinksImage>
        </S.HomeContentLinksItem>
      </S.HomeContentLinksList>
    </S.HomeContentLinks>
  </S.HomeContentWrapper>
)

export default HomeContents

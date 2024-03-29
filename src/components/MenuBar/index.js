import React, { useState, useEffect } from "react"

import { Home } from "styled-icons/icomoon/Home"
import { Search } from "styled-icons/icomoon/Search"
import { Palette } from "styled-icons/boxicons-solid/Palette"
import { ArrowUp2 as Arrow } from "styled-icons/icomoon/ArrowUp2"
import { Grid } from "styled-icons/boxicons-solid/Grid"
import { List } from "styled-icons/icomoon/List"

import * as S from "./styled"
import SocialLinks from "../SocialLinks"

const MenuBar = () => {
  const [display, setDisplay] = useState(null)
  const isListMode = display === "grid"

  useEffect(() => {
    setDisplay(window.__display)

    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarWrapper>
        <S.MenuBarGroup>
          <S.MenuBarLink to="/" title="Voltar para página inicial">
            <S.MenuBarItem>
              <Home />
            </S.MenuBarItem>
          </S.MenuBarLink>
          <S.MenuBarLink to="/search/" title="Pesquisar no site">
            <S.MenuBarItem>
              <Search />
            </S.MenuBarItem>
          </S.MenuBarLink>
        </S.MenuBarGroup>
        <S.MenuBarGroup>
          <SocialLinks />
        </S.MenuBarGroup>
        <S.MenuBarGroup>
          <S.MenuBarItem title="Mudar a cor">
            <Palette />
          </S.MenuBarItem>
          <S.MenuBarItem
            title="Mudar apresentação dos itens"
            onClick={() => {
              window.__setPreferredDisplay(isListMode ? "grid" : "list")
            }}
            className="display"
          >
            {isListMode ? <Grid /> : <List />}
          </S.MenuBarItem>
          <S.MenuBarItem title="Ir para o topo">
            <Arrow />
          </S.MenuBarItem>
        </S.MenuBarGroup>
      </S.MenuBarWrapper>
    </S.MenuBarWrapper>
  )
}

export default MenuBar

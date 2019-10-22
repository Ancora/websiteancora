import React from "react"
import Company from "../Company"
/* import SocialLinks from "../SocialLinks" */
import MenuLinks from "../MenuLinks"

import * as S from "./styled"

const Sidebar = () => (
  <S.SidebarWrapper>
    <Company />
    {/* <SocialLinks /> */}
    <MenuLinks />
  </S.SidebarWrapper>
)

export default Sidebar

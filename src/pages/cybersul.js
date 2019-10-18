import React from "react"
import { Link } from "gatsby"

const CybersulPage = () => (
  <>
    <h1>CyberSul</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services">Nossos Serviços</Link>
      </li>
      <li>
        <Link to="/cybersul" activeStyle={{ color: "red" }}>
          ERP Solution 3
        </Link>
      </li>
      <li>
        <Link to="/contact">Fale Conosco</Link>
      </li>
    </ul>
  </>
)

export default CybersulPage

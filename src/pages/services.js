import React from "react"
import { Link } from "gatsby"

const ServicesPage = () => (
  <>
    <h1>Nossos Serviços</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services" activeStyle={{ color: "red" }}>
          Nossos Serviços
        </Link>
      </li>
      <li>
        <Link to="/cybersul">ERP Solution 3</Link>
      </li>
      <li>
        <Link to="/contact">Fale Conosco</Link>
      </li>
    </ul>
  </>
)
export default ServicesPage

import React from "react"
import { Link } from "gatsby"

const ContactPage = () => (
  <>
    <h1>Fale Conosco</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services">Nossos Serviços</Link>
      </li>
      <li>
        <Link to="/cybersul">ERP Solution 3</Link>
      </li>
      <li>
        <Link to="/contact" activeStyle={{ color: "red" }}>
          Fale Conosco
        </Link>
      </li>
    </ul>
  </>
)

export default ContactPage

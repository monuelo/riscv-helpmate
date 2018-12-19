import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Materiais" />
    <div>
    <ul className="materials">
      <li>
        <Link to="/gnu-toolchain">RISC-V GNU Toolchain (Guia de Instalação)</Link>
      </li>
      <li>
        <Link to="/spike">Simulador Spike (Guia de Instalação)</Link>
      </li>
      <li>
          <a href="https://riscv.org/" rel="noopener noreferrer" target="_blank">Site RISC-V Foundation</a>
      </li>
      {/* <li>
        <Link to="/spike">Simulador Spike (Guia de Instalação)</Link>
      </li> */}
    </ul>
    </div>
  </Layout>
)

export default SecondPage

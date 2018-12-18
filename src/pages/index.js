import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="RISC-V" keywords={['riscv', 'application', 'react', 'compiler']} />
    <h1>O que é o RISC-V?</h1>
    <p>
      RISC-V é um conjunto de instruções(ISA) baseado e estabelecido nos princípios RISC
      (acrônimo de Reduced instruction set computing,em português, “Computação de conjunto de instruções reduzida”).
      <br />
      O projeto começou em 2010 na Universidade da Califórnia, em Berkeley, mas muitos colaboradores são voluntários ou fazem parte de outra empresas e trabalham no projeto de fora da universidade.
      <br />
      O RISC-V foi projetado para implementações de alto desempenho e baixo consumo de energia. Sendo um conjunto limpo e modular, trabalhando com bases de 32, 64 e 128 bits, com várias opções de extensão em ponto flutuante.
    </p>
    <p className="ref">Fonte: Wikipédia</p>
  </Layout>
)

export default IndexPage

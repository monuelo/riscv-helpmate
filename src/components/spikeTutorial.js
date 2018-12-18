import React from 'react';

const SpikeTutorial = () => (
    <div>
        <h2>Simulador Spike (Guia de Instalação)</h2>
        <h4>Etapa 1: Instalar o RISC-V Frontend Server</h4>
        <ol className="tutorial">
            <li>Clone o repositório <strong>riscv-fesvr</strong> (RISC-V Frontend Server).
                <code>
                    git clone https://github.com/riscv/riscv-fesvr.git
                </code>
            </li>
            <li>
                Em seguida, entre no repositório clonado.
                <code>
                    cd riscv-fesvr
                </code>
            </li>
            <li>
                Crie a uma pasta chamada build e entre nela.
                <code>
                    mkdir build && cd build
                </code>
            </li>
            <li>
                Dentro da pasta o seguinte comando de configuração.
                <code>
                    ../configure --prefix=$RISCV --target=riscv64-unknown-elf
                </code>
            </li>
            <li>
                Para finalizar a primeira etapa...
                <code>
                    make install
                </code>
            </li>
        </ol>
        <h4>Etapa 2: Instalar o Spike RISC-V ISA Simulator</h4>
        <ol className="tutorial">
            <li>Clone o repositório <strong>riscv-fesvr</strong> (RISC-V Frontend Server).
                <code>
                    git clone https://github.com/riscv/riscv-isa-sim.git
                </code>
            </li>
            <li>Instale o pacote device-tree compiler.
                <code>
                    apt-get install device-tree-compiler
                </code>
            </li>
            <li>
                Entre no repositório clonado.
                <code>
                    cd riscv-isa-sim
                </code>
            </li>
            <li>
                Em seguida, entre no repositório clonado.
                <code>
                    cd riscv-isa-sim
                </code>
            </li>
            <li>
                Crie a uma pasta chamada build e entre nela.
                <code>
                    mkdir build && cd build
                </code>
            </li>
            <li>
                Dentro da pasta o seguinte comando de configuração.
                <code>
                    ../configure --prefix=$RISCV --target=riscv64-unknown-elf
                </code>
            </li>
            <li>
                Execute estes dois comandos para finalizar.
                <code>
                    make<br/>
                    make install
                </code>
            </li>
        </ol>
    </div>

)

export default SpikeTutorial;
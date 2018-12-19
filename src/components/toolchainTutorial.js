import React from 'react';

const ToolchainTutorial = () => (
    <div>
        <h2>RISC-V GNU Toolchain (Guia de Instalação)</h2>
        <ol className="tutorial">
            <li>Clone o repositório <strong>riscv-gnu-toolchain</strong> juntamente com seus submódulos.
                <code>
                git clone --recursive https://github.com/riscv/riscv-gnu-toolchain
                </code>
            </li>
            <li>
                Instale os pré-requisitos.
                <code>
                [sudo] apt-get install autoconf automake autotools-dev curl libmpc-dev libmpfr-dev libgmp-dev gawk build-essential bison flex texinfo gperf libtool patchutils bc zlib1g-dev libexpat-dev
                </code>
            </li>
            <li>
                Em seguida, entre no repositório clonado.
                <code>
                    cd riscv-gnu-toolchain
                </code>
            </li>
            <li>
                Instale o Toolchain <br/><br/>
                - Instalação para Linux (64-bit)
                <code>
                    ./configure --prefix=/opt/riscv<br/>
                    make linux
                </code>
                - Instalação para Linux (32-bit)
                <code>
                    ./configure --prefix=/opt/riscv --with-arch=rv32gc --with-abi=ilp32d<br/>
                    make linux
                </code>
                - Instalação para Linux (multilib)
                <code>
                    ./configure --prefix=/opt/riscv --enable-multilib<br/>
                    make linux
                </code>
            </li>
        </ol>
    </div>
)

export default ToolchainTutorial;
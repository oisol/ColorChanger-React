import { useState, useEffect } from "react";
import Swal from 'sweetalert2';

function Main() {
    const [color, setColor] = useState("");
    const [hex, setHex] = useState("");
    const [cat, setCat] = useState("");
    const [isShown, setIsShown] = useState('none');

    // api para imagem aleatória de gatos
    fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => {
            setCat(prevCat => (
                `${data.file}`
        ))
    })



    // Atualizar pagina
    useEffect(() => {
        // confere se informações já estão visíveis e muda cor
        if (isShown !== 'none') {
            document.body.style.backgroundColor = `${color}`;
        }
        
    })        
    
    // Converter RGB em HEXADECIMAL
    let Convhex = (r, g ,b) => {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    // Gerar cor aleatória
    function changeColor() {
        
        let n1 = Math.floor((Math.random() * 255) + 1)
        let n2 = Math.floor((Math.random() * 255) + 1)
        let n3 = Math.floor((Math.random() * 255) + 1)
        setHex(Convhex(n1, n2, n3))

        let cor = `rgb(${n1}, ${n2}, ${n3})`;
        setColor(prevColor => (
            `${cor}`
        ))

        // Aparecer card quando for clicado
        setIsShown(hidden => {
            'flex'
        })
    }

    // Funções para copiar cor 
    const copyRbg = () => {
        navigator.clipboard.writeText(color)
        Swal.fire({
            title: 'Sua Cor em RGB Foi Copiada!!',
            imageUrl: `${cat}`,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Carregando Imagem',
            confirmButtonText: "Yayyy"
          })
    }

    const copyHex = () => {
        navigator.clipboard.writeText(hex)
        Swal.fire({
            title: 'Sua Cor em Hexa Foi Copiada!!',
            imageUrl: `${cat}`,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Carregando Imagem',
            confirmButtonText: 'o(≧▽≦)o'
          })
    }

    return (
        <main>
            <div className="main--card">
                <h1 className="main--text">Clique no botão para trocar a cor da tela</h1>
                <button onClick={changeColor} className="main--button">Trocar</button>
                <div className="main--colors" style={{display: isShown}}>
                    <p className="rgb" onClick={copyRbg}>{color}</p>
                    <p className="hex" onClick={copyHex}>{hex}</p>
                </div>
            </div>    
        </main>
    )
}

export default Main;
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { 
    MainContainer, 
    Card, 
    Text, 
    Button, 
    ColorsContainer, 
    Color 
} from "./MainCard.styles";

interface MainCardProps {
    text: string
    btnText: string
}

const MainCard = ({ text, btnText } : MainCardProps ) => {
    
    const [color, setColor] = useState("");
    const [hex, setHex] = useState("");
    const [cat, setCat] = useState("");
    const [isShown, setIsShown] = useState('none');

    useEffect(() => {
        //api para imagem aleatória de gatos
        // Pre-load
        fetch('https://aws.random.cat/meow')
            .then(res => res.json())
            .then(data => {
                setCat(prevCat => (
                    `${data.file}`
                ))
            })
    }, [])        

    useEffect(() => {
        // confere se informações já estão visíveis e muda cor
        if (isShown !== 'none') {
            document.body.style.backgroundColor = `${color}`;
        }
    })

    const newCatImage = () => {
        fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => {
            setCat(prevCat => (
                `${data.file}`
            ))
        })
    }
    
    // Converter RGB em HEXADECIMAL
    let Convhex = (r: number, g: number ,b: number) => {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    // Gerar cor aleatória
    const changeColor = () => {
        
        let n1 = Math.floor((Math.random() * 255) + 1)
        let n2 = Math.floor((Math.random() * 255) + 1)
        let n3 = Math.floor((Math.random() * 255) + 1)
        setHex(Convhex(n1, n2, n3))

        let cor = `rgb(${n1}, ${n2}, ${n3})`;
        setColor(prevColor => (
            `${cor}`
        ))

        // Aparecer card quando for clicado
        setIsShown('flex')
    }

    // Funções para copiar cor 
    const copyRbg = () => {
        newCatImage()
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
        newCatImage()
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
        <MainContainer >
            <Card >

                <Text >{text}</Text>
                <Button onClick={changeColor} >
                    {btnText}
                </Button>

                <ColorsContainer style={{display: isShown}}>
                    <Color onClick={copyRbg}>
                        {color}
                    </Color>
                    <Color onClick={copyHex}>
                        {hex}
                    </Color>
                </ColorsContainer>

            </Card>    
        </MainContainer>
    )
}

export default MainCard;
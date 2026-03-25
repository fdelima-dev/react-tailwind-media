import { useState } from "react";

const Media = () =>{
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);

    const [exibirPagina, setExibirPagina] = useState(false);

    const [resultado, setResultado] = useState('');

    const soma = nota1 + nota2 + nota3;
    const media = soma / 3;

    function calculaMedia(){
        if(media >= 7){
            return(
                <h3 className="text-center text-white text-2xl">Parabéns! Média {media.toFixed(1)}, você está aprovado!</h3>
            )
        } else {
            return(
                <h3 className="text-center text-white text-2xl">Oops! Média {media.toFixed(1)}, você está <strong>REPROVADO</strong>!</h3>
            )
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        setExibirPagina(true);
        setResultado(calculaMedia());
    }

    return(
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit}>
                <h2 className="text-white text-4xl font-bold text-center">Média ∛</h2>
                <h4 className="text-white text-center text-xl">
                    Número 1
                </h4>
                <input type="text" className="block mx-auto" onChange={(e) => setNota1(Number(parseFloat(e.target.value)))} />
                <h4 className="text-white text-center text-xl">
                    Número 2
                </h4>
                <input type="text" className="block mx-auto" onChange={(e) => setNota2(Number(parseFloat(e.target.value)))} />
                <h4 className="text-white text-center text-xl">
                    Número 3
                </h4>
                <input type="text" className="block mx-auto" onChange={(e) => setNota3(Number(parseFloat(e.target.value)))} />
                <br />
                <button type="submit" className="bg-blue-500 rounded p-2 w-[150px] block mx-auto text-white hover:bg-blue-700">Clique aqui</button>
            </form>
            {
                exibirPagina && (
                    <h3 className="text-white text-center font-bold text-2xl mt-4">{resultado}</h3>
                )
            }
        </div>
    )
}

export default Media;
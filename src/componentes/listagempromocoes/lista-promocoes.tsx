import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type PromocoesType = {
    idpromocao:number,
    titulo:string,
    descricao:string,
    validade:Date,
    cupom:string
  }
export default function ListaPromocoes() {
    
    const [promocoes, setPromocoes] = useState<PromocoesType[]>([])
    useEffect(()=>{
        fetch("https://one022b-cacaushow-trabalho-ixsq.onrender.com/promocoes")
        .then(resposta=>resposta.json())
        .then(dados=>setPromocoes(dados))
      },[])
    return (
        <>
          <div className='container-link'>
         <Link to={"/criacao-promocoes"} className="link-bonitao">Promoções</Link>
         <Link to={"/alterar-promocoes"} className="link-bonitao">Alterar Promoções</Link>
         </div>
            {promocoes.map(promo => {
                return (
                    <div key={promo.idpromocao}className='promocoes-item'>
                    <h1>{promo.titulo}</h1>
                    <p>{promo.descricao}</p>
                    <p>{new Date(promo.validade).getDate()+1}/{new Date(promo.validade).getMonth()+1}/{new Date(promo.validade).getFullYear()}</p>
                    <p>{promo.cupom}</p>
                  </div>
                )
            })}
        </>
    )
}
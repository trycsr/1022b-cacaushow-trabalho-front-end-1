import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState, ChangeEvent, useEffect } from "react";
function AlterarCliente(){
    const {id} = useParams()
    useEffect(()=>{
        fetch(`https://one022b-cacaushow-trabalho-ixsq.onrender.com/cliente/${id}`)
        .then(resposta=>resposta.json())
        .then(dados=>{
            setNome(dados.nome)
            setCPF(dados.cpf)
        })
      },[])
      const navigate = useNavigate();
      const [nome,setNome] = useState("")
      const [cpf,setCPF] = useState("")
  
      function handleForm(event:FormEvent){
        event.preventDefault();
        console.log("Tentei alterar os clientes");
        const produto = {
            nome: nome,
            cpf: cpf,
        }
        fetch(`https://one022b-cacaushow-trabalho-ixsq.onrender.com/cliente/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produto)
        }).then(response => {
            if(response.status === 200){
                alert("Cliente alterado com sucesso")
                navigate("/")
            }
            else{
                alert("Erro ao alterar cliente")
            }
        })
    }
    function handleNome(event:ChangeEvent<HTMLInputElement>){
        setNome(event.target.value)
    }
    function handleCPF(event:ChangeEvent<HTMLInputElement>){
        setCPF(event.target.value)
    }

    return(
        <>
        <main>
        <h1>Alterar Cliente</h1>
        <form onSubmit={handleForm}>
            <div>
                <label htmlFor="clienteid">Cliente ID: </label>
                <input type="text" name="clienteId" value={id} readOnly/>
            </div>
            <div>
                <label htmlFor="nome">Nome do Cliente: </label>
                <input type="text" name="nome" value={nome} onChange={handleNome}/>
            </div>
            <div>
                <label htmlFor="cpf">CPF: </label>
                <input type="text" name="cpf" value={cpf} onChange={handleCPF}/>
            </div>
            <div>
                    <input type="submit" value="Alterar"/>
                </div>
        </form>
        </main>
        </>
        
    )
}

export default AlterarCliente;
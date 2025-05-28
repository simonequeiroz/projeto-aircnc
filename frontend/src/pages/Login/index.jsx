
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'   // para navegar entre as paginas, depois que fizer login.
import api from '../../services/api'


export default function Login(){
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(event){
        event.preventDefault();
        const response = await api.post('/sessao/', { email })
        console.log(response.data)
        const { _id } = response.data;

        localStorage.setItem('usuario', _id);


    }


    return(
        <>

          <p>Ofereça <strong>spots/salas</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail *</label>
            <input
                 type="email"
                 id="email"
                 placeholder="Seu melhor e-mail"
                 value={email}
                //  onChange={event => console.log(event.target.value)}
                 onChange={event => setEmail(event.target.value)}
            />
            <button className="btn" type="submit"> Entrar </button>
          </form>


        </>
    )
}

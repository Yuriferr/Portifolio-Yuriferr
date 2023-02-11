import React, {useState} from "react";
import './contact.scss';

import emailJs from '@emailjs/browser'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault();

        if(name === '' || email === '' || message === ''){
            toast.warn("Preencha todos os campos")
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
        }

        emailJs.send("service_x33k5mr", "template_9one42i", templateParams, "BFNSuofu1NxzP53rT").then((response) => {
            toast.success("Email enviado com sucesso")
            setName('')
            setEmail('')
            setMessage('')
        }, (err) => {
            console.log("Erro", err)
        })
    }

    return(
        <div id="contact" className="contact">
            <h1>Contato</h1>

            <form onSubmit={sendEmail}>
                <input type="text" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} value={name}/>

                <input type="text" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} value={email}/>

                <input type="text" placeholder="Digite sua menssagem..." onChange={(e) => setMessage(e.target.value)} value={message}/>

                <button type="submit">Enviar</button>
            </form>
            <ToastContainer />
        </div>
    )
}
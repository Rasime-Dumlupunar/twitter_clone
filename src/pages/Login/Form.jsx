import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../firebase';
import ResetButton from './ResetButton';

const Form = () => {
    const [isError, setIsError] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
   

    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignUp){
            // Yeni kullanıcı hesabı oluştur
            createUserWithEmailAndPassword(auth, email, pass)
            .then(() => {
            toast.success("Hesabınız oluşturuldu");
            navigate("/feed")
        })
        .catch((err) => toast.error("HATA!:" + err.code))
        }else {
            // varolan hesaba giriş yap
            signInWithEmailAndPassword(auth, email, pass)
            .then(() => { toast.success("Hesabınıza giriş yapıldı");
            navigate("/feed")
        })
        .catch((err) => {
            toast.error("HATA!:" + err.code);
            if (err.code === "auth/invalid-credential") {
                setIsError(true); 
               }
        });
    }
};

  return (
    <>
    <form onSubmit= {handleSubmit} className='flex flex-col '>
        <label> Email</label>
        <input type='text' className='text-black rounded mt-1 p-2 outline-none
        shadow-lg focus: shadow-[gray]'
        onChange={(e) => setEmail(e.target.value)}/>

        <label> Şifre </label>
        <input type='text'
        required  
        className='text-black rounded mt-1 p-2 outline-none
        shadow-lg focus: shadow-[gray]'
        onChange={(e) => setPass(e.target.value)}/>


        <button className='mt-10 bg-white text-black rounded-full
         p-1 font-bold transition hover: bg-gray-300'> 
         {isSignUp ? "Kayıt Ol" : "Giriş Yap"}
         </button>
    </form>
    <p className='p-5'>
        <span className='text-gray-500'>
         {isSignUp ? "Hesabınız varsa" : "Hesabınız yoksa"} 
         </span>
        <span 
        onClick={() => setIsSignUp(!isSignUp)}
        className='cursor-pointer ms-2 text-blue-500'> 
        {isSignUp ? "Giriş Yapın" : "Kayıt olun"}
        </span>
    </p>

    {isError && <ResetButton email={email}/>}
    </> 
  )
}

export default Form

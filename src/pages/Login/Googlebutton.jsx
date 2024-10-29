import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Googlebutton = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
  
    signInWithPopup(auth, provider) 
    .then(() => {
      toast.success("Oturum açıldı");
      navigate("/feed");
    })
    .catch((err) => toast.err("HATA!: " + err.code))
  };

  return (
    <button 
    onClick={handleLogin} 
    className="bg-white flex items-center py-2 px-10 rounded-full gap-3 transition hover:bg-gray-300 text-black whitespace-wrap "> 
        <img  src="logoo.png" className="h-[20px]"/>
        Google ile Giriş Yap
    </button>
  )
}

export default Googlebutton

import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../../firebase';

const Protected = () => {
    // yetkisi var mı? state'i
    const [isAuth, setIsAuth] = useState();

    // kullanıcının oturum verilerini al
    useEffect(() => {
        // bu method kullanıcı oturumu izler
        onAuthStateChanged(auth, (user) => {
            setIsAuth(user ? true : false);
        }) 
    }, []);

    
    // eğer kullanıcının oturumu kapalıysa logine yönlendir
    if (isAuth === false) {
        return <Navigate to="/" replace />;
    }

    // oturum açıksa alt route'un bileşenini ekrana bas
  return <Outlet/>;
}

export default Protected;


// Navigate Bileşeni 

// Bir bileşenin return satırında yönlendirme yapmamız gerekiyors
//  useNavigate kullanıldığında hata veridği için 
// bu tarz return yönlendirmelerinde Navigate bileşeni kullanırız 
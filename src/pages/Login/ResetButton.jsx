import { sendPasswordResetEmail } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

const ResetButton = ({email}) => {

    // şifre sıfırlama e-postası gönder
    const handleReset = () => {
        sendPasswordResetEmail(auth, email)
        .then(() => toast.info("Şifre sıfırlama e-postası gönderildi.Mailinizi kontrol ediniz.")
    )
    .catch(() => toast.error("Mail gönderilemiyor"))
    };

  return (
    <button onClick={handleReset} className="text-red-500">
        Şifrenizi mi unuttunuz?
    </button>
  );
};

export default ResetButton; 

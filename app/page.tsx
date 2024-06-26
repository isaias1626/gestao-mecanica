"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { User, userLoginService } from '@/app/services/userLoginService';

const Home = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const router = useRouter();
  
  const ValidateLogin = async () => {
    const user: User = {
      email: email,
      password: senha,
    };
    
    try {
      let userData = await userLoginService.ValidateLogin(user);
      if (userData) {
        router.push('/dashboard/home');
      } else {
        router.push('/login');
      }
    } catch (error) {
      router.push('/login');
    }
  };

  useEffect(() => {
    ValidateLogin();
  }, []);

  return (
    <div>
      {/* <Login /> */}
    </div>
  );
};

export default Home;

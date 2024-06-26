"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User, userLoginService } from '../services/userLoginService';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erroLogin, setErroLogin] = useState('');

    const handleLogin = async () => {
        const user: User = {
            email: email,
            password: senha
        };
        try {
            const userData = await userLoginService.ValidateLogin(user);
            if (userData) {
                router.push('/dashboard/home');
            } else {
                setErroLogin('E-mail ou senha inválidos. Por favor, tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao efetuar login:', error);
            setErroLogin('Erro ao efetuar login. Por favor, tente novamente.');
        }
    };
    

    return (
        <section className="h-screen flex justify-center items-center">
        <div className="w-[400px]">
            <div className="mb-4">
            <label className="block mb-2">E-mail:</label>
            <Input
                type="text"
                placeholder="Seu e-mail"
                className="w-full px-3 py-2 border rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="mb-4">
            <label className="block mb-2">Senha:</label>
            <Input
                type="password"
                placeholder="Sua senha"
                className="w-full px-3 py-2 border rounded-md"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />
            </div>
            <div className="mb-4">
            <Button
                className="w-full bg-blue-500 text-white py-2 rounded-md"
                onClick={handleLogin}
            >
                Entrar
            </Button>
            </div>
            {erroLogin && <p className="text-red-500 mb-4">{erroLogin}</p>}
        </div>
        </section>
    );
};


"use client";

import HeaderPage from "@/components/header/header";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const pecasData = [
    { id: 1, nome: 'Amortecedor', numeroLote: 'L1234', precoCusto: 150.00, precoVenda: 250.00, quantidadeEstoque: 10 },
    { id: 2, nome: 'Pastilha de Freio', numeroLote: 'L5678', precoCusto: 50.00, precoVenda: 80.00, quantidadeEstoque: 20 },
    { id: 3, nome: 'Filtro de Óleo', numeroLote: 'L9012', precoCusto: 20.00, precoVenda: 35.00, quantidadeEstoque: 15 },
];

const HomePage = () => {
    const [filtroNome, setFiltroNome] = useState('');
    const filteredPecas = pecasData.filter(peca => peca.nome.toLowerCase().includes(filtroNome.toLowerCase()));


    return ( 
        <div>
            <HeaderPage />
            <div >
            <div className="container mx-auto px-4 py-8">
        <div className="mb-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Lista de Peças Cadastradas</h1>
            <Input
                type="text"
                placeholder="Pesquisar peças por nome..."
                value={filtroNome}
                onChange={(e) => setFiltroNome(e.target.value)}
                className="w-64"
            />
            </div>
            <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome da Peça</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Número do Lote</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preço de Custo</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preço de Venda</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantidade em Estoque</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                {filteredPecas.map(peca => (
                    <tr key={peca.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{peca.nome}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{peca.numeroLote}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{peca.precoCusto}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{peca.precoVenda}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{peca.quantidadeEstoque}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
            </div>
        </div>
    );
}

export default HomePage;
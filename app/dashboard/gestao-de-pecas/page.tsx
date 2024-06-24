import HeaderPage from '@/components/header/header';
import React from 'react';

const Pecas = () => {
    return (
        <div>
            <HeaderPage />
            <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Gestão de Estoque de Peças</h1>
            
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-bold mb-4">Adicionar Nova Peça</h2>
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Nome da Peça</label>
                <input 
                    type="text" 
                    placeholder="Digite o nome da peça"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                </div>
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Número do Lote</label>
                <input 
                    type="text" 
                    placeholder="Digite o número do lote"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Preço de Custo</label>
                    <input 
                    type="number" 
                    placeholder="Digite o preço de custo"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Preço de Venda</label>
                    <input 
                    type="number" 
                    placeholder="Digite o preço de venda"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                </div>
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Quantidade em Estoque</label>
                <input 
                    type="number" 
                    placeholder="Digite a quantidade em estoque"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                </div>
                <button 
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                Adicionar Peça
                </button>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Lista de Peças</h2>
                <ul>
                <li className="mb-4 p-4 border rounded-md">
                    <h3 className="text-xl font-bold">Nome da Peça</h3>
                    <p><strong>Número do Lote:</strong> 123456</p>
                    <p><strong>Preço de Custo:</strong> R$50,00</p>
                    <p><strong>Preço de Venda:</strong> R$100,00</p>
                    <p><strong>Quantidade em Estoque:</strong> 10 unidades</p>
                    <div className="mt-4">
                    <button 
                        className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600 mr-2"
                    >
                        Editar
                    </button>
                    <button 
                        className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                    >
                        Excluir
                    </button>
                    </div>
                </li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Pecas;

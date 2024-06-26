"use client";

import React, { useState, useEffect } from 'react';
import { gestaoPecasService } from '@/app/services/gestaoPecasService';
import { Dialog, DialogTitle } from '@radix-ui/react-dialog';
import { DialogContent, DialogFooter, DialogHeader, DialogTrigger } from '@/components/ui/dialog';

export type Peca = {
    id?: string;
    nomePeca: string;
    numeroLote: string;
    precoCusto: string;
    precoVenda: string;
    quantidadeEstoque: string;
};

const Pecas = () => {
    const [nomePeca, setNomePeca] = useState<string>('');
    const [numeroLote, setNumeroLote] = useState<string>('');
    const [precoCusto, setPrecoCusto] = useState<string>('');
    const [precoVenda, setPrecoVenda] = useState<string>('');
    const [quantidadeEstoque, setQuantidadeEstoque] = useState<string>('');
    const [pecas, setPecas] = useState<Peca[]>([]);
    const [currentPart, setCurrentPart] = useState<Peca | null>(null);

    const [edited_nomePeca, setEditedNomePeca] = useState('');
    const [edited_numeroLote, setEditedNumeroLote] = useState('');
    const [edited_precoCusto, setEditedPrecoCusto] = useState('');
    const [edited_precoVenda, setEditedPrecoVenda] = useState('');
    const [edited_quantidadeEstoque, setEditedQuantidadeEstoque] = useState('');

    const handleNomePecaChange = (e: any) => setEditedNomePeca(e.target.value);
    const handleNumeroLoteChange = (e: any) => setEditedNumeroLote(e.target.value);
    const handlePrecoCustoChange = (e: any) => setEditedPrecoCusto(e.target.value);
    const handlePrecoVendaChange = (e: any) => setEditedPrecoVenda(e.target.value);
    const handleQuantidadeEstoqueChange = (e: any) => setEditedQuantidadeEstoque(e.target.value);

    async function renderParts() {
        const res = await gestaoPecasService.getPecas();
        // const res: Peca[] = [
        //     {
        //         id:'jdchcbvc',
        //         nomePeca: 'Cabo',
        //         numeroLote: "5511",
        //         precoCusto: "54",
        //         precoVenda: "255",
        //         quantidadeEstoque: "2",
        //     }
        // ]
        setPecas(res);
        console.log(res);
    }

    useEffect(() => {
        renderParts();
    }, []);

    const adicionarPeca = async () => {
        const novaPeca: Peca = {
            nomePeca: nomePeca,
            numeroLote: numeroLote,
            precoCusto: precoCusto,
            precoVenda: precoVenda,
            quantidadeEstoque: quantidadeEstoque,
        };
        await gestaoPecasService.createPeca(novaPeca);
        await renderParts();
    };

    const HandleOnClick = (part: Peca) => {
        setCurrentPart(part);
        setEditedNomePeca(part.nomePeca);
        setEditedNumeroLote(part.numeroLote);
        setEditedPrecoCusto(part.precoCusto);
        setEditedPrecoVenda(part.precoVenda);
        setEditedQuantidadeEstoque(part.quantidadeEstoque);
    };

    const handleDelete = async (part: Peca) => {
        if (part.id !== undefined) {
            await gestaoPecasService.deletePecas(part.id)
            await renderParts()
        }
    }

    const editPecas = async () => {
        if (!currentPart) return;

        const data: Peca = {
            id: currentPart.id,
            nomePeca: edited_nomePeca,
            numeroLote: edited_numeroLote,
            precoCusto: edited_precoCusto,
            precoVenda: edited_precoVenda,
            quantidadeEstoque: edited_quantidadeEstoque,
        };
        await gestaoPecasService.updatePeca(data);
        renderParts();
    };

    return (
        <div>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold text-center mb-6">Gestão de Estoque de Peças</h1>

                <div className="bg-white p-4 rounded-lg shadow-md mb-6" id='editarservico'>
                    <h2 className="text-2xl font-bold mb-4">Adicionar nova Peça</h2>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Nome da Peça</label>
                        <input 
                            type="text" 
                            placeholder="Digite o nome da peça"
                            value={nomePeca}
                            onChange={(e) => setNomePeca(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Número do Lote</label>
                        <input 
                            type="number" 
                            placeholder="Digite o número do lote"
                            value={numeroLote}
                            onChange={(e) => setNumeroLote(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Preço de Custo</label>
                            <input 
                                type="number" 
                                placeholder="Digite o preço de custo"
                                value={precoCusto}
                                onChange={(e) => setPrecoCusto(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Preço de Venda</label>
                            <input 
                                type="number" 
                                placeholder="Digite o preço de venda"
                                value={precoVenda}
                                onChange={(e) => setPrecoVenda(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Quantidade em Estoque</label>
                        <input 
                            type="number" 
                            placeholder="Digite a quantidade em estoque"
                            value={quantidadeEstoque}
                            onChange={(e) => setQuantidadeEstoque(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <button 
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                        onClick={adicionarPeca}
                    >
                        Adicionar nova peça
                    </button>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Lista de Peças</h2>
                    <ul>
                        {pecas.map((peca, index) => (
                            <li key={index} className="mb-4 p-4 border rounded-md">
                                <h3 className="text-xl font-bold">{peca.nomePeca}</h3>
                                <p><strong>Número do Lote:</strong> {peca.numeroLote}</p>
                                <p><strong>Preço de Custo:</strong> R${peca.precoCusto}</p>
                                <p><strong>Preço de Venda:</strong> R${peca.precoVenda}</p>
                                <p><strong>Quantidade em Estoque:</strong> {peca.quantidadeEstoque} unidades</p>
                                <div className="mt-4">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button 
                                                className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600 mr-2"
                                                onClick={() => HandleOnClick(peca)}
                                    >
                                        Editar
                                    </button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Editar Peças</DialogTitle>
                                        </DialogHeader>
                                        <DialogFooter className='block'>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">Nome da Peça</label>
                                                <input
                                                    type="text"
                                                    placeholder="Digite o nome da peça"
                                                    value={edited_nomePeca}
                                                    onChange={handleNomePecaChange}
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">Número do Lote</label>
                                                <input
                                                    type="text"
                                                    placeholder="Digite o número do lote"
                                                    value={edited_numeroLote}
                                                    onChange={handleNumeroLoteChange}
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">Preço de Custo</label>
                                                <input
                                                    type="number"
                                                    placeholder="Digite o preço de custo"
                                                    value={edited_precoCusto}
                                                    onChange={handlePrecoCustoChange}
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">Preço de Venda</label>
                                                <input
                                                    type="number"
                                                    placeholder="Digite o preço de venda"
                                                    value={edited_precoVenda}
                                                    onChange={handlePrecoVendaChange}
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">Quantidade em Estoque</label>
                                                <input
                                                    type="number"
                                                    placeholder="Digite a quantidade em estoque"
                                                    value={edited_quantidadeEstoque}
                                                    onChange={handleQuantidadeEstoqueChange}
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                            </div>
                                            <button
                                                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                                                onClick={editPecas}
                                            >
                                                Salvar Alterações
                                            </button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                                    <button 
                                        className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                                        onClick={() => handleDelete(peca)}
                                    >
                                        Excluir
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Pecas;
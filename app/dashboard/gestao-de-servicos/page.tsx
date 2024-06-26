"use client";

import { gestaoService } from "@/app/services/gestaoService";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";

export type Servicos = {
    id?: string,
    nameService: string,
    description: string,
    price: string,
    time: string,
}

const CadastroDeServiços = () => {
    const [nameService, setNameService] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [time, setTime] = useState<string>('');
    const [servicos, setServicos] = useState<Servicos[]>([]);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [currentPart, setCurrentPart] = useState<Servicos | null>(null);

    const [edited_nomeServico, setEditedNomeServico] = useState('');
    const [edited_description, setEditedDescription] = useState('');
    const [edited_preco, setEditedPreco] = useState('');
    const [edited_time, setEditedTime] = useState('');

    const handleNomeServicoChange = (e: any) => setEditedNomeServico(e.target.value);
    const handleDescriptionChange = (e: any) => setEditedDescription(e.target.value);
    const handlePrecoChange = (e: any) => setEditedPreco(e.target.value);
    const handleTimeChange = (e: any) => setEditedTime(e.target.value);

    async function renderParts() {
        const res = await gestaoService.getServicos();
        // const res: Servicos[] = [
        //     {
        //         id:'jdchcbvc',
        //         nameService: 'Cabo',
        //         description: "5511",
        //         price: "54",
        //         time: "255",
        //     }
        // ]
        setServicos(res);
        console.log(res);
    }

    useEffect(() => {
        renderParts();
    }, []);

    const adicionarServico = async () => {
        const novoServico: Servicos = {
            nameService: nameService,
            description: description,
            price: price,
            time: time,
        };
        await gestaoService.createServicos(novoServico);
        await renderParts();
    };

    const HandleOnClick = (part: Servicos) => {
        setCurrentPart(part);
        setEditedNomeServico(part.nameService);
        setEditedDescription(part.description);
        setEditedPreco(part.price);
        setEditedTime(part.time);
    };

    const handleDelete = async (part: Servicos) => {
        if (part.id !== undefined) {
            await gestaoService.deleteServicos(part.id)
            await renderParts()
        }
    }

    const editServicos = async () => {
        if (!currentPart) return;

        const data: Servicos = {
            id: currentPart.id,
            nameService: edited_nomeServico,
            description: edited_description,
            price: edited_preco,
            time: edited_time,
        };
        await gestaoService.updateServicos(data);
        renderParts();
    };

    return (
        <div>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold text-center mb-6">Gestão de Serviços</h1>
            
                <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                    <h2 className="text-2xl font-bold mb-4 ">Adicionar Serviço</h2>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Nome do Serviço</label>
                        <input
                            onChange={(e) => setNameService(e.target.value)}
                            value={nameService}
                            type="text"
                            placeholder="Digite o nome do serviço"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Descrição</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Digite a descrição do serviço"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Preço</label>
                        <input
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            type="number"
                            placeholder="Digite o preço do serviço"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Duração Estimada</label>
                        <input
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            type="time"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <button
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                        onClick={adicionarServico}
                    >
                        Adicionar Serviço
                    </button>
                </div>
            
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Lista de Serviços</h2>
                    <ul>
                        {servicos.map((servico, index) => (
                            <li key={index} className="mb-4 p-4 border rounded-md">
                                <h3 className="text-xl font-bold">{servico.nameService}</h3>
                                <p> {servico.description} </p>
                                <p><strong>Preço:</strong> {servico.price} </p>
                                <p><strong>Duração:</strong> {servico.time} </p>
                                <div className="mt-4">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <button
                                                onClick={() => HandleOnClick(servico)}
                                                className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600 mr-2"
                                            >
                                                Editar
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Editar serviço</DialogTitle>
                                            </DialogHeader>
                                            <DialogFooter className="block">
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">Nome do Serviço</label>
                                                <input
                                                    onChange={handleNomeServicoChange}
                                                    value={edited_nomeServico}
                                                    type="text"
                                                    placeholder="Digite o nome do serviço"
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">Descrição</label>
                                                <textarea
                                                    value={edited_description}
                                                    onChange={handleDescriptionChange}
                                                    placeholder="Digite a descrição do serviço"
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">Preço</label>
                                                <input
                                                    value={edited_preco}
                                                    onChange={handlePrecoChange}
                                                    type="number"
                                                    placeholder="Digite o preço do serviço"
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">Duração Estimada</label>
                                                <input
                                                    value={edited_time}
                                                    onChange={handleTimeChange}
                                                    type="time"
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                            </div>
                                            <button
                                                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                                                onClick={editServicos}
                                            >
                                                Salvar alterações
                                            </button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                    <button
                                        onClick={() => handleDelete(servico)}
                                        className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
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
}

export default CadastroDeServiços;
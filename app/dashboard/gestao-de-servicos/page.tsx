import HeaderPage from "@/components/header/header";

const CadastroDeServiços = () => {
    return ( 
        <div>
            <HeaderPage />
            <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Gestão de Serviços</h1>
            
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-bold mb-4">Adicionar Novo Serviço</h2>
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Nome do Serviço</label>
                <input 
                    type="text" 
                    placeholder="Digite o nome do serviço"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                </div>
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Descrição</label>
                <textarea 
                    placeholder="Digite a descrição do serviço"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                </div>
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Preço</label>
                <input 
                    type="number" 
                    placeholder="Digite o preço do serviço"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                </div>
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Duração Estimada</label>
                <input 
                    type="time" 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                </div>
                <button 
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                Adicionar Serviço
                </button>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Lista de Serviços</h2>
                <ul>
                <li className="mb-4 p-4 border rounded-md">
                    <h3 className="text-xl font-bold">Nome do Serviço</h3>
                    <p>Descrição do serviço...</p>
                    <p><strong>Preço:</strong> R$100,00</p>
                    <p><strong>Duração:</strong> 01:00</p>
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
}

export default CadastroDeServiços;
import Link from "next/link";

const HeaderPage = () => {
    return ( 
        <div>
            <section className="bg-blue-400 mb-10">
            <main className="flex space-x-4 justify-end text-lg text-white py-6 pr-8">
                <Link className="hover:text-slate-200" href={"/dashboard"}>Dashboard</Link>
                <Link className="hover:text-slate-200" href={"/dashboard/gestao-de-servicos"}>Gestão de Serviços</Link>
                <Link className="hover:text-slate-200" href={"/dashboard/gestao-de-pecas"}>Gestão de Peças</Link>
                <Link className="hover:text-slate-200" href={"/dashboard/historico"}>Histórico de Manutenções</Link>
                <Link className="hover:text-slate-200" href={"#"}>Configurações</Link>
            </main>
            </section>
        </div>
    );
}

export default HeaderPage;
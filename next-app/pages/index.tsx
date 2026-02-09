import Link from 'next/link';

export default function Home() {
  return (
    <main className=" bg-green-950">
      <h1 className="text-3xl font-bold">Bem-vindo ao Next.js seu arrombado</h1>
      <p>Aplicação criada pelo assistente.</p>
      <p><Link href="/about">Sobre</Link></p>
    </main>
  );
}

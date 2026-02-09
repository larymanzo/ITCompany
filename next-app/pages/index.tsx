import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Bem-vindo ao Next.js</h1>
      <p>Aplicação criada pelo assistente.</p>
      <p><Link href="/about">Sobre</Link></p>
    </main>
  );
}

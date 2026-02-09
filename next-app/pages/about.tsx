import Link from 'next/link';

export default function About() {
  return (
    <main>
      <h1>Sobre</h1>
      <p>Esta é a página About.</p>
      <p><Link href="/">Voltar</Link></p>
    </main>
  );
}

export default function Home() {
    const buttonHead = 'hover:text-emerald-700 hover:bg-white bg-green-700 rounded-2xl p-4 text-white'
  return (
    <div >
        <image className={buttonHead}>IMAGEM</image>
        <button className={buttonHead}>Unidades de negócio</button>
        <button className={buttonHead}>Produtos</button>
        <button className={buttonHead}>Segmentos</button>
        <button className={buttonHead}>Sobre</button>
    </div>
  );
}

import Link from "next/link";
import Home from ".";

export default function Header() {
  const buttonHead = 'p-4 text-black';
  const buttonHover = "block px-4 py-2 hover:bg-blue-500";
  const buttonHoverActive = "absolute mt-2 w-56 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible focus-within:opacity-100 focus-within:visible duration-150 z-10";

  return (
    <div className="p-8">

      <div className="flex gap-4 ">
      <Link href="/" className={buttonHead}>IMAGEM</Link>
        <div className="relative inline-block group">
          <button className={buttonHead}>Unidades de negócio</button>
          <div
            className={buttonHoverActive}
            role="menu"
          >
            <a className={buttonHover} href="#">Opção A</a>
            <a className={buttonHover} href="#">Opção B</a>
            <a className={buttonHover} href="#">Opção C</a>
          </div>
        </div>
        <div className="relative inline-block group">
          <button className={buttonHead}>Produtos</button>
          <div
            className={buttonHoverActive}
            role="menu"
          >
            <a className={buttonHover} href="#">Opção A</a>
            <a className={buttonHover} href="#">Opção B</a>
            <a className={buttonHover} href="#">Opção C</a>
          </div>
        </div>
        <div className="relative inline-block group">
          <button className={buttonHead}>Segmentos</button>
          <div
            className={buttonHoverActive}
            role="menu"
          >
            <a className={buttonHover} href="#">Opção A</a>
            <a className={buttonHover} href="#">Opção B</a>
            <a className={buttonHover} href="#">Opção C</a>
          </div>
        </div>
        <div className="relative inline-block group">
          <button className={buttonHead}>Sobre</button>
          <div
            className={buttonHoverActive}
            role="menu"
          >
            <a className={buttonHover} href="#">Opção A</a>
            <a className={buttonHover} href="#">Opção B</a>
            <a className={buttonHover} href="#">Opção C</a>
          </div>
        </div>
      </div>
    </div>
  );
}
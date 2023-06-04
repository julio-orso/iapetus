import Image from 'next/image'
import styles from './styles.module.scss'
interface IProps {
  listServices?: any
  desDiagram?: boolean
  desCalculator?: boolean
  desPersonalCard?: boolean
}
export function ListServices({
  desDiagram,
  listServices,
  desCalculator,
  desPersonalCard,
}: IProps) {
  return (
    <div
      className={`${styles.services}  ${
        listServices && styles.listServices
      } container`}
    >
      <div>
        <span>
          <Image
            src="/calculator.svg"
            alt="Calculator"
            width={32}
            height={32}
          />
        </span>
        <h3>Contábil</h3>
        {desCalculator && (
          <ul>
            <li>Lucro Real</li>
            <li>Lucro Presumido</li>
            <li>Simples Nacional</li>
            <li>MEI</li>
            <li>Balancetes</li>
            <li>Razão Analítico</li>
            <li>Diário</li>
            <li>Livro Caixa</li>
          </ul>
        )}
      </div>
      <div>
        <span>
          <Image src="/diagram.svg" alt="Diagram" width={32} height={32} />
        </span>
        <h3>Fiscal</h3>
        {desDiagram && (
          <ul>
            <li>Livro de Entrada</li>
            <li>Livro de Saída</li>
            <li>Livro de Apuração do IPI</li>
            <li>Livros de Apuração de ICMS</li>
            <li>ISS</li>
          </ul>
        )}
      </div>
      <div>
        <span>
          <Image
            src="/personalCard.svg"
            alt="Personal Card"
            width={32}
            height={32}
          />
        </span>
        <h3>Trabalhista</h3>
        {desPersonalCard && (
          <ul>
            <li>Apontamentos</li>
            <li>Folha de Pagamento</li>
            <li>GPS</li>
            <li>DIRPF</li>
            <li>SEFIP</li>
            <li>DARF</li>
          </ul>
        )}
      </div>
    </div>
  )
}

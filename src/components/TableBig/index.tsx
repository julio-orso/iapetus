import TableTr from '../TableTr'
export function TableBig() {
  return (
    <table style={{ marginTop: '3rem' }}>
      <thead>
        <tr>
          <th>Imposto</th>
          <th>Situação</th>
          <th>Recolhimento</th>
          <th>Se data vencimento não for dia útil</th>
        </tr>
      </thead>
      <tbody>
        <TableTr
          td1="Simples Nacional"
          td2="Normal"
          td3="Até o dia 20"
          td4="Posterga para o 1º dia útil"
        />
        <TableTr
          td1="INSS"
          td2="Normal"
          td3="Até o dia 20"
          td4="Antecipa para o 1º dia útil"
        />
        <TableTr
          td1="INSS"
          td2="Pessoa Física (individual, facultativo e segurado especial)"
          td3="Até o dia 15"
          td4="Posterga para o 1º dia útil"
        />
        <TableTr
          td1="INSS"
          td2="Emprego Doméstico"
          td3="Até o dia 07"
          td4="Posterga para o 1º dia útil"
        />
        <TableTr
          td1="IPI"
          td2="Normal"
          td3="Até o dia 25"
          td4="Antecipa para o 1º dia útil"
        />
        <TableTr
          td1="Cofins"
          td2="Normal"
          td3="Até o dia 25"
          td4="Antecipa para o 1º dia útil"
        />
        <TableTr
          td1="PIS"
          td2="Normal"
          td3="Até o dia 25"
          td4="Antecipa para o 1º dia útil"
        />
        <TableTr
          td1="CSLL"
          td2="Apuração Trimestral"
          td3="Até o último dia do mês"
          td4="Antecipa para o 1º dia útil"
        />
        <TableTr
          td1="IRPJ"
          td2="Apuração Trimestral"
          td3="Até o último dia do mês"
          td4="Antecipa para o 1º dia útil"
        />
        <TableTr
          td1="IRRF"
          td2="Normal"
          td3="Até o dia 20"
          td4="Antecipa para o 1º dia útil"
        />
        <TableTr
          td1="IRRF"
          td2="Emprego Doméstico"
          td3="Até o dia 07"
          td4="Antecipa para o 1º dia útil"
        />
        <TableTr
          td1="IRRF"
          td2="Rendimentos e ganhos de capital"
          td3="Até o último dia do mês"
          td4="Antecipa para o 1º dia útil"
        />
        <TableTr />
        <TableTr
          td1="ICMS"
          td2="Normal"
          td3="Até o dia 10"
          td4="Antecipa para o 1º dia útil"
        />
        <TableTr
          td1="ICMS/ST"
          td2="ST - Operações Internas"
          td3="Até o dia 10"
          td4="Antecipa para o 1º dia útil"
        />
        <TableTr
          td1="ICMS/ST"
          td2="ST - Entradas de Outros Estados"
          td3="Até o dia 10"
          td4="Antecipa para o 1º dia útil"
        />
        <TableTr
          td1="ICMS/ST"
          td2="ST - Simples Nacional"
          td3="Até o dia 10"
          td4="Antecipa para o 1º dia útil"
        />
        <TableTr
          td1="ICMS"
          td2="ST - Simples Nacional"
          td3="Até o dia 10"
          td4="Antecipa para o 1º dia útil"
        />
        <TableTr />
        <TableTr
          td1="ISS"
          td2="Normal"
          td3="Até o dia 10"
          td4="Antecipa para o 1º dia útil"
        />
      </tbody>
    </table>
  )
}

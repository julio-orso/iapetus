import TableTr3x from '../TableTr3x';
export function TableSmall() {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={3}>
            Obrigações trabalhistas devidas por todas as empresas, data limite
            para efetuar o seu recolhimento
          </th>
        </tr>
        <tr>
          <th>Obrigação</th>
          <th>Recolhimento/entrega</th>
          <th>Se não for dia útil</th>
        </tr>
      </thead>
      <tbody>
        <TableTr3x
          td1="Salários"
          td2="Até o dia 5"
          td3="Antecipa para o 1º dia útil"
        />
        <TableTr3x
          td1="Salários Empregado Doméstico"
          td2="Até o dia 7"
          td3="Posterga para o 1º dia útil"
        />
        <TableTr3x
          td1="FGTS"
          td2="Até o dia 7"
          td3="Antecipa para o 1º dia útil"
        />
        <TableTr3x td1="Férias" td2="Até 2 dias antes do seu início" td3="-" />
        <TableTr3x
          td1="Adiantamento 13º salário"
          td2="Até 30 de novembro"
          td3="Antecipa para o 1º dia útil"
        />
        <TableTr3x
          td1="13º salário"
          td2="Até 20 de novembro"
          td3="Antecipa para o 1º dia útil"
        />
        <TableTr3x
          td1="Caged"
          td2="Até o dia 07"
          td3="Antecipa para o 1º dia útil"
        />
        <TableTr3x
          td1="DIRF"
          td2="Até 28 de novembro"
          td3="Antecipa para o 1º dia útil"
        />
        <TableTr3x
          td1="GPS"
          td2="Até o dia 10"
          td3="Antecipa para o 1º dia útil"
        />
        <TableTr3x
          td1="Contribuição sindical"
          td2="Até 30 de abril"
          td3="Antecipa para o 1º dia útil"
        />
      </tbody>
    </table>
  );
}

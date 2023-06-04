interface IProps {
  td1?: string
  td2?: string
  td3?: string
  td4?: string
}
export default function TableTr({ td1, td2, td3, td4 }: IProps) {
  return (
    <tr>
      <td>{td1}</td>
      <td>{td2}</td>
      <td>{td3}</td>
      <td>{td4}</td>
    </tr>
  )
}

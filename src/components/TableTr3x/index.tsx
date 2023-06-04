interface IProps {
  td1?: string
  td2?: string
  td3?: string
}
export default function TableTr3x({ td1, td2, td3 }: IProps) {
  return (
    <tr>
      <td>{td1}</td>
      <td>{td2}</td>
      <td>{td3}</td>
    </tr>
  )
}

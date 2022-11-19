import { PatientCardProps } from './PatientCard.types'
import { format } from 'date-fns'

export const PatientCard = ({
  name,
  document,
  healthSystemId,
  birthday: rawBirthday,
  insurancePlan,
}: PatientCardProps) => {
  const birthday = format(rawBirthday, 'dd/MM/yyyy')

  return (
    <li>
      <p>
        {name} ({birthday})
      </p>
      <p>
        {document} - {healthSystemId}
      </p>

      <p>{insurancePlan.name}</p>
    </li>
  )
}

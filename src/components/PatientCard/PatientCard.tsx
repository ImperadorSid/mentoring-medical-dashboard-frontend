import { format } from 'date-fns'

import { PatientCardProps } from './PatientCard.types'

export const PatientCard = ({
  name,
  document,
  healthSystemId,
  birthday: rawBirthday,
  insurancePlan,
}: PatientCardProps) => {
  const birthday = format(new Date(rawBirthday), 'dd/MM/yyyy')

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

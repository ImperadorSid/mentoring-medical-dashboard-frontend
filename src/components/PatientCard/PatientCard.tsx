import { format } from 'date-fns'
import { Link } from 'react-router-dom'

import { usePatient } from '../../providers'
import { PatientCardProps } from './PatientCard.types'

export const PatientCard = ({
  id,
  name,
  document,
  healthSystemId,
  birthday: rawBirthday,
  insurancePlan,
}: PatientCardProps) => {
  const birthday = format(new Date(rawBirthday), 'dd/MM/yyyy')
  const { deletePatient } = usePatient()

  return (
    <li>
      <p>
        {name} ({birthday})
      </p>
      <p>
        {document} - {healthSystemId}
      </p>

      <p>{insurancePlan}</p>

      <Link to={`/patients/edit/${id}`}>Edit</Link>
      
      <button onClick={() => deletePatient(id)}>Delete</button>
    </li>
  )
}

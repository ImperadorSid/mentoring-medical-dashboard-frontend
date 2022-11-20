import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { PatientCard } from '../../components'
import { usePatient } from '../../providers'

export const PatientList = () => {
  const { patients, loadPatients } = usePatient()

  useEffect(() => {
    loadPatients()
  }, [loadPatients])

  return (
    <div>
      <h1>Patient List</h1>

      <Link to="/create">Create new patient</Link>

      <ul>
        {patients.map(
          ({ id, name, document, healthSystemId, birthday, insurancePlan }) => (
            <PatientCard
              id={id}
              key={id}
              name={name}
              document={document}
              healthSystemId={healthSystemId}
              birthday={birthday}
              insurancePlan={insurancePlan}
            />
          )
        )}
      </ul>
    </div>
  )
}

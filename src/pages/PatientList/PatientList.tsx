import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { PatientCard } from '../../components'
import { usePatient } from '../../providers'

export const PatientList = () => {
  const { patients, loadPatients } = usePatient()

  useEffect(() => {
    if (patients.length === 0) loadPatients()
  }, [patients, loadPatients])

  return (
    <div>
      <h1>Patient List</h1>

      <ul>
        {patients.map(
          ({ id, name, document, healthSystemId, birthday, insurancePlan }) => (
            <PatientCard
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

      <Link to="/create">Create new patient</Link>
    </div>
  )
}

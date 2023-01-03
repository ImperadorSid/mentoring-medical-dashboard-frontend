import { Link } from 'react-router-dom'

import { usePatient } from '../../providers'
import { PatientForm } from '../../components'
import { PatientFormSubmit } from '../../components/PatientForm/PatientForm.types'

export const CreatePatient = () => {
  const { addPatient } = usePatient()

  const onSubmit: PatientFormSubmit = (data) => {
    const timeString = 'T00:00'
    const localBirthday = new Date(`${data.birthday}${timeString}`)

    addPatient({ ...data, birthday: localBirthday })
  }

  return (
    <div>
      <h1>Create Patient</h1>

      <PatientForm submitFunction={onSubmit} />

      <Link to="/patients">Back to home</Link>
    </div>
  )
}

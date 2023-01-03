import { format } from "date-fns"
import { useMemo } from "react"
import { Link, useParams } from "react-router-dom"

import { PatientForm } from "../../components"
import { PatientFormSubmit } from "../../components/PatientForm/PatientForm.types"
import { usePatient } from "../../providers"

export const EditPatient = () => {
  const { patientId } = useParams()
  const { patients, updatePatient } = usePatient()

  const initialData = useMemo(() => {
    if(!patientId) return undefined
    
    const patient = patients.find(patient => patient.id === patientId)
    if (!patient) return undefined

    const dateString = format(patient.birthday, 'yyyy-MM-dd')

    return {
      ...patient,
      birthday: dateString,
    }

  }, [patients, patientId])

  const onSubmit: PatientFormSubmit = (data) => {
    const timeString = 'T00:00'
    const localBirthday = new Date(`${data.birthday}${timeString}`)

    if (!patientId) return

    updatePatient({ ...data, birthday: localBirthday, id: patientId })
  }

  return (
    <div>
      <h1>Edit Patient</h1>

      <PatientForm initialData={initialData} submitFunction={onSubmit} />

      <Link to="/patients">Back to home</Link>
    </div>
  )
}

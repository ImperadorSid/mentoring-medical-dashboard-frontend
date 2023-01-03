import { SubmitHandler } from 'react-hook-form'

export type PatientFormProps = {
  submitFunction: PatientFormSubmit
  initialData?: PatientFormData
}

export type PatientFormData = {
  name: string
  document: string
  healthSystemId: string
  birthday: string
  insurancePlan: string
}

export type PatientFormSubmit = SubmitHandler<PatientFormData>

import React from 'react'

import { Patient } from '../../types/patient'

export type PatientProviderProps = {
  children: React.ReactNode
}

type PatientParams = {
  name: string
  document: string
  healthSystemId: string
  birthday: Date
  insurancePlan: string
}

export type AddPatientParams = PatientParams

export type EditPatientParams = PatientParams & {
  id: string
}

export type PatientContextData = {
  patients: Patient[]
  loadPatients: () => Promise<void>
  addPatient: (patientData: AddPatientParams) => Promise<void>
  updatePatient: (patientData: EditPatientParams) => Promise<void>
  deletePatient: (id: string) => Promise<void>
}

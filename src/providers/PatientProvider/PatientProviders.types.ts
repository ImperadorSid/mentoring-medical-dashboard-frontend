import React from 'react'

import { Patient } from '../../types/patient'

export type PatientProviderProps = {
  children: React.ReactNode
}

export type AddPatientParms = {
  name: string
  document: string
  healthSystemId: string
  birthday: Date
  insurancePlan: string
}

export type PatientContextData = {
  patients: Patient[]
  loadPatients: () => void
  addPatient: (patientData: AddPatientParms) => void
  deletePatient: (id: string) => void
}

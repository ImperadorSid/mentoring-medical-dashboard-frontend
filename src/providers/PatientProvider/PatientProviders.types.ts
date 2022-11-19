import React from 'react'
import { Patient } from '../../types/patient'

export type PatientProviderProps = {
  children: React.ReactNode
}

export type PatientContextData = {
  patients: Patient[]
  loadPatients: () => void
}

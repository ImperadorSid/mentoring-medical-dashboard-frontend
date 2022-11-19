import { createContext, useContext, useMemo, useState } from 'react'

import { apiService } from '../../services/apiService'
import { Patient } from '../../types/patient'
import {
  PatientContextData,
  PatientProviderProps,
} from './PatientProviders.types'

const PatientContext = createContext<PatientContextData | null>(null)

export const PatientProvider = ({ children }: PatientProviderProps) => {
  const [patients, setPatients] = useState<Patient[]>([])

  const loadPatients = async () => {
    console.log('Fetching patient data from API')

    const { data } = await apiService.get<Patient[]>('/patients')

    setPatients(data)
  }

  const value = useMemo(
    () => ({
      patients,
      loadPatients,
    }),
    [patients, loadPatients]
  )

  return (
    <PatientContext.Provider value={value}>{children}</PatientContext.Provider>
  )
}

export const usePatient = () => {
  const context = useContext(PatientContext)

  if (!context) {
    throw Error('usePatient must be used inside a PatientProvider')
  }

  return context
}

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import { apiService } from '../../services/apiService'
import { Patient } from '../../types/patient'
import {
  AddPatientParms,
  PatientContextData,
  PatientProviderProps,
} from './PatientProviders.types'

const PatientContext = createContext<PatientContextData | null>(null)

export const PatientProvider = ({ children }: PatientProviderProps) => {
  const [patients, setPatients] = useState<Patient[]>([])

  const loadPatients = useCallback(async () => {
    const { data } = await apiService.get<Patient[]>('/patients')

    setPatients(data)
  }, [setPatients])

  const addPatient = useCallback(async (patientData: AddPatientParms) => {
    console.log('Creating new patient...')

    await apiService.post('/patients', patientData)
  }, [])

  const deletePatient = useCallback(
    async (id: string) => {
      await apiService.delete(`/patients/${id}`)

      await loadPatients()
    },
    [loadPatients]
  )

  const value = useMemo(
    () => ({
      patients,
      loadPatients,
      addPatient,
      deletePatient,
    }),
    [patients, loadPatients, addPatient, deletePatient]
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

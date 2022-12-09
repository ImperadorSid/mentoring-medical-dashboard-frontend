import React from 'react'
import { PatientProvider } from '../PatientProvider'
import { AllProvidersProps } from './AllProviders.types'

export const AllProviders = ({ children }: AllProvidersProps) => (
  <PatientProvider>{children}</PatientProvider>
)

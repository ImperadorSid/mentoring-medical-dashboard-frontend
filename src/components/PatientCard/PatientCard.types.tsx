import { InsurancePlan } from '../../types/insurancePlan'

export type PatientCardProps = {
  id: string
  name: string
  document: string
  healthSystemId: string
  birthday: Date
  insurancePlan: InsurancePlan
}

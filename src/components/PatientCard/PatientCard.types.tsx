import { InsurancePlan } from '../../types/insurancePlan'

export type PatientCardProps = {
  name: string
  document: string
  healthSystemId: string
  birthday: Date
  insurancePlan: InsurancePlan
}

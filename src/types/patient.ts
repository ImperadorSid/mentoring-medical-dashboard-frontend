import { InsurancePlan } from './insurancePlan'

export type Patient = {
  id: string
  name: string
  document: string
  healthSystemId: string
  birthday: Date
  insurancePlan: InsurancePlan
}

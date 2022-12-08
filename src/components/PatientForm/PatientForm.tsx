import { useForm } from 'react-hook-form'

import { PatientFormData, PatientFormProps } from './PatientForm.types'

import './PatientForm.styles.css'

export const PatientForm = ({ initialData, submitFunction }: PatientFormProps) => {
  const { register, handleSubmit } = useForm<PatientFormData>({ defaultValues: initialData })
  
  return (
    <form onSubmit={handleSubmit(submitFunction)}>
        <label>
          Name <input {...register('name')} />
        </label>
        <label>
          Document <input type="number" {...register('document')} />
        </label>
        <label>
          Health System ID{' '}
          <input type="number" {...register('healthSystemId')} />
        </label>
        <label>
          Birthday <input type="date" {...register('birthday')} />
        </label>
        <label>
          Insurance Plan <input {...register('insurancePlan')} />
        </label>

        <button type="submit">Save</button>
      </form>
  )
}
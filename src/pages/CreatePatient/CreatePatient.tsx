import { Link } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'

import { CreatePatientFormData } from './CreatePatient.types'
import { usePatient } from '../../providers'

import './CreatePatient.styles.css'

export const CreatePatient = () => {
  const { addPatient } = usePatient()
  const { register, handleSubmit } = useForm<CreatePatientFormData>()

  const onSubmit: SubmitHandler<CreatePatientFormData> = (data) => {
    const timeString = 'T00:00'
    const localBirthday = new Date(`${data.birthday}${timeString}`)

    addPatient({ ...data, birthday: localBirthday })
  }

  return (
    <div>
      <h1>Create Patient</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
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

        <button type="submit">Create</button>
      </form>

      <Link to="/patients">Back to home</Link>
    </div>
  )
}

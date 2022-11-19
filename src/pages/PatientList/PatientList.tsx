import { PatientCard } from '../../components'
import { Patient } from '../../types/patient'

export const PatientList = () => {
  const patients: Patient[] = [
    {
      id: '1',
      name: 'Samore Ellen',
      document: '123423412341234',
      healthSystemId: '123123',
      birthday: new Date(1999, 3, 24),
      insurancePlan: {
        name: 'Bradesco',
        color: '#ffbbbb',
      },
    },
    {
      id: '2',
      name: 'Júlio Gutemberg',
      document: '4564567456743545',
      healthSystemId: '456456',
      birthday: new Date(1997, 6, 18),
      insurancePlan: {
        name: 'Unimed',
        color: '#bbffbb',
      },
    },
    {
      id: '3',
      name: 'Moisés Carvalho',
      document: '789789078908790',
      healthSystemId: '789789789',
      birthday: new Date(1997, 11, 11),
      insurancePlan: {
        name: 'Amil',
        color: '#bbbbff',
      },
    },
  ]

  return (
    <div>
      <h1>PatientList</h1>

      <ul>
        {patients.map(
          ({ name, document, healthSystemId, birthday, insurancePlan }) => (
            <PatientCard
              name={name}
              document={document}
              healthSystemId={healthSystemId}
              birthday={birthday}
              insurancePlan={insurancePlan}
            />
          )
        )}
      </ul>
    </div>
  )
}

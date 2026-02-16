import { getPayload } from 'payload'
import { JSX, Suspense } from 'react'
import config from '@/payload.config'
import ToDoListClientPage from './page-component'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const ToDoListPage: FSP = async () => {
  const payload = await getPayload({ config })

  const { docs: toDoListInfo } = await payload.find({
    collection: 'project-details',
    where: {
      slug: {
        equals: 'ToDoList',
      },
    },
    limit: 1,
    depth: 3,
  })

  const toDoListProjectDetail = toDoListInfo[0]

  return (
    <Suspense>
      <ToDoListClientPage toDoListProjectDetail={toDoListProjectDetail} />
    </Suspense>
  )
}

export default ToDoListPage

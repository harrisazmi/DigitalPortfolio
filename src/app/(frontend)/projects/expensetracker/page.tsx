import { getPayload } from 'payload'
import { JSX, Suspense } from 'react'
import config from '@/payload.config'
import ExpenseClientPage from './page-component'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const ExpensePage: FSP = async () => {
  const payload = await getPayload({ config })

  const { docs: expenseInfo } = await payload.find({
    collection: 'project-details',
    where: {
      slug: {
        equals: 'ExpenseTracker',
      },
    },
    limit: 1,
    depth: 3,
  })

  const expenseProjectDetail = expenseInfo[0]

  return (
    <Suspense>
      <ExpenseClientPage expenseProjectDetail={expenseProjectDetail} />
    </Suspense>
  )
}

export default ExpensePage

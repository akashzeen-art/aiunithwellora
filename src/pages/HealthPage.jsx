import CategoryListingPage from './CategoryListingPage'
import { healthCategories } from '../data/categories'

export default function HealthPage() {
  return <CategoryListingPage title="Health" items={healthCategories} />
}

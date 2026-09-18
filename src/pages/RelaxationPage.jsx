import CategoryListingPage from './CategoryListingPage'
import { relaxationCategories } from '../data/categories'

export default function RelaxationPage() {
  return <CategoryListingPage title="Relaxation" items={relaxationCategories} />
}

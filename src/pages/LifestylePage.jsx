import CategoryListingPage from './CategoryListingPage'
import { lifestyleCategories } from '../data/categories'

export default function LifestylePage() {
  return <CategoryListingPage title="Lifestyle" items={lifestyleCategories} />
}

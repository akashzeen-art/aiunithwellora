import { useState } from 'react'
import CategoryCard from '../components/CategoryCard'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'

const PAGE_SIZE = 12

export default function CategoryListingPage({ title, items }) {
  const [page, setPage] = useState(1)
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE))
  const start = (page - 1) * PAGE_SIZE
  const visible = items.slice(start, start + PAGE_SIZE)

  const handlePageChange = (nextPage) => {
    setPage(nextPage)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <div className="container-fluid listing-page mt-5 top-0 index5 py-5 mx-0 px-0 mb-5 pb-5">
        <div className="container-lg mx-0 px-0 px-lg-auto mx-lg-auto pb-5">
          <div className="row mx-auto py-3">
            <div className="col-12">
              <div className="title">{title}</div>
            </div>
          </div>

          <div className="row mx-auto p-2 g-3 category-grid-row">
            {visible.map((item) => (
              <div key={item.id} className="col-12 col-md-6 col-xxl-3 p-0 my-0">
                <CategoryCard
                  name={item.name}
                  image={item.image}
                  to={`/guide/${item.id}`}
                />
              </div>
            ))}
          </div>

          <div className="row mx-auto">
            <div className="col-12 text-center">
              <Pagination
                page={page}
                totalPages={totalPages}
                onChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

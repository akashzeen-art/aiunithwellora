import { Link } from 'react-router-dom'
import ArrowIcon from './ArrowIcon'

export default function CategoryCard({ name, image, to = '#' }) {
  return (
    <Link to={to} className="category-card-link">
      <div
        className="category-card"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="country_info_box">
          <div className="row gx-1 mx-1 align-items-center">
            <div className="col-8">
              <div className="country_name">{name}</div>
            </div>
            <div className="col-4 d-flex flex-column">
              <div className="country_button">
                <ArrowIcon className="go_arrow_in" />
                <ArrowIcon className="go_arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

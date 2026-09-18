export default function Pagination({ page = 1, totalPages = 2, onChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="block-27">
      <nav className="pagination" aria-label="Pagination">
        <button
          type="button"
          className={`page-control previous_page${page <= 1 ? ' disabled' : ''}`}
          aria-label="Previous page"
          disabled={page <= 1}
          onClick={() => onChange?.(page - 1)}
        >
          ← Previous
        </button>

        {pages.map((n) =>
          n === page ? (
            <em key={n} className="current" aria-label={`Page ${n}`} aria-current="page">
              {n}
            </em>
          ) : (
            <button
              key={n}
              type="button"
              aria-label={`Page ${n}`}
              onClick={() => onChange?.(n)}
            >
              {n}
            </button>
          ),
        )}

        <button
          type="button"
          className={`page-control next_page${page >= totalPages ? ' disabled' : ''}`}
          aria-label="Next page"
          disabled={page >= totalPages}
          onClick={() => onChange?.(page + 1)}
        >
          Next →
        </button>
      </nav>
    </div>
  )
}

import { getPagesArray } from '../utils/pages';
import s from './Pagination.module.css'

const Pagination = ({ totalPages, currentPage, changePage }) => {

  const pagesArray = getPagesArray(totalPages);

  return (
    <div className={s.pagination__container}>
      {pagesArray.map(p =>
        <button onClick={() => { changePage(p) }} key={p} className={p === currentPage ? [s.pagination__page, s.current].join(' ') : s.pagination__page} type='button'>{p}</button>
      )}
    </div>
  )
}

export default Pagination;
import React from 'react';
import { getPagesArray } from '../../../utils/pages';

const Pagination = ({pages, page, changePage}) => {
    let pagesArray = getPagesArray(pages);
  return (
    <div className="page__wrapper">
        {pagesArray.map(p => 
          <span key={p} onClick={() => changePage(p)} className={page === p ? 'page page__current' : 'page'}>{p}</span>
        )}
      </div>
  )
}

export default Pagination
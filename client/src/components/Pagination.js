import React from 'react';
import { NavLink } from 'react-router-dom';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className='pagination'>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <NavLink to={{ pathname: `/episodes/page/${number}` }} onClick={() => paginate(number)} className='button alt' activeClassName='active-pagenumber'>
                            {number}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
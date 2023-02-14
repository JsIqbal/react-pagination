import React from "react";
import axios from "axios";

const Pagination = ({
    postsPerPage,
    totalPosts,
    paginate,
    currentPage,
    setPosts,
}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const fetchPosts = async (pageNumber) => {
        try {
            const response = await axios.get(
                `https://app.cesomni.com/sms/test/?page=${pageNumber}`
            );
            setPosts(response.data.results || []);
            paginate(pageNumber);
        } catch (error) {
            console.log(error);
        }
    };

    const nextPage = () => {
        if (currentPage < pageNumbers.length) {
            fetchPosts(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            fetchPosts(currentPage - 1);
        }
    };

    let startPage, endPage;
    if (pageNumbers.length <= 5) {
        startPage = 1;
        endPage = pageNumbers.length;
    } else {
        if (currentPage <= 3) {
            startPage = 1;
            endPage = 5;
        } else if (currentPage + 2 >= pageNumbers.length) {
            startPage = pageNumbers.length - 4;
            endPage = pageNumbers.length;
        } else {
            startPage = currentPage - 2;
            endPage = currentPage + 2;
        }
    }

    const pageItems = [];
    for (let i = startPage; i <= endPage; i++) {
        pageItems.push(
            <li
                key={i}
                className={`page-item ${i === currentPage ? "active" : ""}`}
            >
                <button className="page-link" onClick={() => fetchPosts(i)}>
                    {i}
                </button>
            </li>
        );
    }

    return (
        <nav>
            <ul className="pagination">
                <li
                    className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                    }`}
                >
                    <button className="page-link" onClick={prevPage}>
                        Previous
                    </button>
                </li>
                {pageItems}
                <li
                    className={`page-item ${
                        currentPage === pageNumbers.length ? "disabled" : ""
                    }`}
                >
                    <button className="page-link" onClick={nextPage}>
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;

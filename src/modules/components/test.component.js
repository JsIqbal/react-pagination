import axios from "axios";
import React, { useState, useEffect } from "react";
import Posts from "./post.component";
import Pagination from "./pagination.component";

const Test = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    "https://app.cesomni.com/sms/test/"
                );
                setPosts(response.data.results || []);
                setCount(response.data.count || 0);
                console.log(response);
            } catch (error) {
                setPosts([]);
                setCount(0);
            }
        };
        getData();
    }, []);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container">
            <Posts posts={posts} loading={loading} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={count}
                paginate={paginate}
                currentPage={currentPage}
                setPosts={setPosts}
            />
        </div>
    );
};

export default Test;

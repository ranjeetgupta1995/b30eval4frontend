import React, { useEffect, useState } from 'react'

export const Posts = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch("https://fawn-wear.cyclic.app/posts", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res.allPosts)
            setData(res.allPosts)
            setCount(res.allPosts.length)
        })
        .catch(err => console.log(err))
    }, []);

  return (
    <div>
        <h3>Count: {count}</h3>
        {
            data.map((el) => (
                <div key={el._id}>
                    <h3>Title: {el.title}</h3>
                    <p>Body: {el.body}</p>
                    <p>Device: {el.device}</p>
                    <p>Comments: {el.no_of_comments}</p>
                </div>
            ))
        }
    </div>
  )
}

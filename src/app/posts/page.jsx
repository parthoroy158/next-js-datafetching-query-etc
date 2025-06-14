import React from 'react';

export const postFetch = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    return data
}

const page = async () => {
    const getPost = await postFetch();
    return (
        <div>
            <h1>Total post: {getPost.length}</h1>
            <div className='grid grid-cols-4 gap-5 '>
                {
                    getPost.map(item => {
                        return (
                            <div className='border-2 p-2'>
                                <p className='font-bold'>{item.title}</p>
                                <p>{item.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default page;
import Link from 'next/link';
import React from 'react';

export const postFetch = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    return data
}

export const metadata = {
    title: 'Post',
    description: '...',
}



const page = async () => {
    const getPost = await postFetch();
    return (
        <div className='min-h-screen'>
            <h1 className='text-center text-4xl m-5 font-bold'>Total Post : {getPost.length}</h1>
            <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    getPost.map(item => {
                        return (
                            <div className="card bg-primary text-primary-content w-96">
                                <div className="card-body  shadow-2xl">
                                    <h2 className="card-title text-center">{item.title}</h2>
                                    <p>{item.body}</p>
                                </div>
                                <div className="pl-3 pr-3 pb-3">
                                    <Link href={`/posts/${item.id}`}>
                                        <button className="btn btn-active hover:bg-amber-100 w-full ">Details</button>
                                    </Link>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default page;
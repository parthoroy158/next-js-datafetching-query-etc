import React from 'react';

export const postFetch = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    return data
}

const page = async ({ params }) => {

    const params_id = await params?.id;
    const getDetails = await postFetch(params_id);

    return (
        <div className='min-h-screen place-content-center place-items-center'>
            <div className='flex justify-center mt-10 '>
                <div className="card bg-primary text-primary-content w-96">
                    <div className="card-body">
                        <h2 className="card-title">{getDetails.title}</h2>
                        <p>{getDetails.body}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
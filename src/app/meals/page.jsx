import React from 'react';
import SearchBar from './components/SearchBar';

const page = async ({ searchParams }) => {
    const query = await searchParams.search

    const mealsFetch = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await res.json();
        return data?.meals;
    }

    const meals = await mealsFetch();

    return (
        <div className='min-h-screen'>
            <h1 className='text-center mt-5 font-bold text-3xl'>Total Meals: {meals?.length}</h1>
            <SearchBar></SearchBar>
            <div className='grid md:grid-cols-3 gap-5 mt-5'>
                {
                    meals?.map(item => {
                        return (
                            <div className="card bg-base-100 image-full w-96 shadow-sm">
                                <figure>
                                    <img
                                        src={item.strMealThumb}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item.strMeal}</h2>
                                    <h2 className="card-title">{item.strArea}</h2>
                                    <p>{item.strCategory}</p>
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <h1>This is the meals page </h1>
        </div>
    );
};

export default page;
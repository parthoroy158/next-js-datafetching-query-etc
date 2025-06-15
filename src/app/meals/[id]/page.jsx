import React from 'react';

const getSingleMeal = async (id) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await res.json();
    return data.meals?.[0]; // Return the first meal object
};

const page = async ({ params }) => {
    const id = params.id;

    const meal = await getSingleMeal(id);

    if (!meal) {
        return <h1 className="text-center text-red-500 mt-5">Meal not found</h1>;
    }

    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-3xl font-bold mb-5">Meal: {meal.strMeal}</h1>

            <div className="card bg-base-100 w-96 shadow-lg">
                <figure>
                    <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        className="w-full h-auto"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{meal.strMeal}</h2>
                    <p>{meal.strInstructions?.slice(0, 200)}...</p>
                    <p><strong>Category:</strong> {meal.strCategory}</p>
                    <p><strong>Area:</strong> {meal.strArea}</p>
                </div>
            </div>
        </div>
    );
};

export default page;

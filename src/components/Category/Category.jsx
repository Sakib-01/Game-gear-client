import React, { useEffect, useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";

const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/sports")
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = [
          ...new Set(data.map((item) => item.categoryName)),
        ];
        setCategories(uniqueCategories);
        console.log(uniqueCategories);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <Fade cascade damping={0.1}>
      <div className="w-10/12 mx-auto bg-white dark:bg-slate-900 ">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center  my-10 text-blue-500">
          Categories{" "}
          <span className="underline underline-offset-4 decoration-1 font-light text-green-600">
            We Have
          </span>
        </h1>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-5 my-5">
          {categories.map((category, index) => (
            <Zoom>
              <div
                className="px-2 py-2 md:px-10 md:py-5 rounded-3xl border-2 border-blue-400  text-center font-bold text-xl text-green-600"
                key={index}
              >
                {category}
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default Category;

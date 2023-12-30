import { useState } from "react";
import RatingComponent from "./RatingComponent";
import { t } from "i18next";

const Rating = () => {
  const [ratings, setRatings] = useState([
    {
      id: 1,
      rating: 4,
      lawyer: 1,
      rater: "lallouche abdelghani",
      desc: "good lawyer",
      date: "12/12/2022",
    },
    {
      id: 2,
      rating: 5,
      lawyer: 1,
      rater: "azououa",
      desc: "good lawyer",
      date: "12/12/2022",
    },
    {
      id: 3,
      rating: 5,
      lawyer: 1,
      rater: "spiderman",
      desc: "good lawyer",
      date: "12/12/2022",
    },
  ]);
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 bg-white rounded-xl p-3 mt-5">
        <div className="hh">{t("addrating")}</div>
        <RatingComponent />
        <div className="flex-1 flex justify-end">
          <button className="flex flex-wrap gap-1">
            <h1 className="text-primary text-base font-semibold">
              {t("addreview")}
            </h1>
            {/* icon add */}
          </button>
        </div>
      </div>
      <div>
        {ratings.length > 0 ? (
          <div>
            {ratings.map((rating) => (
              <div key={rating.id} className="bg-white rounded-xl p-3 my-2">
                <h1>{`${rating.rater} | ${rating.date}`}</h1>
                <RatingComponent rating={rating.rating} />
                <p className="">{rating.desc}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>{t("noreview")}</div>
        )}
      </div>
    </div>
  );
};

export default Rating;

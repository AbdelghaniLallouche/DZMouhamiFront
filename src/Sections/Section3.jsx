import { useTranslation } from "react-i18next";
import { useState } from "react";

const Sectionthree = () => {
  const { t, i18n } = useTranslation();
  const [exps, setExps] = useState([
    { id: 1, title: "bla bla", desc: "hahaha" },
    { id: 2, title: "bla bla", desc: "yoooo" },
  ]);

  return (
    <section>
      <h2 className="h2">{t("exp")}</h2>
      <div className="form">
        <form method="post">
          <h1 className="h1">{t("titre")}</h1>
          <input
            type="text"
            required
            name="titre"
            className="btn my-2"
            placeholder={t("titre")}
          />
          <h1 className="h1">{t("desc")}</h1>
          <textarea
            name="desc"
            required
            id="desc"
            cols="30"
            rows="5"
            className="btn my-2"
            placeholder={t("type")}
          ></textarea>
          <button className="button">{t("addexp")}</button>
        </form>
        <div className="flex flex-row justify-start gap-2 items-center mt-2">
          {exps.map((exp) => (
            <div key={exp.id} className="card">
              <h2 className="text-primary font-semibold text-lg mb-1 text-start">
                {exp.title}
              </h2>
              <p className="text-sm text-primary">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectionthree;

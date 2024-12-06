import s from "./experience.module.scss";

import { useContext } from "react";
import { LangContext } from "../../providers/LangProvider";

import sertificateIco from "../../assets/icons/7107778_certificate_reward_diploma_employment_recruitment_icon.svg";
import workExperienceData from "../../data/workExperienceData";

const content = {
  title: {
    ru: "Образование и практический опыт",
    en: "Education and work experience",
  },
};

export default function WorkExperience() {
  const { lang } = useContext(LangContext);

  return (
    <section className={s.experience}>
      <h3 className={s.title}>{content.title[lang]}</h3>
      <ul className={s.experience_list}>
        {workExperienceData.map((data, i) => (
          <li className={s.experience_item} key={i}>
            <div>
              <div className={s.institution}>{data.institution[lang]}</div>
              <div className={s.experience_title}>{data.title[lang]}</div>
            </div>
            <div className={s.date}>{data.date[lang]}</div>
            <div className={s.about}>
              {data.about ? (
                <ul className={s.about_content}>{data.about[lang].map((el, i) => (
                  <li className={s.content_item} key={i}>{el}</li>
                ))}</ul>
              ) : (
                ""
              )}
              {data.sertificate ? (
                <a
                  href={data.sertificate}
                  target="_blank"
                  className={`${s.sertificate}`}>
                  <img
                    src={sertificateIco}
                    alt="sertificate"
                    title="show sertificate"
                  />
                </a>
              ) : (
                ""
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

import s from "./contactsList.module.scss";

import { useContext } from "react";
import { LangContext } from "../../providers/LangProvider";

import contactsData from "../../data/contactsData";

import locationIco from "./../../assets/icons/location.svg";

const CONTENT = {
  location: {
    ru: "Минск, Беларусь",
    en: "Minsk, Belarus",
  },
};

export default function ContactsList() {
  const { lang } = useContext(LangContext);

  return (
    <ul className={s.list}>
      {contactsData.map((contact) => (
        <li className={s.item}>
          <a href={contact.href} className={s.link}>
            <img src={contact.ico} alt="contact ico" height={20} />
            <span>{contact.title}</span>
          </a>
        </li>
      ))}
      <li className={s.item}>
        <span className={s.link}>
          <img src={locationIco} alt="location" />
          <span>{CONTENT.location[lang]}</span>
        </span>
      </li>
    </ul>
  );
}

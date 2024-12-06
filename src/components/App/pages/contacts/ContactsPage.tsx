import { LangContext } from "../../../../providers/LangProvider";
import { useContext } from "react";

import ContactsList from "../../../ContactsList/ContactsList";

const CONTENT = {
  title: {
    ru: "Контакты",
    en: "Contacts",
  },
};

export default function ContactsPage() {
  const { lang } = useContext(LangContext);

  return (
    <div className="conteiner">
      <h2 className="title">{CONTENT.title[lang]}</h2>
      <ContactsList></ContactsList>
    </div>
  );
}

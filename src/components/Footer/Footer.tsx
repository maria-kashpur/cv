import s from "./footer.module.scss";

import contactsData from "../../data/contactsData";
import React from "react";

const Footer = () => {
  return (
    <div className="conteiner">
      <footer className={s.footer}>
        <div className={s.footer_links}>
          {contactsData.map((el, i) => (
            <a href={el.href} key={i}>
              <img src={el.ico} alt="link" />
            </a>
          ))}
        </div>
        <div>© created by Mariya Pyzh</div>
      </footer>
    </div>
  );
}

export default React.memo(Footer);
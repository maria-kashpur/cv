import './contacts.scss'
import photo from "./../../assets/photo.jpg";

import telegramIco from './../../assets/icons/telegram.svg';
import emailIco from './../../assets/icons/email.svg';
import linkedinIco from './../../assets/icons/linkedin.svg';
import discordIco from './../../assets/icons/discord.svg';
import githubIco from './../../assets/icons/github.svg'

const mineContacts = [
  {
    ico: telegramIco,
    href: "https://t.me/Mariya_Pyzh",
    title: "Mariya_Pyzh",
  },
  {
    ico: emailIco,
    href: "mailto: kashpur.maria@icoud.com",
    title: "kashpur.maria@icoud.com",
  },
  {
    ico: linkedinIco,
    href: "https://www.linkedin.com/in/mariya-pyzh/",
    title: "https://www.linkedin.com/in/mariya-pyzh/",
  },
  {
    ico: discordIco,
    href: "https://discord.com/users/1048681613749399552",
    title: "Mariya_Pyzh",
  },
  {
    ico: githubIco,
    href: "https://github.com/maria-kashpur",
    title: "maria-kashpur",
  },
];

export default function Contacts() {
  return (
    <section className="main_inf">
      <div className="person">
        <div className="logo">
          <img src={photo} alt="photo" width={150} />
        </div>
        <div>
          <h1>Мария Пыж</h1>
          <h2>Frontend разработчик</h2>
        </div>
      </div>
      <div className="contacts" id="contacts">
        <h3>Contacts:</h3>
        <ul>
          {mineContacts.map((contact) => (
            <li>
              <a href={contact.href} className="contact">
                <img src={contact.ico} alt="contact ico" height={20} />
                {contact.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

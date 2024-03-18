import './header.scss';
import printIco from './../../assets/icons/print.svg'

const links = [
  {
    title: {
      ru: "Контакты",
      en: "Contacts",
    },
    id: "contacts",
  },
  {
    title: {
      ru: "Обо мне",
      en: "About me",
    },
    id: "about",
  },
  {
    title: {
      ru: "Образование",
      en: "Aducation",
    },
    id: "aducation",
  },
  {
    title: {
      ru: "Навыки",
      en: "Skills",
    },
    id: "skills",
  },
  {
    title: {
      ru: "Проекты",
      en: "Progects",
    },
    id: "projects",
  },
];

export default function Header() {
  return (
    <header>
      <div className="conteiner">
        <div className='header'>
          <nav>
            <ul className="nav">
              {links.map((link) => (
                <li>
                  <a className="nav__link" href={`#${link.id}`}>
                    {link.title.ru}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className='settings'>
            <div className='lang'>
              RU
            </div>
            <div className='print_ico'>
              <img src={printIco} alt="print" height="30" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

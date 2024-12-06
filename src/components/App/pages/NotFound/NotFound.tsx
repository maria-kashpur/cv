import s from "./notFound.module.scss";
import NotFoundImg from "./../../../../assets/img/not_found.png";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="conteiner">
      <div className={s.wrap}>
        <img src={NotFoundImg} alt="not found" className={s.img} />
        <div className={s.content}>
          <h2 className={s.title}>Not Found</h2>
          <Link to="/" className={s.link}>
            Go to home page
          </Link>
        </div>
      </div>
    </div>
  );
}

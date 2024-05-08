import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

type TypeSetState<T> = Dispatch<SetStateAction<T>>;

interface IProps {
  children: React.ReactNode;
}

export type LangContextType = "ru" | "en";

interface LangContext {
  lang: LangContextType;
  setLang?: TypeSetState<LangContext["lang"]>;
}

function getLang() {
  const ls = localStorage.getItem("lang");
  if (ls === "en" || ls === "ru") {
    return ls;
  }
  return "en";
}

export const LangContext = createContext<LangContext>({ lang: getLang() });

export default function LangProvider({ children }: IProps) {
  const [lang, setLang] = useState<LangContextType>(getLang());

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

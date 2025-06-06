"use client"
import { LangContext } from "@/context/Context";
import { useContext } from "react";


export default function H3(props : {text_fr : string |null, text_en : string| null , className? : string, no_padding? : boolean}) {
  const text_fr = props.text_fr;
  const text_en = props.text_en;
  const className = props.className;
  const no_padding = props.no_padding;
  const lang = useContext(LangContext);
  
  const paddingClasses = no_padding ? "" : "pt-2 md:pt-4 xl:pt-8 3xl:pt-16 pb-1 md:pb-2 xl:pb-4 3xl:pb-8";
  
  return (
    <h3 className={`${paddingClasses} font-merriweather text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl ${className}`}>
      {lang === "FR" ? text_fr : text_en}
    </h3>
  );
}

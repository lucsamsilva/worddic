import style from "./Button.module.css"

export default function Button(props:any) {
      return <a onClick={props.getNewWord} className={style.btn}>Gerar Palavra</a>
}
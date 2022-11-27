import style from "./Form.module.css"
function Form(){
return(
    <form className={style.form}>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="contact number"/>
        <input type="text" placeholder="sex" />
        <input type="text" placeholder="country" />
        <input type="text" placeholder="state" />
        <input type="text" placeholder="password"/>
        <input type="text" placeholder="confirm password"/>
        <button id="submit">create</button>

    </form>
)
}

export default Form
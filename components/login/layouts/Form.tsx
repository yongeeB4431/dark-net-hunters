import style from "./Form.module.css"
import SignInUsingGoogleOrCreateNewAccount from "./SIgnInUsingGoogleOrCreateNewAccount";
export default function Form(){
    return (
        <>
            <h1 className={style.text}>Dark Net Hunters</h1>
            <form className={style.form}>
                <input type="name" placeholder="username" />
                <input type="passowrd" placeholder="password" />
                <button className={style.submit}>submit</button>
            </form>
            <SignInUsingGoogleOrCreateNewAccount />
        </>
    )

}
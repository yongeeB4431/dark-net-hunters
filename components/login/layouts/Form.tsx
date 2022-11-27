import style from "./Form.module.css"

import SignInUsingGoogleOrCreateNewAccount from "./SIgnInUsingGoogleOrCreateNewAccount";
export default function Form(){
    return (
        <>
            <h1 id="title">Dark Net Hunters</h1>
            <form className={style.form}>
                <input type="name" placeholder="username" />
                <input type="passowrd" placeholder="password" />
                <button id="submit">submit</button>
            </form>
            <SignInUsingGoogleOrCreateNewAccount />
        </>
    )

}
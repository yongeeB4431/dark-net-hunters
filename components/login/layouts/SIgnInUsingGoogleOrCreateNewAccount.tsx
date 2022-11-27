import Link from "next/link"
import style from "./SignInUsingGoogleOrCreateNewAccount.module.css"

function SignInUsingGoogleOrCreateNewAccount(){
return(
    <main className={style.container}>
        <h3>Sign in using <span>google</span></h3>
        <Link href="/create_new_account" style={{textDecoration: "none"}}>
        <h3 id="text">Create new account</h3>
        </Link>
    </main>
)
}

export default SignInUsingGoogleOrCreateNewAccount
import Link from "next/link";

export default function LoginLink(){
    return(
        <>
        <Link href="/" style={{textDecoration: "none"}}>
        <h3 id="text" style={{textAlign:"center", margin: "10px 0"}}>Already have an account? click here to <i style={{textDecoration: "underline"}}>login</i></h3>
        </Link>
        </>
    )
}
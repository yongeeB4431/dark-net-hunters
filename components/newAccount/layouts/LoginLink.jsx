import Link from "next/link";

export default function LoginLink(){
    return(
        <>
        <Link href="/" style={{textDecoration: "none"}}>
        <h3>login</h3>
        </Link>
        <style jsx>
            {
            `
                h3{
                    color: lime;
                    text-align: right;
                    margin: 0 10px;
                    font-weight: bold;
                }
            `}
        </style>
        </>
    )
}
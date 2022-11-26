import Container from "../Container"
import LoginLink from "./layouts/LoginLink"
import Name from "../newAccount/layouts/Name"
import Form from "./layouts/Form"

export default function CreateAccount(){
    return (
        <Container>
            <LoginLink />
            <Name />
            <Form />
        </Container>
    )
}
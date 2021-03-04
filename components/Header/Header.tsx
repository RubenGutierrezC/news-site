import { FunctionComponent } from "react"
import Link from "next/link";
import { Container, Logo } from "./style";
import { Center } from "../Center";
import './style'

export const Header: FunctionComponent = () => {
    return (
        <Container>
            <Center>
                <Logo>
                    <Link href='/'>
                        <a>Wha's Next?!</a>
                    </Link>
                </Logo>
            </Center>
        </Container>
    )
}

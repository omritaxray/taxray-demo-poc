import { useLink } from "@refinedev/core";
import { theme } from "antd";
import { TaxRayIcon } from "../icons/taxray";
//import styled from '@emotion/styled';
//import { Logo } from "./styled";


// const Logo = styled.div`
//     height: 72px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

const { useToken } = theme;

type TitleProps = {
    collapsed: boolean;
};

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { token } = useToken();
    const Link = useLink();

    return (
        //<Logo>

        <Link to="/">
            {collapsed ? (
                <TaxRayIcon
                    style={{
                        padding: "0px 30px 0px 30px",
                        fontSize: "32px",
                        color: token.colorTextHeading,
                    }}
                />
            ) : (
                <TaxRayIcon
                    style={{
                        padding: "0px 30px 0px 30px",
                        color: token.colorTextHeading,
                        width: "100%",
                        height: "auto",
                    }}
                />
            )}
        </Link>
        //</Logo>
    );
};
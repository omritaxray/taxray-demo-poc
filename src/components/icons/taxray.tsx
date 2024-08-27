import { Image } from "antd";
import taxRayIcon from "components/icons/taxrayIcon.png";

const taxrayIconStyle = {
    backgroundImage: `url("http://takeof.me/taxrayIcon.svg")`,
    // img: "/images/pdfIcon.svg",
    padding: "200px",
    fontFamily: "Arial"
};

export const TaxRayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
    props,
) => (
    <Image src={taxRayIcon} preview={false} style={{ width: "80px" }}>
    </Image>
);
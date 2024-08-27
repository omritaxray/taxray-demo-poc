import { useTranslate, BaseKey } from "@refinedev/core";
import { NumberField } from "@refinedev/antd";
import {
    CloseCircleOutlined,
    FormOutlined,
    MoreOutlined,
} from "@ant-design/icons";
import {
    Avatar,
    Card,
    Divider,
    InputNumber,
    Dropdown,
    Menu,
    Typography,
    Image,
    Switch,
    Space,
    Row,
    Col
} from "antd";

import { IIntegration } from "../../interfaces";
import { getIntegrationIcon } from "components/get-integration-icon";

const { Text, Paragraph } = Typography;

type IntegrationItemProps = {
    item: IIntegration;
    // updateStock?: (changedValue: number, clickedProduct: IProduct) => void;
    // editShow: (id?: BaseKey) => void;
};

export const IntegrationItem: React.FC<IntegrationItemProps> = ({
    item
    // updateStock,
    // editShow,
}) => {
    const t = useTranslate();

    return (
        <Card
            style={{
                margin: "3%",
                height: "85%",
                width: "90%"
                //opacity: item.stock <= 0 ? 0.5 : 1,
            }}
            hoverable
            //bodyStyle={{ height: 150, width: 200 }}
            cover={<img alt={item.title} src={getIntegrationIcon(item.imageURL)} />}
        >
            {/* <div style={{ position: "absolute", top: "10px", right: "5px" }} /> */}
            <div
                style={{
                    //display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    //height: "100%",
                    //width: "100%"
                }}
            >
                {/* <div style={{ textAlign: "center" }}>
                    <Image preview={false}
                        //size={128}

                        src={item.image}
                        alt={item.name}
                    // style={{
                    //     // display: "flex",
                    //     // flexDirection: "column",
                    //     // justifyContent: "space-between",
                    //     width: "100%",
                    // }}
                    />
                </div> */}
                {/* <Divider /> */}

                <Row>
                    <Col md={16}>
                        <Paragraph

                            //ellipsis={{ rows: 2 }}
                            style={{
                                //display: "inline",
                                fontSize: "14px",
                                fontWeight: 700,
                                marginBottom: "5%",
                            }}
                        >

                            {item.title}
                        </Paragraph>
                    </Col>

                    <Col md={{ offset: 1 }}>
                        <Switch style={{ backgroundColor: '#6039F5' }}
                        // checked={tpermission.enabled}
                        // checkedChildren={'ENABLED'}
                        // unCheckedChildren={'DISABLED'}
                        // onChange={(e) => back} 
                        />
                    </Col>


                </Row>
                <Paragraph
                    ellipsis={{ rows: 2, tooltip: true }}
                    style={{ marginBottom: "5%" }}
                >
                    {"Integrate to Your Organisation's "} {item.title}
                </Paragraph>

            </div>
        </Card >
    );
};
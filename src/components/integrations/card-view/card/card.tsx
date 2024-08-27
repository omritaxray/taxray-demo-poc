import { FC } from "react";

import { useDelete, useNavigation } from "@refinedev/core";

import { DeleteOutlined, EyeOutlined, MoreOutlined } from "@ant-design/icons";
import { Button, Card, ConfigProvider, Dropdown, Image, Space, Switch, Tooltip } from "antd";
import { useList } from "@refinedev/core";

import { CustomAvatar } from "../../../custom-avatar";
import { Text } from "../../../Text";

// import { AvatarGroup } from "../../avatar-group";
import { CompanyCardSkeleton } from "./skeleton";
import { IIntegration } from "interfaces";
import { getIntegrationIcon } from "components/get-integration-icon";

type Props = {
  integration: IIntegration;
};



export const CompanyCard: FC<Props> = ({ integration }) => {
  const integrationImagePath = getIntegrationIcon(integration.imageURL)
  const switchStatus = integration.status
  const { edit } = useNavigation();
  const { mutate } = useDelete();
  if (!integration) return <CompanyCardSkeleton />;

  return (
    <Card
      size="small"
      style={{
        border: "0px solid #00000000",
        boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div
        style={{

          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Dropdown
          menu={{
            items: [
              {
                label: "View integration",
                key: "1",
                icon: <EyeOutlined />,
                onClick: () => {
                  edit("integrations", integration.id);
                },
              },
              {
                danger: true,
                label: "Delete company",
                key: "2",
                icon: <DeleteOutlined />,
                onClick: () => {
                  mutate({
                    resource: "integrations",
                    id: integration.id,
                  });
                },
              },
            ],
          }}
          placement="bottom"
          arrow
        >
          <Button
            type="text"
            shape="circle"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
            icon={
              <MoreOutlined
                style={{
                  transform: "rotate(90deg)",
                }}
              />
            }
          />
        </Dropdown>

        {/* <CustomAvatar
          name={integration.title}
          src={getIntegrationIcon(integration.imageURL)}
          shape="square"
          style={{
            width: "48px",
            height: "48px",
          }}
        /> */}
        <Image
          width={"100%"}
          src={integrationImagePath}
        />
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Text
              strong
              size="md"
              ellipsis={{ tooltip: integration.title }}
              style={{
                marginLeft: "8px",
                marginRight: "16px",
                marginTop: "12px",
              }}
            >
              {integration.title}
            </Text>
          </div>
          <div>
            <ConfigProvider theme={{
              components: {
                Switch: {
                  colorPrimary: "#6039F5",
                  colorPrimaryHover: "#6039F5",
                },
              },
            }}>
              <Switch checked={switchStatus} style={{ marginTop: "12px", marginRight: "8px" }}></Switch>
            </ConfigProvider>
          </div>
        </div>


        <Space
          direction="vertical"
          size={0}
          style={{
            marginLeft: "8px",
            marginTop: "8px",
            marginRight: "8px",
            alignItems: "left",
          }}
        >
          <Text type="secondary">{integration.description}</Text>
          {/* <Text
            strong
            size="md"
            style={{
              marginTop: "12px",
            }}
          >
            {currencyNumber(company?.dealsAggregate?.[0].sum?.value || 0)}
          </Text> */}
        </Space>
      </div>
    </Card>
  );
};

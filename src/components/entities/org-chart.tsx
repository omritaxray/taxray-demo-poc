import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from '@emotion/styled';
import { Text } from 'components/Text';
import { Image, Space } from 'antd';

const StyledHQNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid #0078D4;
  color: red;
  background-color: #FFF;
  width: 16%;
`;

const StyledEntityNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid #0078D4;
  color: red;
  background-color: #BDDEF3;
`;
const StyledPENode = styled.div`
  padding: 5px;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  display: inline-block;
  border: 1px solid #000;
  color: red;
  background-color: #FFBCC0;
`;

const Circle = ({ color = 'blue', size = 50 }) => {
    return (
        <div
            style={{
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: '50%',
                backgroundColor: color,
                display: 'inline-block', // This makes it easy to use the circle inline with other elements
                margin: '0 3px',
            }}
        />
    );
};


const ExampleTree = () => (
    <Tree
        lineWidth={'2px'}
        lineColor={'black'}
        lineBorderRadius={'10px'}
        label={<StyledHQNode>
            <Space direction='vertical' style={{ textAlign: "center", margin: "2%" }}>
                <Text size="md" style={{ fontWeight: "600", display: 'block' }}>ACME HQ</Text>
                <Text size="sm" style={{ fontWeight: "400", display: 'block' }}>Unites States Corporation</Text>
                <Image src={`/images/flags/us.svg`} style={{ marginBottom: "2px" }}></Image>
            </Space>
        </StyledHQNode>}
    >
        <TreeNode label={<StyledEntityNode><Space direction='vertical' style={{ textAlign: "center", margin: "2%" }}>
            <Text size="md" style={{ fontWeight: "600", display: 'block' }}>ACME Brazil</Text>
            <Text size="sm" style={{ fontWeight: "400", display: 'block' }}></Text>
            <Image src={`/images/flags/brazil.svg`} style={{ marginBottom: "2px" }}></Image>
        </Space></StyledEntityNode>}>
            <TreeNode label={<StyledEntityNode><Space direction='vertical' style={{ textAlign: "center", margin: "2%" }}>
                <Text size="md" style={{ fontWeight: "600", display: 'block' }}>ACME Mexico</Text>
                <Text size="sm" style={{ fontWeight: "400", display: 'block' }}></Text>
                <Image src={`/images/flags/mexico.svg`} style={{ marginBottom: "2px" }}></Image>
            </Space></StyledEntityNode>} />
            <TreeNode label={<StyledEntityNode><Space direction='vertical' style={{ textAlign: "center", margin: "2%" }}>
                <Text size="md" style={{ fontWeight: "600", display: 'block' }}>ACME Chile</Text>
                <Text size="sm" style={{ fontWeight: "400", display: 'block' }}></Text>
                <Image src={`/images/flags/chile.svg`} style={{ marginBottom: "2px" }}></Image>
            </Space></StyledEntityNode>} />
        </TreeNode>
        <TreeNode label={<StyledEntityNode><Space direction='vertical' style={{ textAlign: "center", margin: "2%" }}>
            <Text size="md" style={{ fontWeight: "600", display: 'block' }}>ACME UK</Text>
            <Text size="sm" style={{ fontWeight: "400", display: 'block' }}></Text>
            <Image src={`/images/flags/england.svg`} style={{ marginBottom: "2px" }}></Image>
        </Space></StyledEntityNode>}>
            <TreeNode label={<StyledEntityNode><Space direction='vertical' style={{ textAlign: "center", margin: "2%" }}>
                <Text size="md" style={{ fontWeight: "600", display: 'block' }}>ACME France</Text>
                <Text size="sm" style={{ fontWeight: "400", display: 'block' }}></Text>
                <Image src={`/images/flags/france.svg`} style={{ marginBottom: "2px" }}></Image>
            </Space></StyledEntityNode>} />
            <TreeNode label={<StyledEntityNode><Space direction='vertical' style={{ textAlign: "center", margin: "2%" }}>
                <Text size="md" style={{ fontWeight: "600", display: 'block' }}>ACME Germany</Text>
                <Text size="sm" style={{ fontWeight: "400", display: 'block' }}></Text>
                <Image src={`/images/flags/germany.svg`} style={{ marginBottom: "2px" }}></Image>
            </Space></StyledEntityNode>}>
                <TreeNode label={<StyledEntityNode><Space direction='vertical' style={{ textAlign: "center", margin: "2%" }}>
                    <Text size="md" style={{ fontWeight: "600", display: 'block' }}>ACME Spain</Text>
                    <Text size="sm" style={{ fontWeight: "400", display: 'block' }}></Text>
                    <Image src={`/images/flags/spain.svg`} style={{ marginBottom: "2px" }}></Image>
                </Space></StyledEntityNode>} />
            </TreeNode>
        </TreeNode>

        <TreeNode label={<StyledEntityNode><Space direction='vertical' style={{ textAlign: "center", margin: "2%" }}>
            <Text size="md" style={{ fontWeight: "600", display: 'block' }}>ACME Australia</Text>
            <Text size="sm" style={{ fontWeight: "400", display: 'block' }}></Text>
            <Image src={`/images/flags/australia.svg`} style={{ marginBottom: "2px" }}></Image>
        </Space></StyledEntityNode>}>
            <TreeNode label={<StyledEntityNode><Space direction='vertical' style={{ textAlign: "center", margin: "2%" }}>
                <Text size="md" style={{ fontWeight: "600", display: 'block' }}>ACME New Zealand</Text>
                <Text size="sm" style={{ fontWeight: "400", display: 'block' }}></Text>
                <Image src={`/images/flags/newzealand.svg`} style={{ marginBottom: "2px" }}></Image>
            </Space></StyledEntityNode>} />
            <TreeNode label={<StyledEntityNode><Space direction='vertical' style={{ textAlign: "center", margin: "2%" }}>
                <Text size="md" style={{ fontWeight: "600", display: 'block' }}>ACME Singapore</Text>
                <Text size="sm" style={{ fontWeight: "400", display: 'block' }}></Text>
                <Image src={`/images/flags/singapore.svg`} style={{ marginBottom: "2px" }}></Image>
            </Space></StyledEntityNode>} >
                <TreeNode label={<StyledPENode><Space direction='vertical' style={{ textAlign: "center", margin: "2%" }}>
                    <Text size="md" style={{ fontWeight: "600", display: 'block' }}>ACME Taiwan</Text>
                    <Text size="sm" style={{ fontWeight: "400", display: 'block' }}></Text>
                    <Image src={`/images/flags/taiwan.svg`} style={{ marginBottom: "2px" }}></Image>
                </Space></StyledPENode>} />
                <TreeNode label={<StyledEntityNode><Space direction='vertical' style={{ textAlign: "center", margin: "2%" }}>
                    <Text size="md" style={{ fontWeight: "600", display: 'block' }}>ACME China</Text>
                    <Text size="sm" style={{ fontWeight: "400", display: 'block' }}></Text>
                    <Image src={`/images/flags/china.svg`} style={{ marginBottom: "2px" }}></Image>
                </Space></StyledEntityNode>} />
            </TreeNode>
        </TreeNode>
        <TreeNode label={<StyledEntityNode><Space direction='vertical' style={{ textAlign: "center", margin: "2%" }}>
            <Text size="md" style={{ fontWeight: "600", display: 'block' }}>ACME India</Text>
            <Text size="sm" style={{ fontWeight: "400", display: 'block' }}></Text>
            <Image src={`/images/flags/india.svg`} style={{ marginBottom: "2px" }}></Image>
        </Space></StyledEntityNode>}>
        </TreeNode>

        <TreeNode label={<StyledEntityNode><Space direction='vertical' style={{ textAlign: "center", margin: "2%" }}>
            <Text size="md" style={{ fontWeight: "600", display: 'block' }}>ACME Israel</Text>
            <Text size="sm" style={{ fontWeight: "400", display: 'block' }}></Text>
            <Image src={`/images/flags/israel.svg`} style={{ marginBottom: "2px" }}></Image>
        </Space></StyledEntityNode>}>
            <TreeNode label={<StyledPENode><Space direction='vertical' style={{ textAlign: "center", margin: "2%" }}>
                <Text size="md" style={{ fontWeight: "600", display: 'block' }}>ACME Poland</Text>
                <Text size="sm" style={{ fontWeight: "400", display: 'block' }}></Text>
                <Image src={`/images/flags/poland.svg`} style={{ marginBottom: "2px" }}></Image>
            </Space></StyledPENode>} />
            <TreeNode label={<StyledPENode><Space direction='vertical' style={{ textAlign: "center", margin: "2%" }}>
                <Text size="md" style={{ fontWeight: "600", display: 'block' }}>ACME Ukraine</Text>
                <Text size="sm" style={{ fontWeight: "400", display: 'block' }}></Text>
                <Image src={`/images/flags/ukraine.svg`} style={{ marginBottom: "2px" }}></Image>
            </Space></StyledPENode>} />
        </TreeNode>

        <TreeNode label={<StyledEntityNode><Space direction='vertical' style={{ textAlign: "center", margin: "2%" }}>
            <Text size="md" style={{ fontWeight: "600", display: 'block' }}>ACME US</Text>
            <Text size="sm" style={{ fontWeight: "400", display: 'block' }}></Text>
            <Image src={`/images/flags/us.svg`} style={{ marginBottom: "2px" }}></Image>
        </Space></StyledEntityNode>}>
            <TreeNode label={<StyledEntityNode><Space direction='vertical' style={{ textAlign: "center", margin: "2%" }}>
                <Text size="md" style={{ fontWeight: "600", display: 'block' }}>ACME US</Text>
                <Text size="sm" style={{ fontWeight: "400", display: 'block' }}></Text>
                <Image src={`/images/flags/us.svg`} style={{ marginBottom: "2px" }}></Image>
            </Space></StyledEntityNode>} />
            <TreeNode label={<StyledEntityNode><Space direction='vertical' style={{ textAlign: "center", margin: "2%" }}>
                <Text size="md" style={{ fontWeight: "600", display: 'block' }}>ACME US</Text>
                <Text size="sm" style={{ fontWeight: "400", display: 'block' }}></Text>
                <Image src={`/images/flags/us.svg`} style={{ marginBottom: "2px" }}></Image>
            </Space></StyledEntityNode>} />
        </TreeNode>
    </Tree >
);

const OrgChart = () => {

    return (
        ExampleTree()
    );
}

export default OrgChart
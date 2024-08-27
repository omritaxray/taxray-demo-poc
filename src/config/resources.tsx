import type { IResourceItem } from "@refinedev/core";

import {
    ApartmentOutlined,
    ApiFilled,
    AppstoreOutlined,
    AuditOutlined,
    BankFilled,
    BookOutlined,
    CalendarOutlined,
    CarryOutOutlined,
    CompassOutlined,
    ContainerOutlined,
    CrownOutlined,
    DashboardOutlined,
    DollarOutlined,
    FileDoneOutlined,
    FileSearchOutlined,
    FullscreenOutlined,
    FundOutlined,
    FunnelPlotOutlined,
    GlobalOutlined,
    HomeFilled,
    ProjectOutlined,
    SafetyCertificateOutlined,
    ShopOutlined,
    TableOutlined,
    TeamOutlined,
} from "@ant-design/icons";

export const resources: IResourceItem[] = [
    {
        name: "Board Management",
        meta: {
            label: "Board Management",
            icon: <TeamOutlined color="#6039F5" />,
            // style: { color: "#C33940" }
        }
    },
    {
        name: "RiskManagement",
        meta: {
            label: "Risk Management",
            icon: <DashboardOutlined color="#6039F5" />,
            // style: { color: "#41479B" }
        }
    },
    {
        name: "WHT",
        meta: {
            parent: "RiskManagement",
            label: "WHT",
            icon: <ShopOutlined color="#6039F5" />,
            isMiddleChild: true
            // style: { backgroundColor: "#41479B11", color: "#41479B" }
        }
    },
    {
        name: "PE",
        meta: {
            parent: "RiskManagement",
            label: "PE",
            icon: <GlobalOutlined color="#6039F5" />,
            isMiddleChild: true
            // style: { backgroundColor: "#41479B11", color: "#41479B" }
        }

    },
    {
        name: "TP",
        meta: {
            parent: "RiskManagement",
            label: "TP",
            icon: <ShopOutlined color="#6039F5" />,
            isMiddleChild: true
            // style: { backgroundColor: "#41479B11", color: "#41479B" }
        }

    },
    {
        name: "VAT/GST",
        meta: {
            parent: "RiskManagement",
            label: "VAT/GST",
            icon: <ShopOutlined color="#6039F5" />,
            isMiddleChild: true
            // style: { backgroundColor: "#41479B11", color: "#41479B" }
        }

    },

    {
        name: "VendorsTransactions",
        meta: {
            parent: "WHT",
            label: "Procurement",
            icon: <ShopOutlined color="#6039F5" />,
            isMiddleChild: true
            // style: { backgroundColor: "#41479B11", color: "#41479B" }
        }

    },
    {
        name: "Customers Sales",
        meta: {
            parent: "WHT",
            label: "Sales",
            icon: <FunnelPlotOutlined color="#6039F5" />,
            isMiddleChild: true
        }
    },
    {
        name: "Outbound Expansions",
        meta: {
            parent: "PE",
            label: "Outbound Expansions",
            icon: <GlobalOutlined color="#6039F5" />,
            isMiddleChild: true
        }
    },
    {
        name: "Remote Workers & Relocations",
        meta: {
            parent: "RiskManagement",
            label: "TP",
            icon: <FullscreenOutlined color="#6039F5" />,
            isMiddleChild: true
        }
    },

    {
        name: "Cost Deductions",
        meta: {
            parent: "RiskManagement",
            label: "VAT/GST",
            icon: <DollarOutlined color="#6039F5" />,
            isMiddleChild: true
        }
    },
    {
        name: "Sales Tax",
        meta: {
            parent: "RiskManagement",
            label: "Sales Tax",
            icon: <DollarOutlined color="#6039F5" />,
            isMiddleChild: true
            // style: { backgroundColor: "#41479B11", color: "#41479B" }
        }

    },
    {
        name: "Credits",
        meta: {
            parent: "RiskManagement",
            label: "FTC",
            icon: <BankFilled color="#6039F5" />,
            isMiddleChild: true
        }
    },
    {
        name: "FTC - Pillar 1 (DST)",
        meta: {
            parent: "Credits",
            label: "FTC - Pillar 1 (DST)",
            icon: <BankFilled color="#6039F5" />,
            isMiddleChild: true
        }
    },
    {
        name: "Entities",
        meta: {
            label: "Entities",
            icon: <ApartmentOutlined color="#6039F5" />,
            style: { color: "#6039F5" }
        }
    },
    {
        name: "Entities - Org Chart",
        list: "/Entities/orgchart",
        meta: {
            label: "Org Chart",
            icon: <ApartmentOutlined color="#6039F5" />,
            parent: "Entities",
        }
    },
    {
        name: "Entities - Procurement",
        meta: {
            label: "Procurement",
            icon: <ApartmentOutlined color="#6039F5" />,
            parent: "Entities",
            isMiddleChild: true
        }
    },
    {
        name: "Entities - Transfer Pricing",
        meta: {
            label: "Transfer Pricing",
            icon: <ApartmentOutlined color="#6039F5" />,
            parent: "Entities",
            isMiddleChild: true
        }
    },
    {
        name: "transactions-vendors",
        list: "/Entities/procurement/transactions",
        meta: {
            parent: "Entities - Procurement",
            label: "Register",
            icon: <ApartmentOutlined color="#6039F5" />,
            isMiddleChild: false
        }
    },
    {
        name: "events",
        list: "/Entities/procurement/calendar",
        create: "/calendar/create",
        edit: "/calendar/edit/:id",
        show: "/Entities/procurement/calendar/show/:id",
        meta: {
            parent: "Entities - Procurement",
            label: "Statutory Filing & Reporting",
            icon: <CalendarOutlined />,
        },
    },
    {
        name: "Entities Prcurement - Transactions",
        list: "/Entities/transfer_pricing/transactions",
        meta: {
            parent: "Entities - Transfer Pricing",
            label: "Register",
            icon: <ApartmentOutlined color="#6039F5" />
        }
    },
    {
        name: "Due Diligence Report",
        meta: {
            label: "Due Diligence Report",
            icon: <FileDoneOutlined color="#6039F5" />,
            style: { color: "#6039F5", fontWeight: "600" }
        }
    },
    {
        name: "Due Diligence Report - Overview",
        list: "/Due Diligence Report/overview",
        meta: {
            parent: "Due Diligence Report",
            label: "Overview",
            icon: <ApartmentOutlined color="#6039F5" />,
            style: { color: "#A039F5", fontWeight: "200" }
        }
    },
    {
        name: "Tax Provision",
        meta: {
            label: "Tax Accounting",
            icon: <BookOutlined color="#6039F5" />,
            style: { color: "#4173CD" }
        }
    },

    {
        name: "Tax Accounting",
        meta: {
            parent: "Tax Provision",
            label: "Tax Provision",
            icon: <TableOutlined color="#6039F5" />,
            isMiddleChild: true
        }
    },
    {
        name: "FAS5",
        meta: {
            parent: "Tax Provision",
            label: "FAS 5",
            icon: <TableOutlined color="#6039F5" />,
            isMiddleChild: true
        }
    },
    {
        name: "ETR",
        meta: {
            parent: "Tax Provision",
            label: "ETR",
            icon: <TableOutlined color="#6039F5" />,
            isMiddleChild: true
        }
    },
    {
        name: "Tax Provision - Overview",
        list: "/Tax Provision/Tax Accounting/overview",
        meta: {
            parent: "Tax Accounting",
            label: "Overview",
            icon: <ApartmentOutlined color="#6039F5" />
        }
    },
    {
        name: "FAS5 - Overview",
        list: "/Tax Provision/FAS5/overview",
        meta: {
            parent: "FAS5",
            label: "Overview",
            icon: <ApartmentOutlined color="#6039F5" />
        }
    },
    {
        name: "Tax Audits & Reporting",
        meta: {
            label: "Tax Audits & Reporting",
            icon: <AuditOutlined color="#6039F5" />,
            style: { color: "#377803" }
        }
    },
    {
        name: "Tax Audits & Reporting - Overview",
        list: "/Tax Audits & Reporting/overview",
        meta: {
            parent: "Tax Audits & Reporting",
            label: "Overview",
            icon: <ApartmentOutlined color="#6039F5" />
        }
    },
    {
        name: "Tax Positions - Dashboard",
        list: "/Board Management/tax_positions_dashboard",
        meta: {
            parent: "Board Management",
            label: "Risk Management - Dashboard",
            icon: <FundOutlined color="#6039F5" />,
            style: { color: "#377803", fontWeight: "300" }
        }
    },
    {
        name: "dashboard",
        list: "/Tax Provision/ETR/dashboard",
        meta: {
            parent: "ETR",
            label: "ETR - Dashboard",
            icon: <FundOutlined color="#6039F5" />
        }
    },
    // {
    //     name: "653b35bc06b566cb800c",
    //     list: "/suppliers",
    //     show: "/suppliers/show/:id",
    //     create: "/suppliers/create",
    //     meta: {
    //         label: "Transactions",
    //         icon: <TableOutlined color="#6039F5" />
    //     }
    //     //Look at ""Add a Product" functionality, in Products, for the Direct Contract screen"
    //     //Look at order-id screen for ideas for Direct Contract screen
    //     //For Risk Rank Info screen, look at: StoresPage -> 'EditProduct'
    //     // Export: look at 'Export' at Orders page
    //     //For Integration Page look at "Cards" at the first page
    {
        name: "wht-vendors-dashboard",
        list: "/RiskManagement/WHT/VendorsTransactions/dashboard",
        meta: {
            parent: "VendorsTransactions",
            label: "Dashboard",
            icon: <FundOutlined color="#6039F5" />
        }
    },
    {
        name: "transactions-vendors",
        list: "/RiskManagement/WHT/VendorsTransactions/transactions",
        meta: {
            parent: "VendorsTransactions",
            label: "Register",
            icon: <TableOutlined color="#6039F5" />
        }
    },


    {
        name: "integrations",
        list: "/integrations",
        meta: {
            label: "Integrations",
            icon: <ApiFilled color="#6039F5" />
        }
    },

    // {
    //     name: "upload",
    //     list: "/upload",
    // },
    {
        name: "risk-levels",
        list: "/risk-levels",
        meta: {
            label: "Policies & Governance",
            icon: <SafetyCertificateOutlined color="#6039F5" />
        },
        show: "/risk-levels/show/:id",
    },
    {
        name: "contract-analysis",
        list: "/contract-analysis",
        meta: {
            label: "Contract Analysis",
            icon: <FileSearchOutlined color="#6039F5" />
        }
    },


    {
        name: "Customers Sales - Register",
        list: "/RiskManagement/Customers Sales/transactions",
        meta: {
            parent: "Customers Sales",
            label: "Register",
            icon: <TableOutlined color="#6039F5" />
        }
    },
    {
        name: "Outbound Expansions - Register",
        list: "/RiskManagement/PE/Outbound Expansions/transactions",
        meta: {
            parent: "Outbound Expansions",
            label: "Register",
            icon: <TableOutlined color="#6039F5" />
        }
    },
    {
        name: "Remote Workers & Relocations - Register",
        list: "/RiskManagement/Remote Workers & Relocations/transactions",
        meta: {
            parent: "Remote Workers & Relocations",
            label: "Register",
            icon: <TableOutlined color="#6039F5" />
        }
    },
    {
        name: "Sales Tax - Register",
        list: "/RiskManagement/Sales Tax/transactions",
        meta: {
            parent: "Sales Tax",
            label: "Register",
            icon: <TableOutlined color="#6039F5" />
        }
    },
    {
        name: "Cost Deductions - Register",
        list: "/RiskManagement/Cost Deductions/transactions",
        meta: {
            parent: "Cost Deductions",
            label: "Register",
            icon: <TableOutlined color="#6039F5" />
        }
    },
    {
        name: "FTC - Pillar 1 (DST) - Register",
        list: "/RiskManagement/Credits/FTC - Pillar 1 (DST)/transactions",
        meta: {
            parent: "FTC - Pillar 1 (DST)",
            label: "Register",
            icon: <TableOutlined color="#6039F5" />
        }
    },
    {
        name: "Customers Sales - Compliance",
        list: "/RiskManagement/Customers Sales/compliance",
        meta: {
            parent: "Customers Sales",
            label: "Statutory Filing & Reporting",
            icon: <CalendarOutlined color="#6039F5" />
        }
    },
    {
        name: "Outbound Expansions - Compliance",
        list: "/RiskManagement/PE/Outbound Expansions/compliance",
        meta: {
            parent: "Outbound Expansions",
            label: "Statutory Filing & Reporting",
            icon: <CarryOutOutlined color="#6039F5" />
        }
    },
    {
        name: "Remote Workers & Relocations - Compliance",
        list: "/RiskManagement/Remote Workers & Relocations/compliance",
        meta: {
            parent: "Remote Workers & Relocations",
            label: "Statutory Filing & Reporting",
            icon: <CalendarOutlined color="#6039F5" />
        }
    },
    {
        name: "Sales Tax - Compliance",
        list: "/RiskManagement/Sales Tax/compliance",
        meta: {
            parent: "Sales Tax",
            label: "Statutory Filing & Reporting",
            icon: <TableOutlined color="#6039F5" />
        }
    },
    {
        name: "Cost Deductions - Compliance",
        list: "/RiskManagement/Cost Deductions/compliance",
        meta: {
            parent: "Cost Deductions",
            label: "Statutory Filing & Reporting",
            icon: <CalendarOutlined color="#6039F5" />
        }
    },
    {
        name: "FTC - Pillar 1 (DST) - Compliance",
        list: "/RiskManagement/Credits/FTC - Pillar 1 (DST)/compliance",
        meta: {
            parent: "FTC - Pillar 1 (DST)",
            label: "Statutory Filing & Reporting",
            icon: <CalendarOutlined color="#6039F5" />
        }
    },

];
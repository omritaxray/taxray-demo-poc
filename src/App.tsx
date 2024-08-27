import { Authenticated, Refine } from "@refinedev/core";
import { themeConfig } from "./config/antd";
import {
    ThemedLayoutV2,
    notificationProvider,
    ErrorComponent,
    RefineThemes,
    AuthPage,
    useNotificationProvider,

} from "@refinedev/antd";
// import { newEnforcer } from "casbin";

// import { model, adapter } from "./accessControl";
import { SupplierList } from "pages/suppliers/list";
import { IntegrationList } from "pages/integrations/list";
import { UploadList } from "pages/upload/list";
import { SupplierCreate } from "pages/suppliers/create";
import { RiskLevelList } from "pages/risk-levels/list";
import { BlogPostList } from "pages/blog-posts/list";

import routerProvider, {
    CatchAllNavigate,
    DocumentTitleHandler,
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
//import dataProvider from "@refinedev/simple-rest";
import {
    AppwriteException,
    dataProvider,
    liveProvider,
    Account,
    Appwrite,
    Storage
} from "@refinedev/appwrite";
import { BrowserRouter, Routes, Route, Outlet, RouterProvider } from "react-router-dom";
import { AntdInferencer } from "@refinedev/inferencer/antd";
import { Title } from "components/Title"
import { appwriteClient, account } from "utility/appwriteClient";
import { authProvider } from "utility/authProvider";
import { Header } from "components/header"
import { ConfigProvider } from "antd";
import "@refinedev/antd/dist/reset.css";
import { ThemeProvider } from "@emotion/react";
import { RiskLevelShow } from "pages/risk-levels";
import { ContractAnalysis } from "pages/contract-analysis/contractAnalysis";
import DashboardPage from "pages/dashboard/list";
import ShowTransaction from "pages/suppliers/show";
import Login from "pages/login";
import { ApartmentOutlined, ApiFilled, CalendarOutlined, DashboardOutlined, ExperimentFilled, HomeFilled, TableOutlined, TabletFilled, UnorderedListOutlined } from "@ant-design/icons";
import TransactionsList from "pages/transactions/list";
import CalendarPageWrapper from "components/calendar/Wrapper";
import CalendarShow from "components/calendar/show";
import { resources } from "./config/resources";
import ComingSoon from "components/comingSoon";
import ContractDropZone from "pages/contract-analysis/contractDropZone";
import { CustomSider } from "components/sider";
import EntitiesTransactionsList from "pages/entities-transactions/list";
import WHTVendorsDashboard from "pages/wht-vendors-dashboard/list";
import WHTDashboardWrapper from "components/wht-vendors-dashboard/Wrapper";
import BoardDashboard from "components/board-dashboard/wrapper";
import OrgChart from "components/entities/org-chart";




const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ConfigProvider theme={themeConfig}>
                <Refine
                    routerProvider={routerProvider}
                    dataProvider={dataProvider(appwriteClient, {
                        databaseId: "653b35aca8b99e634a57",
                    })}
                    liveProvider={liveProvider(appwriteClient, {
                        databaseId: "653b35aca8b99e634a57",
                    })}
                    authProvider={authProvider}
                    resources={resources}
                    notificationProvider={useNotificationProvider}
                    options={{
                        liveMode: "auto",
                        syncWithLocation: true,
                        warnWhenUnsavedChanges: true,

                    }}

                >
                    <Routes>
                        <Route
                            element={
                                <Authenticated key="dashbaord"
                                    fallback={<CatchAllNavigate to="/login" />}
                                >

                                    <ThemedLayoutV2
                                        Sider={CustomSider}
                                        Header={Header}
                                        Title={Title}
                                    >
                                        <Outlet />
                                    </ThemedLayoutV2>
                                </Authenticated>
                            }
                        >
                            {/* <Route index element={<NavigateToResource resource="653b35bc06b566cb800c" />} /> */}
                            <Route index element={<NavigateToResource resource="dashboard" />} />
                            <Route path="Board Management">

                                <Route path="tax_positions_dashboard" >
                                    <Route index element={<BoardDashboard />} />

                                </Route>

                            </Route>
                            <Route path="RiskManagement" element={<Outlet />}>
                                <Route path="WHT" element={<Outlet />}>
                                    <Route path="VendorsTransactions" element={<Outlet />}>
                                        <Route path="dashboard" >
                                            <Route index element={<WHTDashboardWrapper ><Outlet /></WHTDashboardWrapper>} />

                                        </Route>
                                        <Route path="transactions" >
                                            <Route index element={<TransactionsList ><Outlet /></TransactionsList>} />

                                        </Route>
                                    </Route>
                                </Route>
                                <Route path="Customers Sales" element={<Outlet />}>
                                    <Route path="transactions" >
                                        <Route index element={<ComingSoon></ComingSoon>} />

                                    </Route>
                                    <Route path="compliance" >
                                        <Route index element={<ComingSoon></ComingSoon>} />
                                    </Route>
                                </Route>
                                <Route path="PE" element={<Outlet />}>
                                    <Route path="Outbound Expansions" element={<Outlet />}>
                                        <Route path="transactions" >
                                            <Route index element={<ComingSoon></ComingSoon>} />

                                        </Route>
                                        <Route path="compliance" >
                                            <Route index element={<ComingSoon></ComingSoon>} />
                                        </Route>
                                    </Route>
                                </Route>
                                <Route path="Remote Workers & Relocations" element={<Outlet />}>
                                    <Route path="transactions" >
                                        <Route index element={<ComingSoon></ComingSoon>} />

                                    </Route>
                                    <Route path="compliance" >
                                        <Route index element={<ComingSoon></ComingSoon>} />
                                    </Route>
                                </Route>
                                <Route path="Sales Tax" element={<Outlet />}>
                                    <Route path="transactions" >
                                        <Route index element={<ComingSoon></ComingSoon>} />

                                    </Route>
                                    <Route path="compliance" >
                                        <Route index element={<ComingSoon></ComingSoon>} />
                                    </Route>
                                </Route>
                                <Route path="Cost Deductions" element={<Outlet />}>
                                    <Route path="transactions" >
                                        <Route index element={<ComingSoon></ComingSoon>} />

                                    </Route>
                                    <Route path="compliance" >
                                        <Route index element={<ComingSoon></ComingSoon>} />
                                    </Route>
                                </Route>
                                <Route path="Credits" element={<Outlet />}>
                                    <Route path="FTC - Pillar 1 (DST)" element={<Outlet />}>
                                        <Route path="transactions" >
                                            <Route index element={<ComingSoon></ComingSoon>} />

                                        </Route>
                                        <Route path="compliance" >
                                            <Route index element={<ComingSoon></ComingSoon>} />
                                        </Route>
                                    </Route>
                                </Route>

                            </Route>
                            <Route path="Entities" element={<Outlet />}>
                                <Route path="orgchart" >
                                    <Route index element={<OrgChart ></OrgChart>} />

                                </Route>
                                <Route path="procurement" element={<Outlet />}>

                                    <Route path="transactions" >
                                        <Route index element={<EntitiesTransactionsList><Outlet /></EntitiesTransactionsList>} />

                                    </Route>
                                    <Route
                                        path="calendar"
                                        element={
                                            <CalendarPageWrapper>
                                                <Outlet />
                                            </CalendarPageWrapper>
                                        }
                                    >
                                        <Route path="show/:id" element={<CalendarShow />} />
                                        <Route index element={null} />
                                    </Route>
                                </Route>
                                <Route path="transfer_pricing" element={<Outlet />}>
                                    <Route path="transactions" >
                                        <Route index element={<ComingSoon></ComingSoon>} />

                                    </Route>
                                </Route>
                            </Route>
                            <Route path="Due diligence report" element={<Outlet />}>
                                {/* <Route path="blog-posts" element={<BlogPostList />} /> */}
                                <Route path="overview" >
                                    <Route index element={<ComingSoon></ComingSoon>} />
                                </Route>
                            </Route>
                            <Route path="Tax Provision" element={<Outlet />}>
                                {/* <Route path="blog-posts" element={<BlogPostList />} /> */}
                                <Route path="ETR" element={<Outlet />}>
                                    <Route path="dashboard" >
                                        <Route index element={<DashboardPage />} />

                                    </Route>
                                </Route>
                                <Route path="Tax Accounting" element={<Outlet />}>
                                    <Route path="overview" >
                                        <Route index element={<ComingSoon></ComingSoon>} />
                                    </Route>
                                </Route>
                                <Route path="FAS5" element={<Outlet />}>
                                    <Route path="overview" >
                                        <Route index element={<ComingSoon></ComingSoon>} />
                                    </Route>
                                </Route>
                            </Route>
                            <Route path="Tax Audits & Reporting" element={<Outlet />}>
                                {/* <Route path="blog-posts" element={<BlogPostList />} /> */}
                                <Route path="overview" >
                                    <Route index element={<ComingSoon></ComingSoon>} />
                                </Route>
                            </Route>
                            <Route path="suppliers">
                                <Route index element={<SupplierList />} />

                                {/* This means that page "Show/id is gonna be of element show, since that what it says in the resources" */}
                                <Route
                                    path="supplier"
                                    element={<AntdInferencer />}
                                />
                                <Route
                                    path="edit/:id"
                                    element={<AntdInferencer />}
                                />
                                <Route
                                    path="create"
                                    element={<SupplierCreate />}
                                />

                                <Route
                                    path="show/:id"
                                    element={<ShowTransaction />}
                                />
                            </Route>

                            {/* <Route path="transactions">
                                <Route index element={<TransactionsList ><Outlet /></TransactionsList>} />

                            </Route> */}

                            {/* <Route index element={<NavigateToResource resource="integrations" />} /> */}

                            <Route path="/contract-analysis" element={<ContractDropZone />} />
                            <Route path="integrations">
                                <Route index element={<IntegrationList ><Outlet /></IntegrationList>} />

                            </Route>

                            <Route path="upload">
                                <Route index element={<UploadList />} />

                            </Route>

                            <Route path="risk-levels">
                                <Route index element={<RiskLevelList />} />

                                {/* This means that page "Show/id is gonna be of element show, since that what it says in the resources" */}
                                <Route
                                    path="show/:id"
                                    element={<RiskLevelShow />}
                                />
                                <Route
                                    path="supplier"
                                    element={<AntdInferencer />}
                                />
                                <Route
                                    path="edit/:id"
                                    element={<AntdInferencer />}
                                />
                                <Route
                                    path="create"
                                    element={<SupplierCreate />}
                                />
                            </Route>

                        </Route>
                        <Route
                            element={
                                <Authenticated key="dashbaord" fallback={<Outlet />}>
                                    <NavigateToResource resource="dashboard" />
                                </Authenticated>
                            }
                        >
                            <Route
                                path="/login"
                                element={<Login />}
                            // element={<AuthPage type="login" formProps={{
                            //     initialValues: {
                            //         remember: false,
                            //         email: "omri@taxray.net",
                            //         password: "12345678",
                            //     },
                            // }} />}
                            />
                            <Route path="*" element={<ErrorComponent />} />
                        </Route>
                    </Routes>
                    <UnsavedChangesNotifier />
                </Refine>
            </ConfigProvider>
        </BrowserRouter >
    );
};

export default App;
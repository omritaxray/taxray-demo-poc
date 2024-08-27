export interface IProduct {
    id: number;
    name: string;
    isActive: boolean;
    description: string;
    images: IFile[];
    createdAt: string;
    price: number;
    category: ICategory;
    stock: number;
}

export interface IIntegration {
    id: number;
    title: string;
    status: boolean;
    imageURL: string;
    description: string;
}

export interface ICategory {
    id: number;
    title: string;
    isActive: boolean;
}

export interface IEventCategory {
    id: string;
    title: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    events: IEvent[];
}

export interface IStore {
    id: number;
    title: string;
    isActive: boolean;
    createdAt: string;
    address: IAddress;
    products: IProduct[];
}

export interface IEvent {
    id: string;
    title: string;
    description: string;
    startDate: DateTime;
    endDate: DateTime;
    color: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    eventCategory: IEventCategory;
}

export interface ISupplier {
    id: number;
    supplierName: string;
    supplierCountry: string;
    contractTitle: string;
    dealSize: number;
    risk: number;
    status: number;
    contact: string;
    action: number;
    avatar: ISupplierAvatar[];
}

export interface ITransactionVendor {
    vendorName: string;
    vendorCountry: string;
    contractTitle: string;
    dealSize: string;
    status: string;
    contract: string;
    w8: string;
    form1042s: string;
    relatedEntity: boolean;
    entity: string;
    whtRequired: boolean;
    riskLevel: IRiskLevel[];
    rate: string;
}

export interface ITaxIssue {
    id: number;
    tax: string;
    riskLevels: IRiskLevel[];
}

export interface IRiskLevel {
    id: number;
    documentId: number;
    title: string;
    accumulativeRisk: boolean;
    impact: number;
    impactOption: number;
    probability: number;
    probabilityOption: number;
    color: string;
    riskLevelActions: IRiskLevelAction[]
    taxIssue: ITaxIssue[];
}

export interface IRiskLevelAction {
    action: string; // 0: "Notify", 1: "Update"
    tool: string;
    notifyCommands: Enum;
    updateCommands: Enum;
    user: IUser[];
    actions: IActions[];
    riskLevel: IRiskLevel[];
    documentId: number;
}

export interface IActions {
    id: number; // 0: "Notify", 1: "Update"
    command: string;
}

export interface IUser {
    id: number;
    name: string;
    role: string;
    lastName: string;
}

export interface IRiskLevels {
    id: number;
    riskLevels: IRiskLevel[];
}

export interface ISuppliers {
    id: number;
    suppliers: IProduct[];
}
export interface ISupplierAvatar {
    name: string;
    url: string;
    size: number;
    uid: string;
}

export interface ISupplierVariable {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    avatar: UploadFile[];
}

export interface IQuestion {
    id: number;
    question: string;
    answer: string;
}

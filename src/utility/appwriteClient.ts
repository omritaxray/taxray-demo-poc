import { Account, Appwrite, Storage } from "@refinedev/appwrite";

const APPWRITE_URL = "https://cloud.appwrite.io/v1";
const APPWRITE_PROJECT = "64ea6567e57f4a43d7f9";

const appwriteClient = new Appwrite();

appwriteClient.setEndpoint(APPWRITE_URL).setProject(APPWRITE_PROJECT);
const account = new Account(appwriteClient);
const storage = new Storage(appwriteClient);

export { appwriteClient, account, storage };
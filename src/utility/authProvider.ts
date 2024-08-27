import { AuthBindings } from "@refinedev/core";

import { account } from "./appwriteClient";
import { AppwriteException } from "@refinedev/appwrite";

const authProvider: AuthBindings = {
    login: async ({ email, password }) => {
        try {

            await account.createEmailSession(email, password);
            window.console.log("Logging", "Success");
            return {
                success: true,
                redirectTo: "/",
            };
        } catch (e) {
            const { type, message, code } = e as AppwriteException;
            window.console.log("Logging", "Fail");
            return {
                success: false,
                error: {
                    message,
                    name: `${code} - ${type}`,
                },
            };
        }
    },
    logout: async () => {
        try {
            await account.deleteSession("current");
        } catch (error: any) {
            return {
                success: false,
                error,
            };
        }
        return {
            success: true,
            redirectTo: "/login",
        };
    },
    onError: async (error) => {
        console.error(error);
        // if (error.code === 404) {
        //     return {
        //         logout: true,
        //         redirectTo: "/login",
        //         error: new Error(error),
        //     }
        // }
        return { error };
    },
    check: async () => {
        try {
            const session = await account.get();

            if (session) {
                return {
                    authenticated: true,
                };
            }
        } catch (error: any) {
            return {
                authenticated: false,
                error: error,
                logout: true,
                redirectTo: "/login",
            };
        }

        return {
            authenticated: false,
            error: {
                message: "Check failed",
                name: "Session not found",
            },
            logout: true,
            redirectTo: "/login",
        };
    },
    getPermissions: async () => null,
    getIdentity: async () => {
        const user = await account.get();

        if (user) {
            return user;
        }

        return null;
    },
};

export { authProvider };
import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        clientId: "d7e833d6-02a9-45e3-a95e-8cf3ca4a8f3e",
        authority: "https://login.microsoftonline.com/common",
        redirectUri: "http://localhost:3000",
        postLogoutRedirectUri: "http://localhost:3000"
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true
    }
};

export const loginRequest = {
    scopes: ["user.read"]
};

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
}
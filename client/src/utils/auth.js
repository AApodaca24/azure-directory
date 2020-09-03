import * as msal from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: '7ac7882a-8b46-412d-8009-8f6455fa4dbc'
    }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);
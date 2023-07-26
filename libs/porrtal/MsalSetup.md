# MSAL (Microsoft Authentication Library) Setup

MSAL enables web applications to authenticate users using Azure AD work and school accounts (AAD), Microsoft personal accounts (MSA) and social identity providers like Facebook, Google, LinkedIn, Microsoft accounts, etc. through Azure AD B2C service. It also enables your app to get tokens to access Microsoft Cloud services such as Microsoft Graph.

## Create an Azure Account

To use the MSAL, you will need an Azure account.

Microsoft Azure offers scalable computing resources, advanced analytics, machine learning capabilities, vast storage options, global distribution, strong security features, and flexible pricing models, supporting business growth and innovation.

Build in the cloud with an [Azure free account](https://azure.microsoft.com/en-us/free).

Create, deploy, and manage applications across multiple clouds, on-premises, and at the edge

## Create the app registration

Once you have an Azure account setup, you will need to [register your web application](https://learn.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-app-registration#create-the-app-registration).

Start by completing the following steps to create the initial app registration.

1. Sign in to the [Azure portal](https://portal.azure.com/).
1. If you have access to multiple tenants, use the Directories + subscriptions filter  in the top menu to select the tenant in which you want to register an application.
1. Search for and select Azure Active Directory.
1. Under Manage, select App registrations > New registration.
1. Enter a Name for your application. Users of your app might see this name, and you can change it later.
1. Choose the Supported account types for the application. Do NOT enter a Redirect URI. For a description of the different account types, see the [Register an application](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app).
1. Select Register to create the app registration.

## Redirect URI

Next, [configure the app registration with a Redirect URI](https://learn.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-app-registration#redirect-uri-msaljs-20-with-auth-code-flow) to specify where the Microsoft identity platform should redirect the client along with any security tokens.

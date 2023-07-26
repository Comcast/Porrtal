# Keycloak Setup

Keycloak, an open-source identity and access management tool, provides robust, secure authentication and identity management with Single Sign-On (SSO) and Identity Brokerage capabilities, making it easier for users to access multiple applications securely with a single set of credentials. 

Keycloak supports various authentication protocols, including OIDC, SAML, and LDAP. It enables Multi-Factor Authentication (MFA), enhancing security by requiring users to provide additional verification.

Keycloak's user federation capability allows you to sync with your user database and maintain a consistent user context across your applications. It also includes social logins, letting users authenticate with their existing social media accounts.

Additionally, it offers fine-grained authorization services based on the standardized policy-based permissions. The user-friendly administrative console makes it easy to manage users, roles, permissions, and also to track user behavior. 

Lastly, Keycloak can be easily integrated into your existing application stack, making it a flexible solution for a wide range of identity management needs.

## Keycloak Getting Started

Keycloak offers a number of ["Getting Started"](https://www.keycloak.org/guides#getting-started) setup options including:

* [Docker](https://www.keycloak.org/getting-started/getting-started-docker)
* [Kubernetes](https://www.keycloak.org/getting-started/getting-started-kube)
* [OpenJDK](https://www.keycloak.org/getting-started/getting-started-zip)
* [OpenShift](https://www.keycloak.org/getting-started/getting-started-openshift)
* [Podman](https://www.keycloak.org/getting-started/getting-started-podman)

I used the [OpenJDK](https://www.keycloak.org/getting-started/getting-started-zip) approach above for development with Keycloak.  The steps in the Getting Started guide include:

* Install OpenJDK
* Download and Extract the Keycloak ZIP file
* Start Keycloak
* Create an "Admin User"
* Create a "Realm"
* Create a "Client App"
* Create a "Keycloak User"

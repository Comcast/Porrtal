/**
 * DOCUMENTATION
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: contact-email@something.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface AuthSendEmailConfirmationPost200Response { 
    email?: string;
    sent?: AuthSendEmailConfirmationPost200Response.SentEnum;
}
export namespace AuthSendEmailConfirmationPost200Response {
    export type SentEnum = 'true';
    export const SentEnum = {
        True: 'true' as SentEnum
    };
}



/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/applicationGatewayPrivateLinkResourcesMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a ApplicationGatewayPrivateLinkResources. */
export class ApplicationGatewayPrivateLinkResources {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a ApplicationGatewayPrivateLinkResources.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all private link resources on an application gateway.
   * @param resourceGroupName The name of the resource group.
   * @param applicationGatewayName The name of the application gateway.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationGatewayPrivateLinkResourcesListResponse>
   */
  list(resourceGroupName: string, applicationGatewayName: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationGatewayPrivateLinkResourcesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param applicationGatewayName The name of the application gateway.
   * @param callback The callback
   */
  list(resourceGroupName: string, applicationGatewayName: string, callback: msRest.ServiceCallback<Models.ApplicationGatewayPrivateLinkResourceListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param applicationGatewayName The name of the application gateway.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, applicationGatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationGatewayPrivateLinkResourceListResult>): void;
  list(resourceGroupName: string, applicationGatewayName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationGatewayPrivateLinkResourceListResult>, callback?: msRest.ServiceCallback<Models.ApplicationGatewayPrivateLinkResourceListResult>): Promise<Models.ApplicationGatewayPrivateLinkResourcesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        applicationGatewayName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ApplicationGatewayPrivateLinkResourcesListResponse>;
  }

  /**
   * Lists all private link resources on an application gateway.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationGatewayPrivateLinkResourcesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationGatewayPrivateLinkResourcesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApplicationGatewayPrivateLinkResourceListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationGatewayPrivateLinkResourceListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationGatewayPrivateLinkResourceListResult>, callback?: msRest.ServiceCallback<Models.ApplicationGatewayPrivateLinkResourceListResult>): Promise<Models.ApplicationGatewayPrivateLinkResourcesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ApplicationGatewayPrivateLinkResourcesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}/privateLinkResources",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.applicationGatewayName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGatewayPrivateLinkResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGatewayPrivateLinkResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

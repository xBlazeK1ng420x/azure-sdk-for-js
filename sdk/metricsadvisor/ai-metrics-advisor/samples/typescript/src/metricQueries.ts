// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample demonstrates querying methods related to metric.
 */
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

import { MetricsAdvisorKeyCredential, MetricsAdvisorClient } from "@azure/ai-metrics-advisor";

export async function main() {
  // You will need to set these environment variables or edit the following values
  const endpoint = process.env["METRICS_ADVISOR_ENDPOINT"] || "<service endpoint>";
  const subscriptionKey = process.env["METRICS_ADVISOR_SUBSCRIPTION_KEY"] || "<subscription key>";
  const apiKey = process.env["METRICS_ADVISOR_API_KEY"] || "<api key>";
  const metricId = process.env["METRICS_ADVISOR_METRIC_ID"] || "<metric id>";

  const credential = new MetricsAdvisorKeyCredential(subscriptionKey, apiKey);

  const client = new MetricsAdvisorClient(endpoint, credential);

  await listMetricSeriesDefinitions(client, metricId);
  await listMetricDimensionValues(client, metricId);
  await listEnrichmentStatus(client, metricId);
}

async function listMetricSeriesDefinitions(client: MetricsAdvisorClient, metricId: string) {
  console.log("Listing metric series definitions...");
  console.log("  with iterator");
  const iterator = client
    .listMetricSeriesDefinitions(metricId, new Date("08/05/2020"))
    .byPage({ maxPageSize: 2 });

  let result = await iterator.next();
  if (!result.done) {
    console.log("first page");
    for (const definition of result.value.definitions || []) {
      console.log(definition);
    }
    result = await iterator.next();
    if (!result.done) {
      console.log("second page");
      for (const definition of result.value.definitions || []) {
        console.log(definition);
      }
    }
  }

  // second approach
  // console.log("  with for-await-of loop");
  // for await (const def of client.listMetricSeriesDefinitions(metricId, new Date("08/05/2020"))) {
  //   console.log(def);
  // }
}

async function listEnrichmentStatus(client: MetricsAdvisorClient, metricId: string) {
  console.log("Listing metric enrichment status...");
  for await (const status of client.listMetricEnrichmentStatus(
    metricId,
    new Date("09/01/2020"),
    new Date("09/09/2020")
  )) {
    console.log(status.timestamp);
    console.log(status.status);
    console.log(status.message);
  }
}

async function listMetricDimensionValues(client: MetricsAdvisorClient, metricId: string) {
  console.log("Listing metric dimension values...");
  for await (const dv of client.listMetricDimensionValues(metricId, "Dim1")) {
    console.log(`  ${dv}`);
  }
}

main()
  .then((_) => {
    console.log("Succeeded");
  })
  .catch((err) => {
    console.log("Error occurred:");
    console.log(err);
  });

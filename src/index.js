import { fetchApiDefinition } from "./utils/api-definition-fetcher.js";

const buildOpenApiSpec = async () => {
  const json = await fetchApiDefinition();

  console.log(json);
};

buildOpenApiSpec();

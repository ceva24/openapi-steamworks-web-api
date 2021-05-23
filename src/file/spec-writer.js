import { writeFileSync, mkdir, existsSync } from "fs";

const writeOpenApiSpec = (openApiSpec) => {
    createOutputDirectoryIfNotExists();

    const json = createJson(openApiSpec);

    writeFileSync(getOutputFile(), json, errorFunction);
};

const createOutputDirectoryIfNotExists = () => {
    const outputLocation = getOutputLocation();

    if (!existsSync(outputLocation)) {
        mkdir(outputLocation, errorFunction);
    }
};

const getOutputLocation = () => {
    return `${process.cwd()}/${process.env.OUTPUT_LOCATION}`;
};

const getOutputFile = () => {
    return `${getOutputLocation()}/${process.env.OUTPUT_FILE}`;
};

const errorFunction = (error) => {
    if (error) console.log(error);
};

const createJson = (data) => {
    return JSON.stringify(data, null, 4);
};

export { writeOpenApiSpec, getOutputFile, createJson };

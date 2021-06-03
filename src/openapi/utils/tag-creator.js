const createTag = (text) => {
    return { name: createTagName(text) };
};

const createTagName = (text) => {
    return text.split("_")[0];
};

export { createTag, createTagName };

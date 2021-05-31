const isServiceInterface = (interfaceName) => {
    return interfaceName
        ? interfaceName.toLowerCase().endsWith("service")
        : false;
};

export { isServiceInterface };

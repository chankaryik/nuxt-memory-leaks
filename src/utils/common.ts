export const prependOrigin = (path: string, ssr = true) => {
    const config = useRuntimeConfig();
    if(!ssr) {
        return path;
    }
    if(path.length > 0 && path[0] === '/') {
        return `${config.cmsUrl}${path}`;
    }
    return `${config.cmsUrl}/${path}`;
}

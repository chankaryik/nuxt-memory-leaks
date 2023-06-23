export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
    const pathName = getRequestPath(event);
    const path = pathName.replace('/api', '');

    const response = await $fetch(path, {
        baseURL: runtimeConfig.cmsUrl
    })
    return response;
})
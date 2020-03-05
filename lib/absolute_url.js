import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const origin = publicRuntimeConfig.origin;

/**
 * Construct an absolute URL in both server and browser
 * environment.
 * 
 * @param {string} path The path
 */
const absoluteUrl = path => {
    const url = "http://localhost:3000" + path;
    return url;
};

export default absoluteUrl; 
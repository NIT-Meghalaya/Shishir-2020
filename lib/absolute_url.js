import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
// const origin = "Insert name of website"

/**
 * Construct an absolute URL in both server and browser
 * environment.
 * 
 * @param {string} path The path
 */
const absoluteUrl = path => {
    const url = "http://localhost:3000" + path;
    // const url = origin + path;   uncomment when name of website is ready
    return url;
};

export default absoluteUrl; 
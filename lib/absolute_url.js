import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const origin = "https://shishir2020.herokuapp.com"

/**
 * Construct an absolute URL in both server and browser
 * environment.
 * 
 * @param {string} path The path
 */
const absoluteUrl = path => {
    // const url = "http://localhost:3000" + path;
    // uncomment when name of website is ready
    const url = origin + path;
    return url;
};

export default absoluteUrl; 
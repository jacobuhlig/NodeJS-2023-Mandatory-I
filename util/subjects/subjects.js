import subjectsData from './subjects.json' assert { type: "json" }; // allows you to directly import JSON data as an object without having to explicitly parse it.


export function getSubjects() {
    return subjectsData.subjects;
}

export function getJSBasics() {
    return subjectsData['js-basics'];
}

export function getWebArchitecture() {
    return subjectsData['web-architecture']
}

export function getNodeAndPackages() {
    return subjectsData['node-and-packages'];
}

export function getSecurityAndPerformance() {
    return subjectsData['security-and-performance'];
}

export default {
    getSubjects,
    getJSBasics,
    getWebArchitecture,
    getNodeAndPackages,
    getSecurityAndPerformance
};
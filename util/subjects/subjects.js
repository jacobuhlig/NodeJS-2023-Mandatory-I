import subjectsData from './subjects.json' assert { type: "json" };

/* const { subjects } = subjectsData.subjects;
const { loops } = subjectsData.loops; */

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
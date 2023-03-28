import subjectsData from './subjects.json' assert { type: "json" };

/* const { subjects } = subjectsData.subjects;
const { loops } = subjectsData.loops; */

export function getSubjects() {
    return subjectsData.subjects;
}

export function getLoops() {
    return subjectsData.loops;
}

export function getAbout() {
    return subjectsData.about;
}

export default {
    getSubjects,
    getLoops,
    getAbout
};
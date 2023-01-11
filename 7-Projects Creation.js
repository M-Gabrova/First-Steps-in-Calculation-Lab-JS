function projectCre(input) {
    //The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s.

    let nameArch = (input[0]);
    let projects = Number(input[1]);
    let hours = projects * 3;
    console.log(`The architect ${nameArch} will need ${hours} hours to complete ${projects} project/s.`);
}
projectCre(["George", "4"])
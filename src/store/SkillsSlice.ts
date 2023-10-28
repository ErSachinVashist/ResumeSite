import { createSlice } from '@reduxjs/toolkit';
import IMAGES from '../assets/images/IMAGES'

const commSkills = [
    { title: 'Client Management', score: '70' },
    { title: 'Team Management', score: '60' },
    { title: 'Agile Development', score: '80' },
    { title: 'Process Adaptability', score: '90' },
    { title: 'Continuous Learning', score: '75' },
],
    techSkills = [
        { icon: IMAGES.react, title: 'UI Development', desp: 'Embracing ReactJs powers to build custom SPA websites with the help of CSS libraries like Bootstrap and Material UI and various React plugins like React-Router, React-Redux etc.' },
        { icon: IMAGES.node, title: 'APIs Development', desp: 'Built NodeJs server applications single-handedly along with UI to connect with database, manipulate files-system, exposing apis, authentication and authorization and much more.' },
        { icon: IMAGES.device, title: 'Responsive Designs', desp: 'Built products compatible with different handheld devices with seamless user experience and increase accessibility' },
        { icon: IMAGES.sharepoint, title: 'Sharepoint Development', desp: 'Built a number of Sharepoint Websites for clients using cutting edge SPFX technology, which uses React and Typescript for UI and office365 for data and app hosting' },
        { icon: IMAGES.test, title: 'Testing Applications', desp: 'Built test cases with the help of Jest and Enzyme for React Application and added testing step in Gitlab CI-CD before deploying to production' },
        { icon: IMAGES.github, title: 'Source Code Management', desp: 'Experience in managing Git Repositories with commnad line and deploying code with CI/CD pipelines to servers.' },
        { icon: IMAGES.cloud, title: 'Cloud Computing', desp: 'Hands-on experience in AWS services like S3, Lambda, ECS, Cloud Watch, Media Services,SQS,SNS, EKS etc. and build various Nodejs workers to communicate with these services' },
        { icon: IMAGES.database, title: 'Database', desp: 'Hands-on experience on databases like MongoDb and MySql and exposing APIs with NodeJs to perform CRUD operations on collections or tables' },
        { icon: IMAGES.devops, title: 'Dev-Ops Technologies', desp: 'Diverse Experience in Dev-Ops Technologies like Gitlab CI-CD for code deployment, Docker for app hosting, kubernetes for containers management and Bash-Scripting-Rundeck-Ansible for making automation scripts' },
        { icon: IMAGES.linux, title: 'Linux', desp: 'Hands-on knowledge in server management, debugging and testing security' },
    ]


const skillsSlice = createSlice({
    name: 'skillsData',
    initialState: { commSkills, techSkills },
    reducers: {

    }
})

export default skillsSlice.reducer
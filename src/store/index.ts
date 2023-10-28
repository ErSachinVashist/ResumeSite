import { configureStore } from '@reduxjs/toolkit'
import headerRed from './HeaderSlice';
import skillsRed from './SkillsSlice';
import qualRed from './QualificationSlice';
import workRed from './WorkSlice';
import contactRed from './ContactSlice'
const store = configureStore({
    reducer: {
        headerLinks: headerRed,
        skillsData: skillsRed,
        qualData: qualRed,
        workData: workRed,
        contactData: contactRed,
    },
})

export default store;
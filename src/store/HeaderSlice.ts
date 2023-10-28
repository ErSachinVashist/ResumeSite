import { createSlice } from '@reduxjs/toolkit'

const scrollDiv = (activeLink, state) => {
    let al = activeLink || 'homeDiv', elm = document.getElementsByClassName(al)[0];
    elm.scrollTop = 0;
    setTimeout(() => {
        elm.scrollIntoView({ behavior: 'smooth' })
    }, activeLink ? 0 : 500)

    state.links.forEach((item) => {
        item.active = item.linkDiv === al
    })
}

const headerSlice = createSlice({
    name: 'headerLinks',
    initialState: {
        links: [
            { title: 'Home', linkDiv: 'homeDiv', active: true },
            { title: 'About Me', linkDiv: 'aboutDiv' },
            { title: 'Skills', linkDiv: 'skillsDiv' },
            { title: 'Qualifications', linkDiv: 'qualDiv' },
            { title: 'Portfolio', linkDiv: 'workDiv' },
            { title: 'Contact', linkDiv: 'contactDiv' }
        ]
    },
    reducers: {
        makeActive: (state, action) => {
            scrollDiv(action.payload, state)
        },
        goUpSection: (state, action) => {
            let upIndex = (state.links.findIndex(link => link.active)) - 1,
                activeLink = state.links[upIndex].linkDiv;
            scrollDiv(activeLink, state)
        }
    }
})

export const { makeActive, goUpSection } = headerSlice.actions

export default headerSlice.reducer
import { createSlice } from '@reduxjs/toolkit';

const qualData = [
    { title: 'Senior Secondary Cert.', batch: 'APRIL 2010', inst: 'GRJPS, DELHI', desp: 'Scored 8.6 CGPA' },
    { title: 'Higher Secondary Cert.', batch: 'APRIL 2012', inst: 'GRJPS, DELHI', desp: 'Scored 80% with Science Stream and participated in various coding Olympiads' },
    { title: 'Bachelor of Tech. (CSE)', batch: 'APRIL 2012-2016', inst: 'PDM COLLEGE OF ENGG , HARYANA', desp: 'Scored 70% and done internship in Honda Car limited, Noida as Javascript Trainee' },
]

const qualSlice = createSlice({
    name: 'qualData',
    initialState: { qualData },
    reducers: {

    }
})

export default qualSlice.reducer
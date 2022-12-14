import { atom } from "recoil"

export const lightState = atom({
    key: 'light',
    default: {
        mode: 'light',
        navColor: 'white',
        bgColor: 'white',
        textColor: '#3F3F3F',
        elementColor: '#FCFCFC'
    }
})

export const darkState = atom({
    key: 'dark',
    default: {
        mode: 'dark',
        navColor: '#232323',
        bgColor: '#3F3F3F',
        textColor: 'white',
        elementColor: '#494949',
    }
})

export const modeState = atom({
    key: 'isMode',
    default: lightState,
})
import {lazy} from 'react'

export const AboutPageAsync = lazy( () => new Promise(resolve => {
    // @ts-ignore
    // искусственная задержка на импорт компонента
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}))
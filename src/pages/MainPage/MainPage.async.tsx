import {lazy} from 'react'

export const MainPageAsync = lazy( () => new Promise(resolve => {
    // @ts-ignore
    // искусственная задержка на импорт компонента
    setTimeout(() => resolve(import('./MainPage')), 1500)
}))
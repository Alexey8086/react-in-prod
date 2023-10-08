type Mods = Record<string, boolean | string>

// функция принимает 3 параметра: основной класс, объект классов модификаторов {hovered: true, selected: false},
// и третий параметр массив просто классов, которые надо добавить
// Возвращает: строка классов, которые добавляются к html элементу
export function classNames(cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods).filter(([className, value]) => Boolean(value))
        .map(([className]) => className)
    ]
        .join(' ')
}

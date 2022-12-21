

export const changeCssVariables = theme => {
    const root = document.querySelector(':root')

    //root.style.setProperty('--theme-default-header', `var(--theme-${theme}-header)`)
   // root.style.setProperty('--theme-default-bgimage', `var(--theme-${theme}-bgimage)`)

    const cssVariables = ['header', 'bgimage']

    cssVariables.forEach(el => {
        root.style.setProperty(
            `--theme-default-${el}`,
            `var(--theme-${theme}-${el})`
        )
    })
}
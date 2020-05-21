export type initialStateApp = {
    title: string,
    cursesName: Array<string>
}

let initialState: initialStateApp = {
    title: 'Study-Now',
    cursesName: ['ШКОЛА', 'ВУЗ', 'IT']
}

const appReducer = (state = initialState, action: any): initialStateApp => {
    switch (action) {
        default:
            return state;
    }
}

export default appReducer;
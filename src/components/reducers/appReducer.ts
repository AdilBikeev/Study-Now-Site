type initialStateApp = {
    title: string
}

let initialState: initialStateApp = {
    title: 'Study-Now'
}

const appReducer = (state = initialState, action: any): initialStateApp => {
    switch (action) {
        default:
            return state;
    }
}

export default appReducer;
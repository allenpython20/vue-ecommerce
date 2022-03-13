export default () => ({
    isLoading:true,
    products: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'loremmmmmmmmmmmmmm',
            picture:null
        },
        {
            id: new Date().getTime()+1000,
            date: new Date().toDateString(),
            text: 'loremmmmmmmmmmmmmm2',
            picture:null
        },
        {
            id: new Date().getTime()+2000,
            date: new Date().toDateString(),
            text: 'loremmmmmmmmmmmmmm3',
            picture:null
        }
    ]
})
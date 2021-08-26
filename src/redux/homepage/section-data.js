const getSameData = (model,title) => ({
    id:model,
    title:title,
    description:"Order Online For Touchless Delivery",
    backgroundImg:`${model}.jpg`,
    leftBtnText:'Custom Order',
    rightBtnText:'Existing inventory'
})

const sectionData = {
    modelS:getSameData('model-s','Model S'),
    modelY:getSameData('model-y','Model Y'),
    model3:getSameData('model-3','Model 3'),
    modelX:getSameData('model-x','Model X'),
    SolarPanel:{
        ...getSameData('solar-panel','Lowest Cost Solar Panels in America'),
        description:'Money-back guarantee',
        leftBtnText:'Order now',
        rightBtnText:'Learn more'
    },
    SolarNewRoof: {
        ...getSameData('solar-roof','Solar for New Roofs'),
        description:'Solar Roof Costs Less Than a New Roof Plus Solar Panels',
        leftBtnText:'Order now',
        rightBtnText:'Learn more'
    },
    Accessories: {
        ...getSameData('accessories','Accessories'),
        description:'',
        leftBtnText:'Shop now',
        rightBtnText:''
    }
}

export default sectionData;
export const selectBike = (allBikes) => {
    console.log("you have selected " + allBikes.bikeName)
    return{
        type: "SELECTED_BIKE",
        allBikes
    }
}
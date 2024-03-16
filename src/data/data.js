export const mapData = (data) => {
    // const mapOverData = data?.map((ob) => (
    //     {
    //         id: ob?._id,
    //         fullName: ob?.fullName || '',
    //         age: ob?.age || '',
    //         city: ob?.city || '',
    //     }))
    const mapOverData = [
        {id: 1, fullName:'Akanksha', age: 25, city: 'Mathura'},
        {id: 2, fullName:'Ram', age: 25, city: 'Noida'},
        {id: 3, fullName:'Siddhi', age: 25, city: 'Delhi'},
        {id: 4, fullName:'Raghav', age: 25, city: 'Gurgaon'},
        
    ]
    return mapOverData;
}
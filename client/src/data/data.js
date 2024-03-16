export const mapData = (data) => {
    const mapOverData = data?.map((ob) => (
        {
            id: ob?._id,
            fullName: ob?.fullName || '',
            age: ob?.age || '',
            city: ob?.city || '',
        }))
    return mapOverData;
}

const ListUsers = async() => {
    try {
        const response = await fetch(`/api/v1/users`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error:', error);
        return error;
    }
}

export default ListUsers;
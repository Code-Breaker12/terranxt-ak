
const DeleteUser = async (id) => {
    try {
        const response = await fetch(`/api/v1/users/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete user');
        }
        const data = await response.json();
        console.log('User deleted:', data);
        return data;
    } catch (error) {
        console.error('Error:', error);
        return error;
    }
};
export default DeleteUser;
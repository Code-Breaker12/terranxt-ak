
const CreateUser = async(formData) => {
    try {
        const body =formData;
        const response = await fetch('/api/v1/users', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}

export default CreateUser;


export const registerUser = async(req, res) => {
    try {

        const {firstName, lastName, email, password} = req.body;
        
        console.log(firstName, lastName, email, password);

    } catch (error) {
        
    }
}


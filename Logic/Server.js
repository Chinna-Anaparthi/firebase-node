const Database = require("../Connection/database")
const DataPost = async (req, res) => {
    try {
        const newUser = new Database({
            id: req.body.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const DataGet = async (req, res) => {
    try {
        const users = await Database.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const DataPut = async (req, res) => {
    const userId = req.params.id;
    try {
        const userToUpdate = await Database.findOne({ id: userId });
        if (!userToUpdate) {
            return res.status(404).json({ message: "User not found" });
        }

        userToUpdate.firstName = req.body.firstName;
        userToUpdate.lastName = req.body.lastName;
        await userToUpdate.save();
        res.status(200).json(userToUpdate);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const DataDelete = async (req, res) => {
    const userId = req.params.id;
    try {
        const deleteResult = await Database.deleteOne({ id: userId });
        if (deleteResult.deletedCount === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User data successfully deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


module.exports = { DataPost, DataGet, DataPut, DataDelete }
// import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3001/users');
    await pause(2000);
    // console.log(pause_output)
    return response.data;
});

const createUser = createAsyncThunk('users/create', async (userName) => {
    // Assuming `userData` is an object containing user information
    const userData = {
        // name: faker.name.fullName()
        name: userName
    } 
    const response = await axios.post('http://localhost:3001/users', userData);
    await pause(2000);
    return response.data;
});

const deleteUser = createAsyncThunk('users/delete', async (userId) => {
    // Assuming `userId` is the ID of the user you want to delete
    const response = await axios.delete(`http://localhost:3001/users/${userId}`);
    console.log(response)
    await pause(2000);
    return userId;
}); 

const pause = (duration) => {
    return new Promise((resolve) => {
        // console.log(resolve);
        setTimeout(resolve, duration);
    });
};

export { fetchUsers,  createUser, deleteUser } 
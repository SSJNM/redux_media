import { createSlice } from '@reduxjs/toolkit'
import { fetchUsers,createUser, deleteUser } from '../thunks'

const usersSlice = createSlice({
    name: "users",
    initialState: {
        isLoading: false,
        data: [],
        error: null
    },
    extraReducers(builder){
        builder.addCase(fetchUsers.pending,(state,action) => {
            state.isLoading = true
        });
        builder.addCase(fetchUsers.fulfilled,(state,action) => {
            state.isLoading = false
            state.data = action.payload
        });
        builder.addCase(fetchUsers.rejected,(state,action) => {
            state.isLoading = false
            state.error = action.error
        });
        builder.addCase(createUser.pending,(state,action) => {
            state.isLoading = true
        });
        builder.addCase(createUser.fulfilled,(state,action) => {
            state.isLoading = false
            state.data.push(action.payload)
        });
        builder.addCase(createUser.rejected,(state,action) => {
            state.isLoading = false
            state.error = action.error
        });
        builder.addCase(deleteUser.pending,(state,action) => {
            state.isLoading = true
        });
        builder.addCase(deleteUser.fulfilled,(state,action) => {
            state.isLoading = false
            state.data = state.data.filter((user) => action.payload !== user.id)
        });
        builder.addCase(deleteUser.rejected,(state,action) => {
            state.isLoading = false
            state.error = action.error
        });    
    }
})

// const usersReducer  = usersSlice.reducer
// export {usersReducer}

export const usersReducer  = usersSlice.reducer


// When to use { usersReducer }
// In above case what will happen is de-structuring so That case is not good
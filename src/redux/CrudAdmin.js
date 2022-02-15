import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data:[],
}

const CrudAdmin = createSlice({
  name: "crud",
  initialState,
  reducers: {
    AddData:(state,action)=>{
        state.data.push(action.payload);
    },
    Deletedata:(state,action)=>{
    const newarry = state.data.filter((user)=>user.id!==action.payload.id)
    return newarry
      
    },
  }
});

export const { AddData,Deletedata} = CrudAdmin.actions

export default CrudAdmin.reducer
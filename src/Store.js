import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './redux/CounterSlice'
import CrudAdmin, { Deletedata } from './redux/CrudAdmin'

export const store = configureStore({
  reducer: {
    counter:CounterSlice,
    crud:CrudAdmin,
    userdelete:Deletedata,

  },
})
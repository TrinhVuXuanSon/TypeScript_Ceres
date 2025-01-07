import { configureStore } from "@reduxjs/toolkit"; 
//configureStore là hàm tạo ra store Redux với các thiết lập sẵn
import todoReducer from "./todoSlice";

export const store = configureStore({
    reducer: {
        todos: todoReducer
    }
});

export type RootState = ReturnType<typeof store.getState>; //trả về toàn bộ state của Redux
export type AppDispatch = typeof store.dispatch; //gửi dispatch các action đến reducer
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

 
interface ChatMessage {
  id: number;
  content: string;
  type: "message" | "reply";
  replyTo?: string;
}

interface ChatState {
  messages: ChatMessage[];
  replyTarget: boolean;
  replyToId?: string;  
}

const initialState: ChatState = {
  messages: [],
  replyTarget: false,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages.push(action.payload);
    },
    setReplyTarget: (state, action: PayloadAction<string>) => {
      state.replyTarget = true;
      state.replyToId = action.payload;
    },
    clearReplyTarget: (state) => {
      state.replyTarget = false;
      state.replyToId = undefined;
    },
  },
});

export const { addMessage, setReplyTarget, clearReplyTarget } = chatSlice.actions;
export default chatSlice.reducer;

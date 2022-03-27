export enum MessageEnumType {
    error="error",
    success="success",
    info="info",
    warning="warning",
  }

export interface MessageType {
    type: MessageEnumType;
    message: string;
}

export interface MessageState {
    message: MessageType|null;
}

export const initialMessageState: MessageState = {
    message: null,
};

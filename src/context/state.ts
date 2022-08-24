import { MarkdownDocument } from 'models';

export type ContextState = {
    documents: MarkdownDocument[];
};

export const initialState: ContextState = {
    documents: []
};

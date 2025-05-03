export interface UserMarketing {
    email: string;
    state: string;
}

export type UpdateMarketing = Omit<UserMarketing, 'email' | 'createAt'> & {
    email: string;
    password: string;
};
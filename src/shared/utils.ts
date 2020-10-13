import {compare} from 'bcryptjs';



export const comparePasswords = async (userPassword, currentPassword) => {
    return await compare(currentPassword, userPassword);
  };

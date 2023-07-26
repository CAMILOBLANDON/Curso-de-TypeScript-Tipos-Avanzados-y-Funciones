export enum ROLES {
  ADMIN = 'admin',
  CUSTOMER = 'customer',
  SELLER = 'seller',
}
export type User = {
  username: string;
  role: ROLES;
};

const nicoUser: User = {
  username: 'nico',
  role: ROLES.SELLER,
};

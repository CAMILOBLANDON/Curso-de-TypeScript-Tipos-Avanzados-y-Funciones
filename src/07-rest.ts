import { User, ROLES } from './01-enums';
const currentUser: User = {
  username: 'tomas',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
};

console.log(checkAdminRole());
export const checkRole = (user: User) => {
  if (user.role === ROLES.ADMIN) {
    return `${user.username} es admin`;
  } else if (user.role === ROLES.CUSTOMER) {
    return `${user.username} es customer`;
  } else {
    return `${user.username} es seller`;
  }
};
const NewUser: User = {
  username: 'Pedro',
  role: ROLES.SELLER,
};

console.log(currentUser);
console.log(checkRole(NewUser));

export const checkRoles = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }
  return false;
};
const rta2 = checkRoles(ROLES.ADMIN, ROLES.SELLER);
console.log('checkRole ', rta2);

export const checkRolesV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};
const rta3 = checkRolesV2([ROLES.ADMIN, ROLES.SELLER]);
console.log('checkRole V2', rta3);

export const checkRolesV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};
const rta4 = checkRolesV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('checkRole V3', rta4);

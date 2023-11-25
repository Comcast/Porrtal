export * from './porrtalRole.service';
import { PorrtalRoleService } from './porrtalRole.service';
export * from './uploadFile.service';
import { UploadFileService } from './uploadFile.service';
export * from './usersPermissionsAuth.service';
import { UsersPermissionsAuthService } from './usersPermissionsAuth.service';
export * from './usersPermissionsUsersRoles.service';
import { UsersPermissionsUsersRolesService } from './usersPermissionsUsersRoles.service';
export const APIS = [PorrtalRoleService, UploadFileService, UsersPermissionsAuthService, UsersPermissionsUsersRolesService];

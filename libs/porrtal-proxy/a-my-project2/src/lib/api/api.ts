﻿/*
Copyright 2023 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
export * from './porrtalRole.service';
import { PorrtalRoleService } from './porrtalRole.service';
export * from './uploadFile.service';
import { UploadFileService } from './uploadFile.service';
export * from './usersPermissionsAuth.service';
import { UsersPermissionsAuthService } from './usersPermissionsAuth.service';
export * from './usersPermissionsUsersRoles.service';
import { UsersPermissionsUsersRolesService } from './usersPermissionsUsersRoles.service';
export const APIS = [PorrtalRoleService, UploadFileService, UsersPermissionsAuthService, UsersPermissionsUsersRolesService];
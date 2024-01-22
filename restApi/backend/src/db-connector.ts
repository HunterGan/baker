import { DataSource, InsertResult } from "typeorm";
import { Permission } from "./entities/permission.entity";
import { Role } from "./entities/role.entity";

export const dataSource = new DataSource({
    type: 'mariadb',
    host: process.env.DS_HOST,
    port: 3306,
    username: process.env.DS_USER,
    password: process.env.DS_PASS,
    database: process.env.DS_DB,
    entities: [process.env.DS_ENTITIES as string],
    logging: false,
    synchronize: true
  });

export const Manager = dataSource.manager
export const UserRepository = dataSource.getRepository('user')

dataSource
  .initialize()
  .then(async () => {
    // create role permissions
    const permissionRepository = Manager.getRepository(Permission)

    const perms = [
        'view_users',
        'edit_users',
        'view_roles',
        'edit_roles',
        'view_products',
        'edit_products',
        'view_orders',
        'edit_orders'
    ]

    let permissions = []

    // insert permissions into Permission table
    for (let perm of perms) {
      const result = await permissionRepository.upsert(
        { name: perm },
        ['name']
      );
      console.log(result)
      permissions.push(result);
    }

      // assign permissions to roles
      const roleRepository = Manager.getRepository(Role)
      // admin can do it all
      // insert or update
// @ts-ignore-next-line
      await roleRepository.upsert({ name: 'Admin', permissions }, ['name'])

      // editor can do all but to edit roles
      delete permissions[3]
      // insert or update
// @ts-ignore-next-line
      await roleRepository.upsert({ name: 'Editor', permissions }, ['name'])
          
      // viewer cannot edit anything
      delete permissions[1]
      delete permissions[5]
      delete permissions[7]
      // insert or update
// @ts-ignore-next-line
      await roleRepository.upsert({ name: 'Viewer', permissions }, ['name'])

      console.log('INFO :: Data Source has been initialized');
  })
  .catch((err) => {
      console.error('ERROR :: Data Source initialization error', err);
  })

export default dataSource;
# megastar-admin

This project is admin panel for transport company created by ReactJS with create-react-app. Application is communicating with express backend by REST API and gives functionality for authentication and managing all CRUD operations on data models. Application provides specific user interface for every data types.

## Demo

Demo is available in this location:

[https://megastar.kamilzak.pl/admin](https://megastar.kamilzak.pl/admin)

```
login: admin
password: test123
```

## Built with

- **ReactJS**
- **Typescript**
- **Redux / Toolkit**
- **React Router**
- **Styled Components**

## Features

- **Authentication** - api requests are sending by [axios](https://www.npmjs.com/package/axios) with interceptor for authentication by token and automatic refresh token.

- **Toasts** - application shows user toast messages with any message returns from server. Redux is responsible for managing toasts messages.

- **Dynamic photo upload** - photos can be uploaded instead by choose from disk also by drag and drop feature.

- **Confirm modal** - application shows user confirm modal for important operations like deleting data.

- **Drag and drop** - user can customize order of data by drag and drop. This feature is provided by [react-dnd](https://www.npmjs.com/package/react-dnd) library.

- **Responsive** - admin panel also can be used on mobile devices.

- **Linting and formating** - project includes configuration for [ESLint](https://www.npmjs.com/package/eslint) linter and [Prettier](https://www.npmjs.com/package/prettier) code formatter. This project includes this packages for use them in pre commit hook by [husky](https://www.npmjs.com/package/husky).

- **Automatic deployment** - Project uses [Github Actions](https://github.com/features/actions) for automation deployment on VPS server.

## Development

Before run development server make sure that express server which provides api is actually running on localhost at port 5555

To run development server type:

```sh
npm start

```

By default server starts at 3000 port.

# Production

To generate production build of application type:

```sh
npm run build
```

All files will be generated in _build_ directiory.

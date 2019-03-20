# node-sequelize
node -v  - v8.9.4
npm -v   - 5.6.0

1. mkdir  <dir_name>
2. cd <dir_name>
3. npm init
4. npm install --save express body-parser morgan
5. create new file in root app.js 
6. nodemon app.js
7. npm install -g sequelize-cli ( global ) 
8. npm install --no-bin-links sequelize --save
9. npm install --no-bin-links mysql2 --save
10. sequelize init
11. sequelize model:create --name Company --attributes name:string
12. sequelize db:migrate

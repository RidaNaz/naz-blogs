1. npm install next-auth
2. npm install swr
3. npm install firebase
4. npm install react-quill quill                   <!-- for text editing  -->
5. npm install @prisma/client @auth/prisma-adapter
6. npm install prisma --save-dev
7. npx prisma init --datasource-provider mongodb   <!-- creates prisma folder with schema -->
8. npx prisma generate                             <!-- generate prisma client (in node modules file)  -->
9. npx prisma studio                               <!-- (http://localhost:5555) -->
10. npx prisma db push                             <!-- To sync your schema changes with MongoDB -->
11. npx prisma migrate reset
12. npx prisma cache clear
13. npm install mongodb      <!-- uninstalled, because I am using mongodb database through Prisma ORM -->
<!-- To regenerate prisma client delete the `.prisma` folder inside your node_modules directory -->


Best Practices for Setting `NEXTAUTH_SECRET`
- Generate a Strong Secret by running this command on Git Bash terminal:
```bash
openssl rand -base64 32
```

Google Credentials
- Go to `https://console.cloud.google.com/` -> credentials

GitHub Credentials
- GitHub -> setting -> Developers setting -> O Auth

console.firebase.google.com -> signin
- make a project
- Add firebase to your web
- Go to build -> storage -> test mode
- paste the given code in `firebase.js`


mongodb_url:
- cloud.mongodb.com -> signin
- make sure user name is correct in mongodb datbase url.
- replace `<password>` with actual password.
- explicitly add database name after `mongodb.net/`

Add this line on script section on `package.json`:
```json
"postinstall": "prisma generate"
```

To add Blogs:
- delete previous `.prisma` file node modules.
- run `npx prisma generate` and `npx prisma studio`
- visit the given url for adding / editing.
- Add / edit and save from prisma studio, it will automatically save in your mongodb and reflect these changes in your deployed site without doing any addditional steps.

To delete Blogs:
- Go to Mongodb Atlas -> Clusters -> Select your cluster (Cluster0) -> collections
- Here you will find all the posts, comment, etc.
- Delete from here, it will automatically delete from prisma studio.
![TRYBE_BLOGS_API](https://user-images.githubusercontent.com/20843662/203419646-2a9e4cbf-79a3-4dbd-bb20-6cf2dfc9a7a6.png)

![GitHub top language](https://img.shields.io/github/languages/top/tcorrea/blogs-api)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-Profile-informational?style=flat-square&logo=linkedin&logoColor=white&color=ffb86c)](https://www.linkedin.com/in/thiago-de-carvalho-correa/)

# Descrição

Neste projeto foi desenvolvido uma API e um banco de dados para a produção de conteúdo para um blog!

Aplicação em Node.js usando o pacote sequelize para fazer um CRUD de posts.

Endpoints que estarão conectados ao seu banco de dados seguindo os princípios do REST;

É necessário usuário e login, portanto foi trabalhada a relação entre user e post;

Utilização de categorias para os posts, trabalhando, assim, a relação de posts para categories e de categories para posts.

# Estrutura do projeto

Estrutura do projeto e descrição dos arquivos que foram desenvolvidos por mim e pela Trybe.

```
  Legenda:
  🔸Arquivos desenvolvidos pela Trybe (não foram alterados).
  🔹Arquivos desenvolvidos por mim.
🔹
🔸
  .
  ├──🔸docker-compose.yml
  ├──🔸Dockerfile
  ├──🔸jest.config.js
  ├──🔸package.json
  ├──🔸package-lock.json
  ├──🔹README.md
  └──src
      ├──🔹api.js
      ├──controllers
      │   ├──🔹blogPost.js
      │   ├──🔹category.js
      │   └──🔹user.js
      ├── database
      │   ├──config
      │   │   └──🔹config.js
      │   ├── migrations
      │   │   ├──🔹20220713193629-CreateUsers.js
      │   │   ├──🔹20220713195022-CreateBlogPosts.js
      │   │   ├──🔹20220713195035-CreateCategories.js
      │   │   └──🔹20220713195051-CreatePostsCategories.js
      │   ├── models
      │   │   ├──🔹blogPost.js
      │   │   ├──🔹category.js
      │   │   ├──🔸index.js
      │   │   ├──🔹postCategory.js
      │   │   └──🔹user.js
      │   └── seeders
      │       ├──🔹20200812183211-Users.js
      │       ├──🔹20200812184236-Categories.js
      │       ├──🔹20200812194353-BlogPosts.js
      │       └──🔹20210430010915-PostsCategories.js
      ├── middleware
      │   ├──🔹auth.js
      │   ├──🔹category.js
      │   ├──🔹login.js
      │   ├──🔹post.js
      │   └──🔹user.js
      ├── routers
      │   ├──🔹category.js
      │   ├──🔹login.js
      │   ├──🔹post.js
      │   └──🔹user.js
      ├── schema
      │   ├──🔹category.js
      │   ├──🔹login.js
      │   ├──🔹post.js
      │   └──🔹user.js
      ├──🔸server.js
      └── services
          ├──🔹auth.js
          ├──🔹blogPost.js
          ├──🔹category.js
          ├──🔹jwt.js
          ├──🔹postCategory.js
          └──🔹user.js
```

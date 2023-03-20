# TO-DO-TSS 🥁

## Instruções para executar a aplicação (local)

### Servidor
- Para iniciar o servivor acesse o diretório `BACK`
- Execute o comando `npm i`.
- Execute o comando `npm run server`.

A URL para acessar o servidor é http://localhost:3000/
- Modifiquei a porta do servidor para 3000 porque no meu computador a 5000 já estava em uso.

### App Web
- Após iniciar o servidor acesse o diretório `FRONT` para iniciar a aplicação WEB.
- Execute o comando `npm i`.
- Execute o comando `ng s`.

A URL de acesso a aplicação é http://localhost:4200/

## Sobre o desenvolvimento

### Ordem de cada tarefa (english)

1. Created application using `ng new application_name` and Github repository.
2. Config [Angular ESLint](https://github.com/angular-eslint/angular-eslint) + [Prettier](https://github.com/prettier/eslint-plugin-prettier)
3. Config [7-1 sass](https://sass-guidelin.es/#architecture) structure and settings
4. Added 404 route and start developing board component
5. Start develop column and card components
6. Added and config [NgRx](https://ngrx.io/)
7. Developed responsive layout using [mixins and media-queries](https://medium.com/geekculture/sass-media-queries-mixins-1c5e5f605704)
8. Created header component and modified some styles.
9. Developed [interceptor](https://antonyderham.me/post/angular-ngrx-auth-interceptor/) to handle with auth token using NgRx
10. Developed [modal component](https://www.w3schools.com/howto/howto_css_modals.asp)
11. Added [Fontawesome](https://github.com/FortAwesome/angular-fontawesome) lib
12. Developed modal, add new card and move card flow
13. Developed delete and update flow
14. Added [ngx-markdown](https://www.npmjs.com/package/ngx-markdown) thats also use [DomSanitizer](https://angular.io/api/platform-browser/DomSanitizer#domsanitizer)
15. Modified favicon
16. Added [ngx-markdown-editor](https://github.com/lon-yang/ngx-markdown-editor)

### Tarefas que ficaram pendentes (melhorias e refatoração)

- Tratamento de erro API
- Tratamento de erro form
- Melhorar UX
  - DragDrop cards
  - Loading spinner
  - PWA
  - App shell skeleton
  - Temas diferentes
- Melhorar exibição e edição do markdown
- Unit Test
- Acessibilidade

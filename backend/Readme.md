## Config from ambient TypeScript
# iniciar um projeto typescripts
- 1 mkdir projeto
- 2 cd projeto
- 3 npm init -y
- 4 npm install typescript -D
- 5 yarn add @types/express -D
- 6 yarn install express
- 7 mkdir src
- 8 cd src
- 9 touch server.ts
- 10 no server.ts crie seu server com o express
- 11 npx tsc --init -> para iniciar um projeto typeScript
- 12 será gerado um file tsconfig.json. Abra este arquivo e mude as sequintes linhas de:
                              "outDir": "./",
                              "rootDir": "./",
                       para:
                              "outDir": "./dist",
                              "rootDir": "./src",
- 13 npx tsc -> compila a configuração
- 14 npx install ts-node-dev -D -> Modulo para fazer o loud autatico

- 15 configurar o node run dev para subir o server
## Ex. 1 em teste
 "scripts":{
    "dev:server":"ts-node-dev --respawn --transpileOnly node_modules src/index.ts"
  },
## Ex. 2 ok
  "scripts":{
    "dev": "ts-node-dev --inspect --ignore-watch node_modules src/index.ts"
  },

- 16 yarn run dev -> para subir o server e "pronto"
## observações
# npm run e da um nome ao serviço no caso dev "npm run dev"
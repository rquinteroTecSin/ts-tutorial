# Proyecto de Hola Mundo en TypeScript

Este es un proyecto básico de Node.js que muestra el mensaje "Hola Mundo" en la consola utilizando TypeScript.

## Estructura del Proyecto

```
my-node-app
├── src
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Instalación de dependencias
```
npm install
```
## Compilación

```
tsc
```
## Ejecución

Para ejecutar la aplicación, utiliza el siguiente comando:

```
npm start
```

Esto compilará el código TypeScript y ejecutará el archivo `index.ts`, mostrando "Hola Mundo" en la consola.

## Limpieza de binarios y dependencias
```
tsc --build --clean
rm -rf dist node_modules
```


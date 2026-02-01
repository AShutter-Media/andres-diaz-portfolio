# Cómo instalar Node.js en tu Mac

En tu terminal aparece `command not found: npm` porque **Node.js no está instalado**. Elige una opción:

---

## Opción 1: Instalador oficial (la más rápida)

1. Entra en: **https://nodejs.org**
2. Descarga la versión **LTS** (recomendada).
3. Abre el archivo `.pkg` y sigue el asistente.
4. **Cierra y vuelve a abrir la terminal** (o abre una ventana nueva).
5. Comprueba:
   ```bash
   node --version
   npm --version
   ```
6. En la carpeta del proyecto ejecuta:
   ```bash
   npm install
   npm run dev
   ```
7. Abre **http://localhost:3000** en el navegador.

---

## Opción 2: Con Homebrew (si ya lo usas o quieres instalarlo)

1. Instala Homebrew (si no lo tienes):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
   Después, sigue las instrucciones que te indique para añadir `brew` al PATH.

2. Instala Node.js:
   ```bash
   brew install node
   ```

3. Cierra y abre la terminal, luego en la carpeta del proyecto:
   ```bash
   npm install
   npm run dev
   ```

---

## Opción 3: nvm (Node Version Manager)

Útil si quieres varias versiones de Node:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Cierra y abre la terminal, luego:

```bash
nvm install --lts
nvm use --lts
```

Después, en la carpeta del proyecto: `npm install` y `npm run dev`.

---

**Resumen:** La opción 1 (nodejs.org) suele ser la más sencilla. Después de instalar, **siempre** cierra y abre de nuevo la terminal antes de usar `npm`.

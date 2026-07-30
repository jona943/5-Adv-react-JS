# <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="35" height="35" valign="middle" /> Master en Frontend Asistido con IA — Módulo 5: Front-End Avanzado con React

[![Bootcamp - DEV.F](https://img.shields.io/badge/Bootcamp-DEV.F-0052CC?style=for-the-badge&logo=codecademy&logoColor=white)](#)
[![Programa - Beca Traxión Tech Challenge / Bécalos](https://img.shields.io/badge/Programa-Beca%20B%C3%A9calos%20x%20DEV.F-E95420?style=for-the-badge&logo=award&logoColor=white)](#)
[![Framework - React 19](https://img.shields.io/badge/Framework-React%2019-38B2AC?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
[![AI - Ollama / DeepSeek](https://img.shields.io/badge/AI-Ollama%20(DeepSeek)-black?style=for-the-badge&logo=ollama&logoColor=white)](#)
[![Backend - Express](https://img.shields.io/badge/Backend-Express-000000?style=for-the-badge&logo=express&logoColor=white)](#)

Repositorio central del **Módulo 5: Front-End Avanzado con React (Context API, useReducer, Custom Hooks, Integración de IA con Ollama y Backend Express)** perteneciente al **Master en Frontend Asistido con IA**. Este módulo profundiza en patrones avanzados de gestión de estado global, streaming de datos con Inteligencia Artificial local (DeepSeek-R1), consumo asíncrono de APIs REST con estados de carga/error y despliegue de servidores locales con Express.

---

## <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" width="22" height="22" valign="middle" /> Visor Interactivo & Portafolio Playground

El repositorio incluye un visor interactivo en la raíz ([`index.html`](./index.html)) diseñado como un **Playground de 4 Focos** para inspeccionar el árbol de código completo de cada componente JSX, examinar Custom Hooks (`useOllamaHook`), reducers, servidores Express, capturas de pantalla de la interfaz y guías técnicas en Markdown.

- [Visualiza aquí la demo en vivo en Vercel (NubIA-Seek)](https://5-adv-react-js.vercel.app/)
- [Visualiza la demo interactiva y explorador de código en GitHub Pages](https://jona943.github.io/5-Adv-react-JS/)

---

## <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg" width="22" height="22" valign="middle" /> Proyectos e Integraciones

```text
5-Adv-react-JS/
├── index.html                                          # Visor Interactivo, Playground & Explorador de Código
├── style.css                                           # Sistema de estilos e interfaz de 4 focos Avanzada
├── README.md                                           # Documentación principal del Módulo 5
├── agente-init/                                        # 1. NubIA-Seek (Chatbot Local IA con Ollama + DeepSeek-R1)
│   ├── server/                                         # 2. Servidor Backend Local (Node.js & Express)
│   └── src/components/                                 # Custom Hooks (useOllamaHook), Context API & Reducers
├── consumoAPI/                                         # 3. Consumo de API REST (Peticiones Asíncronas & Loading/Error)
└── estado-global/                                      # 4. Estado Global & Context API (Blog Interactivo con Persistencia)
```

---

## <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="22" height="22" valign="middle" /> Galería de Arquitectura y Capturas de Pantalla

### 1. NubIA-Seek (Chatbot Local con Inteligencia Artificial)
* **Directorio:** `agente-init/`
* **Descripción:** Clon interactivo de ChatGPT ejecutado de forma local. Utiliza un Custom Hook personalizado (`useOllamaHook.js`) para consumir el streaming palabra por palabra de la API local de **Ollama** con el modelo **DeepSeek-R1 (1.5b)**. La arquitectura del estado global (historial de chats y mensajes) se gestiona de forma centralizada con **Context API** y **useReducer**.

| Interfaz del Chat (NubIA) | Maquetado y Diseño Inicial |
| :---: | :---: |
| ![NubIA Chat](Screenshot/agenteInit/agent-init-NubIA.png) | ![Mockup](Screenshot/agenteInit/maquetado.png) |

| Barra Lateral e Historial de Chats |
| :---: |
| ![Sidebar](Screenshot/agenteInit/demo-barra-lateral.png) |

---

### 2. Consumo de API REST (Peticiones Asíncronas)
* **Directorio:** `consumoAPI/`
* **Descripción:** Aplicación enfocada en la interacción asíncrona con servicios de API REST. Permite realizar consultas GET, renderizar listados interactivos dinámicos y gestionar pantallas de carga (`Loading.jsx`) y errores de conexión (`ErrorCard.jsx`) mediante componentes independientes.

| Listado Principal de Datos | Detalle del Registro Seleccionado |
| :---: | :---: |
| ![Consumo API](Screenshot/consumoAPI/consumo-API.png) | ![Detalle API](Screenshot/consumoAPI/Cosumo-API-E.png) |

---

### 3. Estado Global (Blog Interactivo con Persistencia)
* **Directorio:** `estado-global/`
* **Descripción:** Blog modular interactivo donde se aplica **Context API** (`UserContext.jsx`) para compartir información transversal del usuario (nombre, foto de perfil, etc.) entre componentes hermanos evitando el *prop drilling*, incorporando además persistencia reactiva en `localStorage`.

| Interfaz del Blog Interactivo |
| :---: |
| ![Blog Global State](Screenshot/estadoGlobal-blog.png) |

---

### 4. Servidor Backend Inicial (Express)
* **Directorio:** `agente-init/server/`
* **Descripción:** Servidor ligero creado en **Node.js** con **Express** que actúa como backend local. Configurado con módulos ES (`import`/`export`) y habilitación de políticas de CORS para la comunicación segura con el frontend en Vite.

| Servidor Levantado y Escuchando |
| :---: |
| ![Server Express Console](Screenshot/server.png) |

---

## <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codepen/codepen-plain.svg" width="22" height="22" valign="middle" /> Agradecimientos

Agradezco profundamente a **Bécalos** por otorgarme la beca que hace posible mi formación tecnológica, y a **DEV.F** por proveer un espacio didáctico de alto nivel para perfeccionar mis habilidades de desarrollo frontend avanzado.

<p align="center">
  <sub>Módulo 5 — Master en Frontend Asistido con IA | DEV.F x Bécalos</sub>
</p>
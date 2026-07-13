# 🚀 Front-End Avanzado con React — Portafolio de Proyectos

¡Bienvenido a mi portafolio de proyectos de desarrollo frontend! Este repositorio contiene todos los desarrollos, arquitecturas y laboratorios construidos durante mi formación en el módulo de **Front-End Avanzado con React** en **[DEV.F](https://www.devf.la/)**, auspiciado bajo el programa de becas de **[Bécalos](https://becalos.mx/)**. 

Mi nombre es **Jonathan Medina** y aquí documento mi progreso práctico construyendo aplicaciones SPA reactivas, integrando APIs, gestionando estados globales complejos y levantando servidores locales de soporte.

---

## 🛠️ Tecnologías Utilizadas

En estos proyectos aplico tecnologías modernas del ecosistema de JavaScript:

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62B)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Ollama](https://img.shields.io/badge/Ollama_(DeepSeek)-black?style=for-the-badge&logo=ollama&logoColor=white)

---

## 📂 Proyectos Incluidos

### 💬 1. NubIA-Seek (Chatbot Local con Inteligencia Artificial)
* **Directorio:** `agente-init/`
* **Descripción:** Un clon interactivo de ChatGPT que se ejecuta de forma local. Utiliza un Custom Hook personalizado para procesar y consumir el streaming en tiempo real (palabra por palabra) de la API local de **Ollama** con el modelo **DeepSeek-R1 (1.5b)**. La arquitectura del estado global (historial de chats y mensajes) se gestiona de forma centralizada utilizando **Context API** y **useReducer** de forma inmutable.

#### 📸 Capturas de Pantalla (NubIA-Seek):

| 🖥️ Interfaz del Chat (NubIA) | 📐 Maquetado y Diseño Inicial |
| :---: | :---: |
| ![NubIA Chat](Screenshot/agenteInit/agent-init-NubIA.png) | ![Mockup](Screenshot/agenteInit/maquetado.png) |

| 📁 Barra Lateral e Historial de Chats |
| :---: |
| ![Sidebar](Screenshot/agenteInit/demo-barra-lateral.png) |

---

### 🌐 2. Consumo de API (Consumo Asíncrono)
* **Directorio:** `consumoAPI/`
* **Descripción:** Aplicación enfocada en la interacción asíncrona con servicios de API REST. Permite realizar consultas GET, renderizar listados interactivos dinámicos y gestionar pantallas de carga (`Loading`) y errores de conexión (`ErrorCard`) mediante componentes independientes.

#### 📸 Capturas de Pantalla (Consumo de API):

| 📄 Listado Principal de Datos | 🔍 Detalle del Registro Seleccionado |
| :---: | :---: |
| ![Consumo API](Screenshot/consumoAPI/consumo-API.png) | ![Detalle API](Screenshot/consumoAPI/Cosumo-API-E.png) |

---

### 📝 3. Estado Global (Blog Interactivo con Persistencia)
* **Directorio:** `estado-global/`
* **Descripción:** Un blog modular interactivo donde se aplica **Context API** para compartir información transversal del usuario (nombre de usuario, foto de perfil, etc.) entre componentes hermanos sin realizar *prop drilling*. Además, incorpora persistencia en memoria mediante `localStorage` de forma reactiva.

#### 📸 Captura de Pantalla (Blog con Estado Global):

| 🎨 Interfaz del Blog Interactivo |
| :---: |
| ![Blog Global State](Screenshot/estadoGlobal-blog.png) |

---

### ⚙️ 4. Servidor Backend Inicial (Express)
* **Directorio:** `agente-init/server/`
* **Descripción:** Servidor ligero creado en **Node.js** con **Express** que actúa como nuestro primer backend local. Configurado con módulos ES (`import`/`export`) y habilitación de políticas de CORS para permitir la comunicación segura entre el servidor local y el frontend en Vite. Responde con un endpoint base de "Hola Mundo".

#### 📸 Captura de Pantalla (Servidor Express):

| 🟢 Servidor Levantado y Escuchando |
| :---: |
| ![Server Express Console](Screenshot/server.png) |

---

## 🎓 Agradecimientos

Agradezco profundamente a **Bécalos** por otorgarme la beca que hace posible mi formación tecnológica, y a **DEV.F** por proveer un espacio didáctico de alto nivel para perfeccionar mis habilidades de programación. 

*Desarrollado con dedicación por Jonathan Medina - 2026.*
// Catálogo Estructurado en Árbol de Todos los Proyectos de Módulo 5
const projectsTreeData = [
    {
        id: "p1-nubia-seek",
        title: "💬 1. NubIA-Seek (Chatbot Local IA con Ollama + DeepSeek-R1)",
        tag: "ai",
        demoUrl: "https://5-adv-react-js.vercel.app/",
        files: [
            { name: "src/App.jsx", url: "agente-init/src/App.jsx", lang: "jsx" },
            { name: "src/main.jsx", url: "agente-init/src/main.jsx", lang: "jsx" },
            { name: "src/components/ChatContext.jsx", url: "agente-init/src/components/ChatContext.jsx", lang: "jsx" },
            { name: "src/components/ChatInput.jsx", url: "agente-init/src/components/ChatInput.jsx", lang: "jsx" },
            { name: "src/components/MessageList.jsx", url: "agente-init/src/components/MessageList.jsx", lang: "jsx" },
            { name: "src/components/Sidebar.jsx", url: "agente-init/src/components/Sidebar.jsx", lang: "jsx" },
            { name: "src/components/chatReducer.js", url: "agente-init/src/components/chatReducer.js", lang: "javascript" },
            { name: "src/components/useOllamaHook.js", url: "agente-init/src/components/useOllamaHook.js", lang: "javascript" },
            { name: "src/components/FormTest.jsx", url: "agente-init/src/components/FormTest.jsx", lang: "jsx" },
            { name: "index.html", url: "agente-init/index.html", lang: "markup" },
            { name: "package.json", url: "agente-init/package.json", lang: "json" },
            { name: "vite.config.js", url: "agente-init/vite.config.js", lang: "javascript" },
            { name: "README.md", url: "agente-init/README.md", lang: "markdown" }
        ]
    },
    {
        id: "p2-express-server",
        title: "⚙️ 2. Servidor Backend Local (Node.js & Express)",
        tag: "node",
        demoUrl: "",
        files: [
            { name: "server/index.js", url: "agente-init/server/index.js", lang: "javascript" },
            { name: "server/package.json", url: "agente-init/server/package.json", lang: "json" }
        ]
    },
    {
        id: "p3-consumo-api",
        title: "🌐 3. Consumo de API REST (Peticiones Asíncronas & Manejo de Estado)",
        tag: "react",
        demoUrl: "consumoAPI/index.html",
        files: [
            { name: "src/App.jsx", url: "consumoAPI/src/App.jsx", lang: "jsx" },
            { name: "src/main.jsx", url: "consumoAPI/src/main.jsx", lang: "jsx" },
            { name: "src/components/PostList.jsx", url: "consumoAPI/src/components/PostList.jsx", lang: "jsx" },
            { name: "src/components/PostDetail.jsx", url: "consumoAPI/src/components/PostDetail.jsx", lang: "jsx" },
            { name: "src/components/Loading.jsx", url: "consumoAPI/src/components/Loading.jsx", lang: "jsx" },
            { name: "src/components/ErrorCard.jsx", url: "consumoAPI/src/components/ErrorCard.jsx", lang: "jsx" },
            { name: "index.html", url: "consumoAPI/index.html", lang: "markup" },
            { name: "package.json", url: "consumoAPI/package.json", lang: "json" },
            { name: "vite.config.js", url: "consumoAPI/vite.config.js", lang: "javascript" },
            { name: "README.md", url: "consumoAPI/README.md", lang: "markdown" }
        ]
    },
    {
        id: "p4-estado-global",
        title: "📝 4. Estado Global & Context API (Blog Interactivo con Persistencia)",
        tag: "react",
        demoUrl: "estado-global/index.html",
        files: [
            { name: "src/App.jsx", url: "estado-global/src/App.jsx", lang: "jsx" },
            { name: "src/main.jsx", url: "estado-global/src/main.jsx", lang: "jsx" },
            { name: "src/context/UserContext.jsx", url: "estado-global/src/context/UserContext.jsx", lang: "jsx" },
            { name: "src/components/NavBar.jsx", url: "estado-global/src/components/NavBar.jsx", lang: "jsx" },
            { name: "src/components/PostList.jsx", url: "estado-global/src/components/PostList.jsx", lang: "jsx" },
            { name: "src/index.css", url: "estado-global/src/index.css", lang: "css" },
            { name: "index.html", url: "estado-global/index.html", lang: "markup" },
            { name: "package.json", url: "estado-global/package.json", lang: "json" },
            { name: "vite.config.js", url: "estado-global/vite.config.js", lang: "javascript" },
            { name: "README.md", url: "estado-global/README.md", lang: "markdown" }
        ]
    }
];

// Estado Global
let activeFileUrl = '';
let currentContent = '';
let logCount = 0;
let currentFocus = 'code';

// Elementos DOM
const treeContainer = document.getElementById('treeContainer');
const searchInput = document.getElementById('searchInput');
const iframe = document.getElementById('previewIframe');
const addressUrl = document.getElementById('addressUrl');
const externalLink = document.getElementById('externalLink');
const reloadBtn = document.getElementById('reloadBtn');
const clearTerminalBtn = document.getElementById('clearTerminalBtn');

const modePreviewBtn = document.getElementById('modePreviewBtn');
const modeCodeBtn = document.getElementById('modeCodeBtn');
const modeTerminalBtn = document.getElementById('modeTerminalBtn');

const codeViewerPane = document.getElementById('codeViewerPane');
const codeViewer = document.getElementById('codeViewer');
const terminalPane = document.getElementById('terminalPane');
const terminalBody = document.getElementById('terminalBody');
const markdownViewPane = document.getElementById('markdownViewPane');
const markdownContent = document.getElementById('markdownContent');

const statusDot = document.getElementById('statusDot');
const statusText = document.getElementById('statusText');
const lessonCategory = document.getElementById('lessonCategory');

const navTopicsBtn = document.getElementById('navTopicsBtn');
const navCodeBtn = document.getElementById('navCodeBtn');
const navPreviewBtn = document.getElementById('navPreviewBtn');
const navTerminalBtn = document.getElementById('navTerminalBtn');
const mobileLogBadge = document.getElementById('mobileLogBadge');

// Cambiar Foco Móvil / Desktop
function setFocusMode(mode) {
    currentFocus = mode;
    document.body.className = `focus-${mode}`;

    navTopicsBtn.classList.toggle('active', mode === 'topics');
    navCodeBtn.classList.toggle('active', mode === 'code');
    navPreviewBtn.classList.toggle('active', mode === 'preview');
    navTerminalBtn.classList.toggle('active', mode === 'terminal');

    modeCodeBtn.classList.toggle('active', mode === 'code');
    modePreviewBtn.classList.toggle('active', mode === 'preview');
    modeTerminalBtn.classList.toggle('active', mode === 'terminal');

    if (activeFileUrl.endsWith('.md')) {
        iframe.style.display = 'none';
        codeViewerPane.style.display = 'none';
        terminalPane.style.display = 'none';
        markdownViewPane.style.display = 'block';
    } else {
        markdownViewPane.style.display = 'none';
        iframe.style.display = (mode === 'preview') ? 'block' : 'none';
        codeViewerPane.style.display = (mode === 'code') ? 'block' : 'none';
        terminalPane.style.display = (mode === 'terminal') ? 'flex' : 'none';
    }
}

navTopicsBtn.addEventListener('click', () => setFocusMode('topics'));
navCodeBtn.addEventListener('click', () => setFocusMode('code'));
navPreviewBtn.addEventListener('click', () => setFocusMode('preview'));
navTerminalBtn.addEventListener('click', () => setFocusMode('terminal'));

modeCodeBtn.addEventListener('click', () => setFocusMode('code'));
modePreviewBtn.addEventListener('click', () => setFocusMode('preview'));
modeTerminalBtn.addEventListener('click', () => setFocusMode('terminal'));

// Renderizar Árbol de Proyectos (Tree View Explorer)
function renderProjectTree(filter = '') {
    treeContainer.innerHTML = '';

    projectsTreeData.forEach((project, pIndex) => {
        const matchingFiles = project.files.filter(f =>
            f.name.toLowerCase().includes(filter.toLowerCase()) ||
            project.title.toLowerCase().includes(filter.toLowerCase())
        );

        if (filter && matchingFiles.length === 0) return;

        const node = document.createElement('div');
        node.className = `project-node ${pIndex !== 0 && !filter ? 'collapsed' : ''}`;

        node.innerHTML = `
          <div class="project-header">
            <i data-lucide="chevron-down" size="14" class="chevron"></i>
            <i data-lucide="folder-git-2" size="16" style="color:var(--accent);"></i>
            <span style="flex:1; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${project.title}</span>
          </div>
          <div class="project-files"></div>
        `;

        const headerEl = node.querySelector('.project-header');
        const filesEl = node.querySelector('.project-files');

        headerEl.addEventListener('click', () => {
            node.classList.toggle('collapsed');
            if (project.demoUrl) {
                iframe.src = project.demoUrl;
            }
        });

        const filesToRender = filter ? matchingFiles : project.files;

        filesToRender.forEach(file => {
            const fileDiv = document.createElement('div');
            fileDiv.className = `file-item ${file.url === activeFileUrl ? 'active' : ''}`;

            let iconName = 'file-code';
            if (file.lang === 'markdown') iconName = 'file-text';
            if (file.lang === 'json') iconName = 'file-json';
            if (file.lang === 'css') iconName = 'palette';
            if (file.lang === 'markup') iconName = 'globe';

            fileDiv.innerHTML = `
            <i data-lucide="${iconName}" size="14"></i>
            <span class="file-name">${file.name}</span>
            <span class="file-badge tag-${project.tag}">${file.lang}</span>
          `;

            fileDiv.addEventListener('click', (e) => {
                e.stopPropagation();
                loadFile(file, project);
                if (window.innerWidth <= 768) {
                    setFocusMode(file.lang === 'markdown' ? 'preview' : 'code');
                }
            });

            filesEl.appendChild(fileDiv);
        });

        treeContainer.appendChild(node);
    });

    lucide.createIcons();
}

// Cargar e Inspeccionar Archivo del Árbol
async function loadFile(file, project) {
    activeFileUrl = file.url;

    document.querySelectorAll('.file-item').forEach(el => el.classList.remove('active'));
    renderProjectTree(searchInput.value);

    addressUrl.textContent = `http://localhost/5-Adv-react-JS/${file.url}`;
    externalLink.href = file.url;
    lessonCategory.textContent = `${project.title} — ${file.name}`;

    statusText.textContent = `Cargando ${file.name}...`;
    statusDot.style.background = "#f59e0b";

    appendLog(`▶ Abriendo archivo: ${file.name} (${file.url})`, 'system');

    try {
        const response = await fetch(file.url);
        if (!response.ok) throw new Error(`HTTP status ${response.status}`);
        currentContent = await response.text();

        if (file.lang === 'markdown') {
            markdownContent.innerHTML = marked.parse(currentContent);
            setFocusMode('preview');
        } else {
            codeViewer.className = `language-${file.lang}`;
            codeViewer.textContent = currentContent;
            Prism.highlightElement(codeViewer);

            if (project.demoUrl) {
                iframe.src = project.demoUrl;
            }

            setFocusMode('code');
        }

        statusText.textContent = "Archivo cargado correctamente";
        statusDot.style.background = "#10b981";

    } catch (err) {
        currentContent = `// Error al cargar ${file.url}: ${err.message}`;
        codeViewer.textContent = currentContent;
        statusText.textContent = "Error de carga";
        statusDot.style.background = "#ef4444";
    }
}

function formatArg(arg) {
    if (typeof arg === 'object' && arg !== null) {
        try { return JSON.stringify(arg, null, 2); } catch (e) { return String(arg); }
    }
    return String(arg);
}

function appendLog(message, type = 'log') {
    logCount++;
    mobileLogBadge.textContent = logCount;
    mobileLogBadge.style.display = 'inline-block';

    const line = document.createElement('div');
    line.className = `log-line ${type}`;

    const prompt = document.createElement('span');
    prompt.className = 'log-prompt';
    prompt.textContent = type === 'system' ? '$' : '>';

    const content = document.createElement('span');
    content.textContent = message;

    line.appendChild(prompt);
    line.appendChild(content);
    terminalBody.appendChild(line);

    terminalBody.scrollTop = terminalBody.scrollHeight;
}

clearTerminalBtn.addEventListener('click', () => {
    terminalBody.innerHTML = `<div class="log-line system"><span class="log-prompt">$</span> Consola limpia.</div>`;
    logCount = 0;
    mobileLogBadge.style.display = 'none';
});

reloadBtn.addEventListener('click', () => {
    if (activeFileUrl) {
        const item = projectsTreeData.flatMap(p => p.files).find(f => f.url === activeFileUrl);
        const proj = projectsTreeData.find(p => p.files.includes(item));
        if (item && proj) loadFile(item, proj);
    }
});

searchInput.addEventListener('input', (e) => {
    renderProjectTree(e.target.value);
});

// Carga Inicial
document.addEventListener('DOMContentLoaded', () => {
    renderProjectTree();
    // Cargar ChatContext.jsx por defecto
    const defaultProject = projectsTreeData[0];
    const defaultFile = defaultProject.files[2];
    loadFile(defaultFile, defaultProject);
});
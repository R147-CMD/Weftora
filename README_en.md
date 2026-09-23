<div align="center">

<img src="./README/source/Weftora-icon.png" width="200" height="200" style="border-radius: 12px; display: block; margin: 0 auto;">

# Weftora — Open-Source AI Agent Operating System

English | [中文文档](./README.md)

![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=flat\&logo=python)
![Electron](https://img.shields.io/badge/Electron-37-47848F?style=flat\&logo=electron)
![Vue](https://img.shields.io/badge/Vue-3.5-4FC08D?style=flat\&logo=vue.js)
![License](https://img.shields.io/badge/License-GPL%203.0-blue?style=flat)

**More than just a chatbot. Build, collaborate, and execute with AI Agents that actually get work done.**

</div>

---

## 🎯 What is Weftora?

Weftora is a **full-stack AI Agent collaboration platform** designed to provide a complete runtime environment for intelligent agents.

It supports:

* Multi-agent parallel collaboration
* Secure code execution
* Knowledge base retrieval
* Workflow automation
* MCP integration
* Persistent memory management

Whether you're writing code, generating presentations, preparing reports, or building automated workflows, Weftora helps transform AI from a conversation tool into a real productivity system.

---

## ✨ Key Features

<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
  <tr>
    <td align="center" width="33%">🤖<br><b>Multi-Agent Collaboration</b><br>Leader agents coordinate multiple worker agents in parallel and automatically decompose complex tasks. Implement Agent file access conflict detection</td>
    <td align="center" width="33%">🔧<br><b>Complete Tool Ecosystem</b><br>Code execution, file management, web search, and knowledge retrieval available out of the box.</td>
    <td align="center" width="33%">🧠<br><b>Advanced Memory System</b><br>Workspace-based memory containers with controllable multi-level context compression.</td>
  </tr>
  <tr>
    <td align="center">🐳<br><b>Secure Code Sandbox</b><br>Docker-isolated execution environment protects your local system from unsafe code.</td>
    <td align="center">🔌<br><b>Multi-Provider LLM Support</b><br>Seamlessly switch between OpenAI, DeepSeek, MoonShot, Ollama, and custom providers.</td>
    <td align="center">🎨<br><b>Custom Workflow Builder</b><br>Design and automate tasks through an intuitive card-based workflow editor.</td>
  </tr>
  <tr>
    <td align="center">👤<br><b>Character Cards</b><br>Create personalized AI assistants with customizable identities and behaviors.</td>
    <td align="center">⚒️<br><b>MCP Compatibility</b><br>Supports multiple MCP transport protocols with customizable session lifecycles.</td>
    <td align="center">💬<br><b>Message Node Management</b><br>Edit or remove any historical message and automatically generate new conversation branches.</td>
  </tr>
</table>

---

## 🚀 Quick Start

> Compatibility note: Weftora is a separate application with a new local data directory. If you have used APIX, back up its application data first; this version does not migrate it automatically.

### One-Click Installation

#### Windows

Run the following commands in PowerShell:

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force
.\setup.ps1
```

#### macOS / Linux

Run the following commands in your terminal:

```bash
chmod +x setup.sh
./setup.sh
```

> Please ensure that your network connection remains stable during installation.

---

### Docker Compose (Recommended)

To run all backend services inside Docker, run after `setup.ps1` / `setup.sh`:

**Windows:**

```powershell
.\start-docker.ps1
```

**macOS / Linux:**

```bash
chmod +x start-docker.sh
./start-docker.sh
```

The Electron frontend still runs on the host. Service ports remain unchanged:

- AGENT: `http://127.0.0.1:5091`
- TASK: `http://127.0.0.1:5090`
- MEMORY: `http://127.0.0.1:5093`
- FILE: `http://127.0.0.1:5094`

For RAG vector search with Milvus, add `--profile milvus`:

```bash
docker compose --profile milvus up -d --build
```

---

### Local Backend Startup

If you prefer not to use Docker, start the four backend services locally after setup:

**Windows:**

```powershell
.\start-local.ps1
```

**macOS / Linux:**

```bash
chmod +x start-local.sh
./start-local.sh
```

---

### Custom Installation

If you'd like to customize the deployment process, please refer to our documentation:

* [中文部署文档](./README/README_zh.md)
* [English Documentation](./README/README_en.md)

---

## 🗺️ Roadmap

- [x] Multi-Agent Runtime
- [x] MCP Integration
- [x] Visual Linear Workflow Editor
- [x] Secure Docker Sandbox
- [x] Event loop
- [ ] Scheduled Task Management
- [ ] Plugin and hooks
- [ ] Multi platform support
- [ ] Plugin Marketplace
- [ ] Add missing unit tests
- [ ] Graph-Based Workflow Editor
- [ ] Workspace Time Travel

## 🗺️ Version Log (Version 2.1.1)

- The code related to linear task flow editing is currently broken and will be fixed in a future release. (low)
- Fix incorrect context construction after message node editing.
- Add event loop and event listener mechanism to invoke event handlers non-blockingly by priority.
- Implement automatic tasks and scheduled tasks based on the event loop.

---

## 📄 License

This project is licensed under the **GNU GPL v3.0 License**.

Weftora is a modified version based on [APIX](https://github.com/JJJJSTIYYYY/Apix), modified on 2026-09-21; it is not solely original work.

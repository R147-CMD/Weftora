<div align="center">

<img src="./README/source/Weftora-icon.png" width="200" height="200" style="border-radius: 12px; display: block; margin: 0 auto;">

# Weftora — 开源 AI Agent 协作平台

中文文档 | [English](./README_en.md)

![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=flat&logo=python)
![Electron](https://img.shields.io/badge/Electron-37-47848F?style=flat&logo=electron)
![Vue](https://img.shields.io/badge/Vue-3.5-4FC08D?style=flat&logo=vue.js)

**不只是聊天。构建、协作、执行——让 AI Agent 真正为你工作。**

</div>

---

## 🎯 这是什么？

Weftora 是一个**全栈的 AI Agent 协作平台**。它是一套完整的 Agent 运行时——支持多智能体并行协作、安全代码执行、知识库检索。

它可以帮你完成包括但不限于代码编写、PPT生成、汇报整理以及各种自动化操作。

---

## ✨ 核心特性

<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
  <tr>
    <td align="center" width="33%">🤖<br><b>多智能体协作</b><br>Leader 调度多个子代理并行工作，复杂任务自动分解，实现Agent文件访问冲突检测</td>
    <td align="center" width="33%">🔧<br><b>完整工具生态</b><br>代码执行、文件管理、网络搜索、知识检索开箱即用</td>
    <td align="center" width="33%">🧠<br><b>完善的记忆系统</b><br>以工作区划分记忆容器，人为可控的多级自动上下文压缩机制</td>
  </tr>
  <tr>
    <td align="center">🐳<br><b>代码安全沙箱</b><br>Docker 隔离执行，不用担心代码命令破坏系统</td>
    <td align="center">🔌<br><b>多模型供应商兼容</b><br>OpenAI / DeepSeek / MoonShot / Ollama / 自定义供应商任意切换</td>
    <td align="center">🎨<br><b>支持自定义任务流</b><br>卡片化任务流编辑，定制属于您的自动化任务流</td>
  </tr>
  <tr>
    <td align="center">👤<br><b>角色卡支持</b><br>自定义您的助手身份，定制一个独属于您的个人助理</td>
    <td align="center">⚒️<br><b>多协议MCP兼容</b><br>支持多种协议的MCP服务，并且可以自定义您的会话生命周期</td>
    <td align="center">💬<br><b>消息节点化管理</b><br>您可以在任意位置编辑或者删除您已发送的信息，并自动生成新的分支</td>
  </tr>
</table>

---

## 🚀 快速开始

### 一键安装攻略

对于windows用户，我们使用powershell:

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force
.\setup.ps1
```

对于macos和linux，我们使用命令行终端:

```bash
chmod +x setup.sh
./setup.sh
```

> 一键安装过程中请确保网络保持畅通

### 方式二：Docker Compose 一键启动（推荐）

如果您希望所有后端服务都运行在 Docker 中，可在执行完 `setup.ps1` / `setup.sh` 后运行：

**Windows:**

```powershell
.\start-docker.ps1
```

**macOS / Linux:**

```bash
chmod +x start-docker.sh
./start-docker.sh
```

启动后，Electron 客户端仍在宿主机运行，服务端口保持不变：

- AGENT: `http://127.0.0.1:5091`
- TASK: `http://127.0.0.1:5090`
- MEMORY: `http://127.0.0.1:5093`
- FILE: `http://127.0.0.1:5094`

如需使用 RAG 向量库 Milvus，请加上 `--profile milvus`：

```bash
docker compose --profile milvus up -d --build
```

### 方式三：本地启动后端服务

执行完 `setup.ps1` / `setup.sh` 后，如果不需要 Docker，可以直接启动四个本地后端服务：

**Windows:**

```powershell
.\start-local.ps1
```

**macOS / Linux:**

```bash
chmod +x start-local.sh
./start-local.sh
```

### 如果您想自定义安装

可以参考我们的部署文档:

* [中文部署文档](./README/README_zh.md)
* [English Docs](./README/README_en.md)

---

## 🗺️ 路线图

- [x] 多智能体运行时
- [x] MCP 集成支持
- [x] 可视化线性工作流编辑器
- [x] Docker 安全沙箱
- [x] 事件系统
- [x] 定时任务系统
- [ ] 插件系统与钩子
- [ ] 多平台接入
- [ ] 插件市场
- [ ] 单元测试补齐
- [ ] 图任务流编辑
- [ ] 工作区时间旅行

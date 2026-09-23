// Mock workspace tree data
export const mockWorkspace = {
  name: 'Weftora',
  path: '/workspace/Weftora',
  type: 'directory',

  children: [
    {
      name: 'src',
      path: '/workspace/Weftora/src',
      type: 'directory',

      children: [
        {
          name: 'components',
          path: '/workspace/Weftora/src/components',
          type: 'directory',

          children: [
            {
              name: 'chat_panel.vue',
              path: '/workspace/Weftora/src/components/chat_panel.vue',
              type: 'file',
            },

            {
              name: 'file_explorer.vue',
              path: '/workspace/Weftora/src/components/file_explorer.vue',
              type: 'file',
            },

            {
              name: 'message_item.vue',
              path: '/workspace/Weftora/src/components/message_item.vue',
              type: 'file',
            },
          ],
        },

        {
          name: 'views',
          path: '/workspace/Weftora/src/views',
          type: 'directory',

          children: [
            {
              name: 'home.vue',
              path: '/workspace/Weftora/src/views/home.vue',
              type: 'file',
            },

            {
              name: 'settings.vue',
              path: '/workspace/Weftora/src/views/settings.vue',
              type: 'file',
            },
          ],
        },

        {
          name: 'assets',
          path: '/workspace/Weftora/src/assets',
          type: 'directory',

          children: [
            {
              name: 'logo.png',
              path: '/workspace/Weftora/src/assets/logo.png',
              type: 'file',
            },

            {
              name: 'background.jpg',
              path: '/workspace/Weftora/src/assets/background.jpg',
              type: 'file',
            },
          ],
        },

        {
          name: 'main.js',
          path: '/workspace/Weftora/src/main.js',
          type: 'file',
        },

        {
          name: 'App.vue',
          path: '/workspace/Weftora/src/App.vue',
          type: 'file',
        },
      ],
    },

    {
      name: 'electron',
      path: '/workspace/Weftora/electron',
      type: 'directory',

      children: [
        {
          name: 'main.js',
          path: '/workspace/Weftora/electron/main.js',
          type: 'file',
        },

        {
          name: 'preload.js',
          path: '/workspace/Weftora/electron/preload.js',
          type: 'file',
        },

        {
          name: 'ipc',
          path: '/workspace/Weftora/electron/ipc',
          type: 'directory',

          children: [
            {
              name: 'fs.js',
              path: '/workspace/Weftora/electron/ipc/fs.js',
              type: 'file',
            },

            {
              name: 'window.js',
              path: '/workspace/Weftora/electron/ipc/window.js',
              type: 'file',
            },
          ],
        },
      ],
    },

    {
      name: 'node_modules',
      path: '/workspace/Weftora/node_modules',
      type: 'directory',

      children: [
        {
          name: '.bin',
          path: '/workspace/Weftora/node_modules/.bin',
          type: 'directory',

          children: [],
        },

        {
          name: 'vue',
          path: '/workspace/Weftora/node_modules/vue',
          type: 'directory',

          children: [],
        },

        {
          name: 'electron',
          path: '/workspace/Weftora/node_modules/electron',
          type: 'directory',

          children: [],
        },
      ],
    },

    {
      name: 'package.json',
      path: '/workspace/Weftora/package.json',
      type: 'file',
    },

    {
      name: 'vite.config.js',
      path: '/workspace/Weftora/vite.config.js',
      type: 'file',
    },

    {
      name: '.gitignore',
      path: '/workspace/Weftora/.gitignore',
      type: 'file',
    },

    {
      name: 'README.md',
      path: '/workspace/Weftora/README.md',
      type: 'file',
    },
  ],
}



export const mockMcpList = [
  {
    mcp_id: 'mcp_001',
    name: 'Filesystem',
    description: 'Provides local filesystem access including file reading, writing, directory listing and file management operations.',
    transport: 'stdio',
    endpoint: 'npx @modelcontextprotocol/server-filesystem',
    tool_count: 12,
    enabled: true,
    updated_at: '2026-06-01 10:30:00',
  },

  {
    mcp_id: 'mcp_002',
    name: 'GitHub',
    description: 'Interact with GitHub repositories, issues, pull requests and workflows through MCP tools.',
    transport: 'http',
    endpoint: 'https://mcp.github.company.com/mcp',
    tool_count: 28,
    enabled: true,
    updated_at: '2026-05-31 18:20:00',
  },

  {
    mcp_id: 'mcp_003',
    name: 'PostgreSQL',
    description: 'Execute SQL queries and inspect database schema with controlled permissions.',
    transport: 'http',
    endpoint: 'https://db-mcp.internal.company.com/mcp',
    tool_count: 8,
    enabled: false,
    updated_at: '2026-05-30 09:15:00',
  },

  {
    mcp_id: 'mcp_004',
    name: 'Playwright Browser',
    description: 'Browser automation service supporting navigation, screenshots and web interaction.',
    transport: 'stdio',
    endpoint: 'npx @playwright/mcp',
    tool_count: 16,
    enabled: true,
    updated_at: '2026-05-29 16:40:00',
  },

  {
    mcp_id: 'mcp_005',
    name: 'Slack',
    description: 'Send messages, read channels and interact with Slack workspaces.',
    transport: 'http',
    endpoint: 'https://slack-mcp.company.com/mcp',
    tool_count: 22,
    enabled: false,
    updated_at: '2026-05-28 13:50:00',
  },

  {
    mcp_id: 'mcp_006',
    name: 'Knowledge Base',
    description: 'Enterprise document retrieval and semantic search service for internal knowledge.',
    transport: 'http',
    endpoint: 'https://kb.company.com/mcp',
    tool_count: 6,
    enabled: true,
    updated_at: '2026-05-27 11:00:00',
  },

  {
    mcp_id: 'mcp_007',
    name: 'Docker',
    description: 'Manage containers, inspect images and execute containerized workloads.',
    transport: 'stdio',
    endpoint: 'docker run company/mcp-docker-server',
    tool_count: 19,
    enabled: false,
    updated_at: '2026-05-25 20:18:00',
  },

  {
    mcp_id: 'mcp_008',
    name: 'Redis',
    description: 'Inspect keys, run commands and monitor cache usage through MCP.',
    transport: 'http',
    endpoint: 'https://redis-mcp.company.com/mcp',
    tool_count: 10,
    enabled: true,
    updated_at: '2026-05-24 08:45:00',
  },
]

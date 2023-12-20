vim.cmd([[call plug#begin('~/.config/nvim/plugged')]])

-- NERDTree 文件浏览器
vim.cmd([[Plug 'preservim/nerdtree']])
vim.cmd([[Plug 'tiagofumo/vim-nerdtree-syntax-highlight']])
-- Gruvbox 主题
--vim.cmd([[Plug 'morhetz/gruvbox']])
--vim.cmd([[Plug 'ryanoasis/vim-devicons']])
-- Auto-Pairs 括号补全工具
vim.cmd([[Plug 'jiangmiao/auto-pairs']])
-- Dashboard-Nvim 启动页
vim.cmd([[Plug 'glepnir/dashboard-nvim']])
vim.cmd([[Plug 'kyazdani42/nvim-web-devicons']])
-- Vim-Airline 状态栏
vim.cmd([[Plug 'vim-airline/vim-airline']])
vim.cmd([[Plug 'vim-airline/vim-airline-themes']])
-- Mason LSP 管理包 (必须放在 Nvim-Cmp 前面)
vim.cmd([[Plug 'williamboman/mason.nvim']])
vim.cmd([[Plug 'williamboman/mason-lspconfig.nvim']])
-- Nvim-Cmp 代码补全
vim.cmd([[Plug 'neovim/nvim-lspconfig']])
vim.cmd([[Plug 'hrsh7th/nvim-cmp']])
vim.cmd([[Plug 'hrsh7th/cmp-nvim-lsp', { 'after': 'nvim-cmp' }]])
vim.cmd([[Plug 'hrsh7th/cmp-buffer', { 'after': 'nvim-cmp' }]])
vim.cmd([[Plug 'hrsh7th/cmp-path', { 'after': 'nvim-cmp' }]])
vim.cmd([[Plug 'hrsh7th/cmp-cmdline', { 'after': 'nvim-cmp' }]])
vim.cmd([[Plug 'L3MON4D3/LuaSnip']])
vim.cmd([[Plug 'saadparwaiz1/cmp_luasnip']])

vim.cmd([[call plug#end()]])
local opts = {
    noremap = true, -- non-recursive
    silent = true, -- do not show message
}

vim.api.nvim_set_keymap('n', '<leader>w', ':w<CR>', opts)
vim.api.nvim_set_keymap('n', '<leader>q', ':q<CR>', opts)
vim.api.nvim_set_keymap('n', '<leader>n', ':NERDTreeFocus<CR>', opts)
vim.api.nvim_set_keymap('n', '<C-n>', ':NERDTree<CR>', opts)
vim.api.nvim_set_keymap('n', '<C-t>', ':NERDTreeToggle<CR>', opts)
vim.api.nvim_set_keymap('n', '<C-f>', ':NERDTreeFind<CR>', opts)
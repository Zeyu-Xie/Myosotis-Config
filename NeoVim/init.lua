require("plugins")
require("options")
require("keymaps")
require("colorscheme")
require('dashboard').setup {
    theme = 'hyper',
    shortcut_type = "number",
    config = {
        packages = {
            enable = true
        }
    }
}
require("NERDTreeStyle")
require("lsp")



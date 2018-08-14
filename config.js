const __token__ = "SET BOT TOKEN HERE"
exports.token = (token) => {
    return token ? token : __token__;
}
exports.command_prefix = "~"

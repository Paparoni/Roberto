const __token__ = "SET BOT TOKEN HERE";
const __PORT__ = "SET PORT HERE";
exports.token = (token) => {
    return token ? token : __token__;
};
exports.command_prefix = "~";
exports.PORT = (typeof __PORT__ == "number") ? __PORT__ : 3000;

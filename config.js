const __token__ = "";
const __PORT__ = process.env.PORT;
exports.token = (token) => {
    return token ? token : __token__;
};
exports.command_prefix = "~";
exports.PORT = (typeof __PORT__ == "number") ? __PORT__ : 3000;

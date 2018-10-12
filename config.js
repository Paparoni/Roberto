const __token__ = "NDc2OTQzMDcxMzcyOTAyNDIw.DqGq2w.uOv4ApoZSe3Nkk0X8Z5nRHRSAJI";
const __PORT__ = process.env.PORT;
exports.token = (token) => {
    return token ? token : __token__;
};
exports.command_prefix = "~";
exports.PORT = (typeof __PORT__ == "number") ? __PORT__ : 3000;

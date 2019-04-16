class ResponseHelper {
  static sendResponse(res, code, success, message, data) {
    return res.status(code).json({
      success,
      message,
      data,
    });
  }
}

export default ResponseHelper;

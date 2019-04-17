class ResponseHelper {
  static sendResponse(res, code, data) {
    return res.status(code).json({
      ...data,
    });
  }
}

export default ResponseHelper;

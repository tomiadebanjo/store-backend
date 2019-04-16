import ResponseHelper from './ResponseHelper';

class HttpError extends Error {
  constructor(message, code = 500) {
    super();
    this.message = message;
    this.statusCode = code;
  }

  static throwErrorIfNullOrEmpty(data, message, code = 404) {
    if (!data || data.length < 1) {
      throw new HttpError(message, code);
    }
  }

  static sendErrorResponse(error, res) {
    if (error instanceof HttpError) {
      const { statusCode, message } = error;
      return ResponseHelper.sendResponse(res, statusCode, false, message);
    }

    const code = error.statusCode || 500;
    const { message } = error;
    return res.status(code).json({
      success: false,
      message,
    });
  }
}

export default HttpError;

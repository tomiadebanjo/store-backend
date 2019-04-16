class PaginationHelper {
  static paginate(page, limit) {
    const offset = (page - 1) * limit;
    return { offset, limit: +limit };
  }
}

export default PaginationHelper;

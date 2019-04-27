import models from '../database/models';
import HttpError from '../helpers/ErrorHandler';

const { tax } = models;

class TaxService {
  static async fetchTaxDetailsById(tax_id) {
    const taxInfo = await tax.findByPk(tax_id);

    HttpError.throwErrorIfNullOrEmpty(
      taxInfo,
      "tax_id doesn't exist, Please Provide a valid tax_id"
    );
    return taxInfo;
  }
}

export default TaxService;

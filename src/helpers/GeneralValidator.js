class GeneralValidator {
  static validateNumber(number) {
    const numberRegex = /^[1-9][0-9]*$/;

    return numberRegex.test(number);
  }

  static validateIntegersInObject(query) {
    return Object.entries(query).reduce((errors, data) => {
      const [key, value] = data;
      const condition = typeof value !== 'undefined'
        && !GeneralValidator.validateNumber(value)
        && key !== 'query_string';

      if (condition) {
        errors.push(`Minimum "${key}" value is 1`);
      }
      return errors;
    }, []);
  }
}

export default GeneralValidator;

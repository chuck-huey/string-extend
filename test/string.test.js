require('../string');

describe('String method tests', function() {
  test('should check for vowels', function() {
    expect('the quick'.hasVowels()).toBe(true);
    expect('frsk prfth'.hasVowels()).toBe(false);
    expect(''.hasVowels()).toBe(false);
    expect(' '.hasVowels()).toBe(false);
  });

  test('should convert string to uppercase', function() {
    expect('ochuko'.toUpper()).toBe('OCHUKO');
    expect('esther seyi ochuko'.toUpper()).toBe('ESTHER SEYI OCHUKO');
    expect('why So SERious'.toUpper()).toBe('WHY SO SERIOUS');
  });

  test('should convert string to lowercase', function() {
    expect('ochuko'.toLower()).toBe('ochuko');
    expect('ESTHER SEYI OCHUKO'.toLower()).toBe('esther seyi ochuko');
    expect('WHy So 453sdj SERious'.toLower()).toBe('why so 453sdj serious');
  });

  test('should convert first character of string to uppercase', function() {
    expect('o'.ucFirst()).toBe('O');
    expect('och-uko'.ucFirst()).toBe('Och-uko');
    expect('esther seyi'.ucFirst()).toBe('Esther seyi');
    expect('1Hy So 453sdj SERious'.ucFirst).toThrow();
  });

  test('should convert check if string issa question', function() {
    expect('OCHUKO!'.isQuestion()).toBe(false);
    expect('my name? is'.isQuestion()).toBe(false);
    expect('3242342134 432434'.isQuestion()).toBe(false);
  });

  test('should get all words in a string', function() {
    expect('The Qu-ick brown fox'.words()).toContain('Qu-ick');
    expect(' '.words()).toBe(null);
  });

  test('should get number of words in a string', function() {
    expect('The Quick brown-fox'.wordCount()).toBe(3);
    expect(' '.wordCount()).toBe(0);
  });

  test('should get all numbers in a string in their word form', function() {
    expect('032510'.numberWords()).toBe('zero three two five one zero');
    expect('i am 53years old and 6ft tall.'.numberWords()).toBe('five three six');
    expect('The Quick brown fox'.numberWords()).toBe('no numbers in string');
    expect(' '.numberWords()).toBe('no numbers in string');
  });

  test('should check of string is a digit', function() {
    expect('3tr'.isDigit()).toBe(false);
    expect('34'.isDigit()).toBe(false);
    expect(' '.isDigit()).toBe(false);
    expect('Quick'.isDigit()).toBe(false);
  });

  test('should add commas to numbers', function() {
    expect('111198711.11'.toCurrency()).toBe('111,198,711.11');
    expect('11.11'.toCurrency()).toEqual('11.11');
    expect('.11'.toCurrency()).toEqual(
      'valid string is numbers with/without 2 decimal numbers minimum'
    );
  });

  test('should remove commas from currencies', function() {
    expect('111,111.11'.fromCurrency()).toBe(111111.11);
    expect('1,111'.fromCurrency()).toBe(1111);
    expect('11.11'.fromCurrency()).toEqual('valid string must have commas');
  });

  test('should change case of letters', function() {
    expect('mr. BeN'.inverseCase()).toBe('MR. bEn');
    expect('mIkE is 25.'.inverseCase()).toBe('MiKe IS 25.');
    expect('2324 423742'.inverseCase()).toBe('valid string must contain letters');
  });

  test('should change case of letters', function() {
    expect('mr. BeN'.alternatingCase()).toBe('mR. bEn');
    expect('Onomatopoeia'.alternatingCase()).toBe('oNoMaToPoEiA');
    expect('boy is girl'.alternatingCase()).toBe('bOy iS gIrL');
  });
});

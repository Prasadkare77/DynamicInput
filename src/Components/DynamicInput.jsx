// DynamicInput.js
import React from 'react';

const DynamicInput = ({
  inputStyle,
  inputTitle,
  required,
  disable,
  customChangeFunction,
  holder,
  labelStyle,
  errorMessage,
  error,
  maxLength,
  minLength,
  options,
  inputType,
  currency,
  value,
  scenario,
  regexPattern,
}) => {
  const handleChange = (e) => {
    if (customChangeFunction) {
      customChangeFunction(e.target.value);
    }
  };

  const renderInputField = () => {
    switch (inputType) {
      case 'select':
        return (
          <select
            className={`${inputStyle} ${disable ? 'bg-gray-200' : 'bg-white'} ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
            onChange={handleChange}
            disabled={disable}
            value={value}
          >
            <option value="" disabled>
              Select an option
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'currency':
        const formattedCurrency = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(value);

        return (
          <input
            type="text"
            className={`${inputStyle} ${disable ? 'bg-gray-200' : 'bg-white'} ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
            value={formattedCurrency}
            readOnly
          />
        );

      default:
        return (
          <input
            type={inputType}
            className={`${inputStyle} ${disable ? 'bg-gray-200' : 'bg-white'} ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder={holder}
            onChange={handleChange}
            value={value}
            disabled={disable}
            maxLength={maxLength}
            minLength={minLength}
          />
        );
    }
  };

  const validateInput = () => {
    if (required && (value === undefined || value === '')) {
      return false;
    }

    if (regexPattern && !new RegExp(regexPattern).test(value)) {
      return false;
    }

    return true;
  };

  return (
    <div className="mb-4">
      <label className={`${labelStyle} text-lg font-bold mb-2`}>
        {inputTitle}
      </label>
      {renderInputField()}
      {!disable && !validateInput() && (
        <p className="text-red-500 mt-2">{errorMessage}</p>
      )}
    </div>
  );
};

export default DynamicInput;

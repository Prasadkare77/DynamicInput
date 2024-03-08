// ParentComponent.js
import React, { useState } from 'react';
import DynamicInput from './DynamicInput';

const ParentComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputType, setInputType] = useState('text');
  const [disabled, setDisabled] = useState(false);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleTypeChange = (type) => {
    setInputType(type);
    setInputValue(''); // Reset value on type change
  };

  const handleDisableChange = () => {
    setDisabled(!disabled);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Parent Component</h1>

      {/* Create Scenario */}
      <DynamicInput
        inputStyle="border p-2 w-full"
        inputTitle="Create Input"
        required={true}
        disable={disabled}
        customChangeFunction={handleInputChange}
        holder="Enter text here"
        labelStyle="text-lg font-bold"
        errorMessage="This field is required."
        error={!inputValue && !disabled}
        maxLength={10}
        minLength={5}
        inputType={inputType}
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
        ]}
        value={inputValue}
        scenario="create"
        regexPattern="[a-zA-Z0-9]+"
      />

      {/* Edit Scenario */}
      <DynamicInput
        inputStyle="border p-2 w-full"
        inputTitle="Edit Input"
        required={true}
        disable={disabled}
        customChangeFunction={handleInputChange}
        holder="Enter text here"
        labelStyle="text-lg font-bold"
        errorMessage="This field is required."
        error={!inputValue && !disabled}
        maxLength={10}
        minLength={5}
        inputType={inputType}
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
        ]}
        value={inputValue}
        scenario="edit"
        regexPattern="[a-zA-Z0-9]+"
      />

      {/* Disable Scenario */}
      <DynamicInput
        inputStyle="border p-2 w-full"
        inputTitle="Disable Input"
        required={true}
        disable={disabled}
        holder="Enter text here"
        labelStyle="text-lg font-bold"
        errorMessage="This field is required."
        error={!inputValue && !disabled}
        maxLength={10}
        minLength={5}
        inputType={inputType}
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
        ]}
        value={inputValue}
        scenario="disable"
        regexPattern="[a-zA-Z0-9]+"
      />

      <div className="mt-4 flex items-center">
        <label className="mr-4">Select Input Type:</label>
        <select
          className="p-2 border"
          onChange={(e) => handleTypeChange(e.target.value)}
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="select">Select</option>
          <option value="currency">Currency</option>
        </select>
      </div>

      <div className="mt-4 flex items-center">
        <label className="mr-4">Disable Input:</label>
        <input
          type="checkbox"
          checked={disabled}
          onChange={handleDisableChange}
          className="p-2"
        />
      </div>
    </div>
  );
};

export default ParentComponent;

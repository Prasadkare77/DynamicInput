# Vite + React DynamicInput Component

This project demonstrates a flexible ReactJS component (`DynamicInput`) that can be easily integrated into various parent components. The component allows dynamic selection of input types (e.g., text, number, select, radio, checkbox, password, currency) and handles three scenarios: create, edit, and disable.

## Instructions

### 1. Install Dependencies

Make sure you have Node.js and npm (Node Package Manager) installed on your machine. Navigate to the project directory in the terminal and run:

```bash
npm install

2. Run the Application
Start the development server by running:

Copy code
npm run dev
This command will build and serve the application. Once the process is complete, you should see a message indicating that the server is running. By default, Vite uses http://localhost:3000 as the development server address.

3. Open in Browser
Open your web browser and go to http://localhost:3000. You should see the "Parent Component" page with the sample input fields.

4. Interact with the Component
Try creating, editing, and disabling the input fields to see how the DynamicInput component behaves in different scenarios.

Project Structure
src/components/DynamicInput.js: The flexible ReactJS component.
src/components/ParentComponent.js: The sample parent component demonstrating the usage of DynamicInput.
... (Other project files)
Additional Information
The project is built using Vite and React.
Tailwind CSS is used for styling.
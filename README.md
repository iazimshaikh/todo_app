# Todo App

Welcome to the **Todo App**! This is a simple application that allows you to manage your daily tasks. You can add tasks to your to-do list, and remove them once they're completed. The app uses `localStorage` to save your tasks so they persist even after you refresh the page.

---

## Features

- **Add Tasks**: Allows users to add tasks to the to-do list.
- **Delete Tasks**: Remove tasks from the list by clicking on the delete icon.
- **Persistence**: Tasks are saved in `localStorage` and will persist even after a page refresh.

---

## Technologies Used

- **HTML**: Structure of the to-do list application.
- **CSS**: Basic styling to create a visually appealing interface.
- **JavaScript**: Handles the functionality of adding, removing, and saving tasks.

---

## Demo

![image](https://github.com/user-attachments/assets/e3bf2633-198e-4554-94b2-068356ed39ef)

- Saving Data to localstorage (Data will be fetched again if you close browser/page one time)

![image](https://github.com/user-attachments/assets/e42bde88-6bce-455b-9c58-02c53bb047f5)

---

## How to Use

1. Clone the repository or download the files to your local machine.
2. Open the `index.html` file in your browser to access the Todo App.
3. **Add a Task**: Enter your task in the input box and click the **"Add to list"** button.
4. **Delete a Task**: Click on the trash icon next to a task to delete it from the list.
5. Your tasks will be saved in the browser's `localStorage` and will remain available after refreshing the page.

---


---

## How It Works

1. **Adding Tasks**: 
   - When you type a task in the input field and click the **"Add to list"** button, a new list item (`<li>`) is created and added to the to-do list.
   - Each task also gets a delete icon (trash can) next to it.

2. **Removing Tasks**:
   - When you click the delete icon next to a task, that task is removed from the list.

3. **Persistence**:
   - The app uses `localStorage` to store the current state of the to-do list. This ensures that your tasks persist even after you refresh the page.
   - The `showList()` function loads the saved tasks from `localStorage` when the page is loaded.

4. **Saving Tasks**:
   - The `saveTodos()` function saves the list of tasks in `localStorage` every time a task is added or removed.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/iazimshaikh/todo_app.git
   cd todo_app
   open index.html  # macOS
   start index.html # Windows (can open directly in any browser/Live Server)

## Future Improvements
- **Task Editing**: Add the ability to edit tasks after they have been added.
- **Task Categories**: Implement categorization of tasks (e.g., Work, Personal).
- **Due Dates**: Allow users to set due dates for tasks and show them in a calendar format.
- **User Authentication**: Let users create accounts and save their tasks across devices.

## Contributing
Feel free to fork the repository and submit pull requests for any improvements or bug fixes. If you encounter any issues or have suggestions, please open an issue on GitHub!

## License
This project is open-source and available under the MIT License.

## Contact
For any questions or feedback, feel free to reach out:

- **Email**: itsshaikhhere@gmail.com

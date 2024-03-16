# Frontend Home Coding Challenge - Posts Monitor UI

This project implements a posts list UI using React, TypeScript, Vite, and several other libraries for managing state, fetching data, styling, and optimizing performance.

#### Technologies Used:

- React
- TypeScript
- Vite
- @tanstack/react-query
- axios
- Zustand
- Material-UI
- react-window
- react-window-infinite-loader

#### Installation

To run this project locally, follow these steps:

1. Clone the repository:
   git clone https://github.com/omerperez/posts-monitor.git

2. Navigate to the project directory:
   cd posts-monitor

3. Install dependencies:
   npm install

4. Develop mode (port 5173):
   npm run dev

5. Build for production (port 3000):
   npm run preview

#### Folder Structure

components/: Contains React components such as PostCard, Header, etc.
hooks/: Custom hooks for managing state, etc.
pages/: React components representing different pages of the application (only one page used in this task).
services/: Service layer for making HTTP requests using axios (only one service used in this task).
stores/: State management using Zustand, including stores and actions.
theme/: application layout theme configuration using Material-UI.
utils/: Utility functions used throughout the application.
types/: TypeScript types definition + declare.
constants.ts: Constants shared across the entire application.
App.tsx: The main component that

#### Features

- **Data Fetching**: Data is fetched from [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com) API, including posts, comments, and users, enhancing the completeness of information presented to users.

- **Post Cards**: Each post is represented as a card, providing key information such as the post title, number of comments, and a checkbox for easy selection + View More Button.

  - **View More Button**: A "View More" button on each post card allows users to explore additional details about the selected post. This includes the post title, body, comments, and user details, all conveniently presented in a modal.

- **Header Features**: The header section of the page offers user-friendly features:

  - **Counter**: Displays the number of posts currently selected, aiding users in keeping track of their selections.
  - **Refresh Button**: Allows users to reload posts easily, ensuring they have access to the most up-to-date information.
  - **Select All Button**: Offers the convenience of selecting all posts with a single click, streamlining the selection process for users.

- **Optimized Performance**: Utilizes virtualization and infinite loading techniques to enhance performance. This ensures that only the posts visible in the viewport are rendered, leading to faster load times and smoother user experience, especially for large datasets.

- **Responsive Design**: The UI is designed to be responsive, adapting seamlessly to different screen sizes and devices. This ensures that users have a consistent and enjoyable experience regardless of the device they're using.

#### Additional Notes

- Make sure to have an active internet connection as the data is fetched from [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com).

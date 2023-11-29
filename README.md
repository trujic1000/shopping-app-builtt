# Shopping App Builtt

This project is a shopping cart application built as a task for FullStack Developer position at Builtt

## Prerequisites

Make sure you have the following installed on your machine:

-   [PHP](https://www.php.net/)
-   [Composer](https://getcomposer.org/)
-   [Node.js](https://nodejs.org/)
-   [npm](https://www.npmjs.com/)

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/trujic1000/shopping-app-builtt.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd shopping-app-builtt
    ```

3. **Install PHP dependencies:**

    ```bash
    composer install
    ```

4. **Install JavaScript dependencies:**

    ```bash
    npm install
    ```

5. **Copy the environment file:**

    ```bash
    cp .env.example .env
    ```

6. **Generate an application key:**

    ```bash
    php artisan key:generate
    ```

7. **Configure your database:**

    Update the `.env` file with your database connection details.

8. **Run migrations:**

    ```bash
    php artisan migrate
    ```

9. **Seed the database:**

    ```bash
    php artisan db:seed --class=ProductsTableSeeder
    php artisan db:seed --class=UsersTableSeeder
    ```

10. **Create a symbolic link to make the storage accessible from the web:**

    ```bash
    php artisan storage:link
    ```

11. **Compile assets:**

    ```bash
    npm run dev
    ```

12. **Start the development server:**

    ```bash
    php artisan serve
    ```

13. **Visit the application:**

    Open your browser and go to [http://localhost:8000](http://localhost:8000)

## Additional Configuration

To access the application with a test user account, you can use the following credentials:

-   **Email:** admin@builtt.com
-   **Password:** admin123

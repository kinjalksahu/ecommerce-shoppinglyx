# Shoppinglyx

Shoppinglyx is a static Django-based shopping website designed to showcase products and provide a simple e-commerce experience.

![Home Page Screenshot](https://github.com/geekyshow1/shoppinglyx/blob/main/Screenshots/Home.jpeg)

---
---

## Live Demo

The project is deployed on **Render**. You can access the live site here:

[https://ecommerce-shoppinglyx.onrender.com/](https://ecommerce-shoppinglyx.onrender.com/)

---


## Features

- **Product Listing**: View a variety of products with details.
- **Product Details**: Detailed view of individual products.
- **Cart Management**: Add, remove, and update items in the cart.
- **User Authentication**: Login, logout, and profile management.
- **Order Management**: Place orders and view order history.
- **Responsive Design**: Optimized for desktop and mobile devices.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/geekyshow1/shoppinglyx.git
   cd shoppinglyx

2. Create and activate a virtual environment:
   
   python -m venv my_venv
   my_venv\Scripts\activate  # On Windows

3. Install dependencies:
   
   pip install -r requirements.txt

4.  Apply database migrations:
    
    python manage.py migrate

5. Run the development server:
   
   python manage.py runserver

6. Open the website in your browser:

   http://127.0.0.1:8000/

## Deployment
# To deploy this project on Render or any other hosting platform, follow these steps:

1. Set DEBUG = False in settings.py.
2. Configure ALLOWED_HOSTS with your domain or Render's URL.
3. Use a production database (e.g., PostgreSQL).
4. Collect static files:

python [manage.py](http://_vscodecontentref_/1) collectstatic

5. Follow the hosting platform's deployment instructions.

## Project Structure

shoppinglyx/
├── app/                # Main application folder
├── shoppinglyx/        # Project settings and configurations
├── templates/          # HTML templates
├── static/             # Static files (CSS, JS, images)
├── media/              # Uploaded media files
├── my_venv/            # Virtual environment (not included in the repo)
└── [manage.py](http://_vscodecontentref_/2)           # Django management script

## Technologies Used
 Backend: Django 5.1.7
 Frontend: HTML, CSS, JavaScript
 Database: SQLite (default, can be switched to PostgreSQL for production)

## License
This project is licensed under the MIT License. See the LICENSE file for details

# Author
 Developed by Kinjalk sahu.


You can customize this further based on your specific project details. Let me know if you need additional sections! 



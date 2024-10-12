Assignment2

# Sadykova Yasmin's Portfolio

This is the personal portfolio website of Yasmin Sadykova, an aspiring web developer. The site was built using **Bootstrap 4** for a fully responsive layout and styled with custom **CSS**.

## Features

- **Responsive Design**: The website is fully responsive, with elements adapting to various screen sizes using Bootstrap's grid system (`container`, `row`, `col`). On mobile devices, the layout adjusts smoothly thanks to responsive classes like `col-md-6` and `col-lg-4`.
- **Bootstrap Components**: Bootstrap's **card** components are used in the "My Hobbies" section to display hobbies in a visually appealing manner. Each card contains an image and a description.
- **Flexbox**: The `hobby-cards` section uses **Flexbox** to organize the hobby cards. The cards wrap to the next line on smaller screens and are displayed in a grid on larger screens.
- **CSS Animations**: 
  - Images in the hobbies section increase in size when hovered (`transform: scale(1.1)`), providing a subtle animation effect.
  - Links in the footer change color and get underlined when hovered, using `transition` for smooth effects.
- **Pseudo-elements**: Stars (`★`) were added before section titles using the `::before` pseudo-element to give a decorative touch.
  
## Sections

1. **Header**: Displays the name, profession, and a short tagline.
2. **About Me**: Contains a brief biography and a profile picture.
3. **My Hobbies**: Showcases hobbies using Bootstrap cards and includes hover effects for interactivity.
4. **Interesting Facts**: A table displays interesting facts about Yasmin using Bootstrap's **table-striped** class.
5. **Contact Information**: Includes contact details and social media links styled with Bootstrap.

## Technologies Used

- **HTML5**
- **CSS3**
- **Bootstrap 4**
- **Flexbox**
- **FontAwesome Icons** (for social media icons)
Assignment3

# Sadykova Yasmin's Portfolio - README

This repository contains the portfolio website for **Sadykova Yasmin**, showcasing her bio, hobbies, and contact information. The website is built with **Bootstrap 4** to ensure responsiveness and ease of styling, along with some custom **CSS** elements for unique designs.

## 1. Bootstrap Integration

### Bootstrap CDN Links

The Bootstrap CSS framework is included in the project via CDN:
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
Bootstrap Scripts
To enable some of Bootstrap's interactive components (e.g., modals, dropdowns), the following scripts are added:

html
Копировать код
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
2. Header Structure

Using Bootstrap classes for styling the header:

html
Копировать код
<header class="bg-dark text-white text-center py-5">
    <h1>Sadykova Yasmin</h1>
    <p>Aspiring Web Developer</p>
</header>
bg-dark: Adds a dark background to the header.
text-white: Makes the text color white.
text-center: Centers the text horizontally.
py-5: Adds vertical padding (top and bottom) to the header.
3. "About Me" Section

Using Bootstrap classes for styling the profile image:

html

<img src="..." alt="Sadykova Yasmin" class="profile-img rounded-circle">
rounded-circle: Makes the profile image circular for a polished look.
4. "My Hobbies" Section

Using Flexbox provided by Bootstrap for arranging the hobby cards:

html

<div class="hobby-cards d-flex justify-content-center flex-wrap">
    <!-- Card content here -->
</div>
d-flex: Turns the container into a flexbox container.
justify-content-center: Horizontally centers the cards within the container.
flex-wrap: Allows the cards to wrap onto the next line if necessary (ensuring responsiveness).
5. "Interesting Facts" Section

Applying Bootstrap classes to create a table for displaying facts:

html

<table class="table table-bordered">
    <!-- Table content here -->
</table>
table: Adds the default Bootstrap table styling.
table-bordered: Adds borders around each cell for better separation.
Adding a light-colored header to the table:

html

<thead class="thead-light">
    <!-- Header content here -->
</thead>
thead-light: Adds a light background to the table header for contrast.
6. Footer

Styling the footer using Bootstrap classes:

html

<footer class="text-center py-4 bg-dark text-white">
    <!-- Footer content here -->
</footer>
text-center: Centers the footer content horizontally.
py-4: Adds padding to the top and bottom of the footer.
bg-dark and text-white: Same background and text styling as the header for consistency.
7. Footer Links

Customizing link styles within the footer:

html
<a href="..." class="text-warning">justyasssa</a>
text-warning: Adds a yellow color to the link, making it stand out against the dark background.





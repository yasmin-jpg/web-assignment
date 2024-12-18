Assignment2

# Sadykova Yasmin's Portfolio

 The site was built using **Bootstrap 4** for a fully responsive layout and styled with custom **CSS**.

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

The website is built with **Bootstrap 4** to ensure responsiveness and ease of styling, along with some custom **CSS** elements for unique designs.

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
Копировать код
<header class="bg-dark text-white text-center py-5">
  
3. "About Me" Section
Using Bootstrap classes for styling the profile image:
<img src="..." alt="Sadykova Yasmin" class="profile-img rounded-circle">
rounded-circle: Makes the profile image circular for a polished look.
5. "My Hobbies" Section
Using Flexbox provided by Bootstrap for arranging the hobby cards:
<div class="hobby-cards d-flex justify-content-center flex-wrap">
    <!-- Card content here -->
</div>
d-flex: Turns the container into a flexbox container.
justify-content-center: Horizontally centers the cards within the container.
flex-wrap: Allows the cards to wrap onto the next line if necessary (ensuring responsiveness).

5. "Interesting Facts" Section
Applying Bootstrap classes to create a table for displaying facts:
<table class="table table-bordered">
    <!-- Table content here -->
</table>
table: Adds the default Bootstrap table styling.
table-bordered: Adds borders around each cell for better separation.
Adding a light-colored header to the table:
<thead class="thead-light">
    <!-- Header content here -->
</thead>
thead-light: Adds a light background to the table header for contrast.

6. Footer
Styling the footer using Bootstrap classes:
<footer class="text-center py-4 bg-dark text-white">
    <!-- Footer content here -->

7. Footer Links
Customizing link styles within the footer:
<a href="..." class="text-warning">justyasssa</a>




Assignment4
# Dice Game

A simple interactive dice game where users can roll two dice by clicking a button.

## Instructions

1. **Opening the Game:**
   - Open the `index.html` file in any modern web browser.
   
2. **How to Play:**
   - Click the "Roll Dice" button to roll two dice.
   - The result will show the random values of each die.
   - The sum of the two dice will be displayed.
   - The number of times the dice have been rolled will be updated each time.

3. **Winning Condition:**
   - If both dice show the same value, a message will appear, indicating that you've won.

## Additional Features

- **Roll Counter:** Tracks and displays how many times the dice have been rolled.
- **Sum Display:** Shows the total of the two dice after each roll.
- **Winning Message:** Displays a message if both dice land on the same number.




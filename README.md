---

# S.C. Trivedi Trust Hospital Website

This repository contains the source code for the official website of S.C. Trivedi Memorial Mother & Child Care Trust Hospital. The website showcases the services, facilities, and legacy of the hospital, as well as providing information about the founder, Sri S.C. Trivedi.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Getting Started](#getting-started)
4. [Folder Structure](#folder-structure)
5. [Usage](#usage)
6. [Contact](#contact)
7. [License](#license)

## Introduction

The S.C. Trivedi Trust Hospital website is designed to provide patients and visitors with all the necessary information about the hospital, its services, and its staff. The website also includes a brief biography of Sri S.C. Trivedi, the philanthropist behind the trust.

## Features

- **Hero Section with Slideshow**: A dynamic slideshow displaying images of the hospital with a typewriter effect introducing the hospital.
- **Doctor's Profile**: Information about Dr. Amita Shukla, a renowned obstetrician and gynecologist associated with the hospital.
- **Why S.C. Trivedi?**: A section that highlights the hospital’s facilities and services, with additional images and detailed descriptions.
- **Biography Section**: A comprehensive biography of Sri S.C. Trivedi, detailing his life, career, and philanthropic activities.
- **Care Chronicles**: A gallery showcasing the hospital's infrastructure and patient care services.
- **Spotlight Stories**: A photo grid displaying recent news and events related to the hospital.
- **Contact Section**: A form allowing users to send inquiries directly to the hospital, along with a floating WhatsApp button for instant communication.
- **Google Maps Integration**: An embedded Google Map showing the hospital's location.
- **Social Media Links**: Quick access to the hospital’s social media profiles.

## Getting Started

To run this website locally, follow these steps:

### Prerequisites

- A modern web browser
- A local server setup (e.g., XAMPP, WAMP, or Python’s HTTP server)

### Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/yourusername/sc-trivedi-hospital.git
    ```
2. Navigate to the project directory:
    ```bash
    cd sc-trivedi-hospital
    ```

### Running Locally

- You can open the `index.html` file directly in your browser, or if using a server, place the files in the appropriate directory and start the server.

## Folder Structure

```
sc-trivedi-hospital/
│
├── assets/
│   ├── favicon_io/
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   ├── trust pic.jpg
│   ├── machines(1).jpg
│   ├── rooms(1).jpg
│   ├── staff(1).jpg
│   ├── hall(1).jpg
│   ├── mam-pic.jpg
│   ├── logo.jpeg
│   ├── hospital_pic(2).webp
│   ├── Gall1.jpg
│   └── ...
│
├── index.html
├── style.css
├── script.js
└── README.md
```

- **assets/**: Contains all the images and icons used on the website.
- **index.html**: The main HTML file for the website.
- **style.css**: The main stylesheet for styling the website.
- **script.js**: Contains JavaScript for interactive elements like the slideshow and typewriter effect.

## Usage

- **Slideshow**: Images in the slideshow can be changed by updating the `background-image` URL in the `.slide` divs within `index.html`.
- **Typewriter Effect**: Customize the text by altering the `data-type` attribute in the `.typewrite` anchor tag.
- **Contact Form**: The form submits data to Formspree; replace the Formspree endpoint with your own or modify it for your backend.

## Contact

For any inquiries, please contact us via the website's [Contact Form](https://www.sctrust.com/contact) or reach out directly through WhatsApp.

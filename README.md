# CV-editor App

Hello there and welcome to the **CV-editor app**!

Check out our CV-app to see our creation and manage your CVs efficiently.

## How to Get Started

To get started with the CV-editor app, follow these steps:

1. **Log In**  
   First, you need to log in. We recommend using your GitHub account, but using your Google account works just as well.

2. **Homepage**  
   After logging in, you’ll arrive at the homepage, where you can do all sorts of things like creating or editing your CV.

3. **Create-CV**  
   We recommend checking out the **Create-CV** section to start creating your CV using our tools.

4. **Old-CV**  
   Once you’ve created your CV, head over to the **Old-CV** section to view, edit, and manage previous CV versions.

5. **About Page**  
   Don’t forget to check out the **About** page to see what it's all about (it’s a funny one!).

## How It Works

This website is made to help people create, save, and manage their CVs (a document that shows your skills, experience, and education when applying for jobs).

- **Create Your First CV**  
   You can create your first CV easily using our helpful tools.
  
- **Text Editor (Tiptap)**  
   There's a special text editor (called Tiptap) that allows you to write and format your CV neatly. You can add headings, bullet points, and other styles to make your CV look professional.

- **Save and Edit CVs**  
   Once you’re done, you can save your CVs on the website and edit them anytime, whenever you need to update your details.

---

## Installation Instructions

Follow the steps below to get the app running locally on your machine.

### Prerequisites

### 1. Clone the Repository

To clone the repository:

1. Open a terminal or Git Bash.
2. Navigate to the directory where you want to store your project.
3. Run the following command to clone the repository:
   git clone git@github.com:saad-rangara/CV-Editor.git
   

5. After cloning, navigate into the project folder:
cd your-repository-name

### 2. Install Dependencies
Once you’ve cloned the repository, navigate to the project folder and run the following command to install the required dependencies:

Using npm:

npm install --force(force due to Next.js 15)

### 3. Set Up Configuration
If your project requires specific configurations (e.g., environment variables), you may need to set them up:
Create (".env.local") in root folder
Open the .env file and configure the necessary keys (like API keys, database URLs, etc.). For example:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your clerk key
CLERK_SECRET_KEY=your clerk key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_DATABASE_URL=your supabase key

### 4. Run the Application Locally
Once you've installed dependencies and set up your configuration, you can run the app locally.

Using npm:
npm start
The app will start running locally, and you can access it in your browser at http://localhost:3000 (or another port specified).

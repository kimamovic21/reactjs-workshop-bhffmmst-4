
## Deploying Vite App to GitHub Pages

1.  **Create a GitHub Account and Install Git:**

    - If you don't have a GitHub account, sign up and install Git on your computer.

2.  **Create a New Repository:**

    - Log in to your GitHub account and click on the "New" button to create a new repository.
    - Set the repository name and click on the "Create repository" button.

3.  **Set Up the Repository:**

    Follow the command line instructions provided by GitHub to initialize the repository on your local machine.

    ```bash    
    git init
    git add .
    git commit -m "first commit"
    git branch -M main
    git remote add origin "vaš repository"
    git push -u origin main
    ```

4.  **Configure the vite.config.js File**
    Configure the vite.config.js file to set the correct base path.

    ```javascript
    export default defineConfig({
      plugins: [react()],
      base: /<REPOSITORY_NAME>/, 
    });
    ```

5.  **Install gh-pages**
    Install gh-pages package as a dev dependency

    ```bash
    npm install gh-pages --save-dev
    ```

6.  **Update package.json**

    - Set homepage in package.json by using URL on GihHub

    ```json
    "homepage": "https://{username}.github.io/{repo-name}/"
    ```

    - Add predeploy and deploy scripts to package.json

    ```javascript
    "scripts": {
      // other scripts
      "predeploy" : "npm run build",
      "deploy" : "gh-pages -d dist",
    }
    ```

7.  **Run Deploy**
    ```bash
    npm run deploy
    ```

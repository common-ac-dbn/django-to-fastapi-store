# django-to-fastapi-store
---

## -- Idea
Take store website project written with Django from [PythonHubStudio]
(https://github.com/PythonHubStudio) and 'translate' it to FastAPI and React.

## -- Base project
Clone and install [this](https://github.com/foxtailer/Django-4-course-Home) as
target for translation.

## -- Git acess
*SSH key for GitHub acess*
```
ssh-keygen -t ed25519 -C "<your-email>"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/<key name>
cat /home/<user>/.ssh/<key name>.pub 
```

1. Copy the key
2. Go to GitHub
3. Click your profile (top right) → Settings
4. Left menu → SSH and GPG keys
5. Click New SSH key
6. Fill:
    - Title: e.g. "My Laptop"
    - Key: paste your copied key
7. Click Add SSH key

```
ssh -T git@github.com
git remote set-url origin git@github.com:common-ac-dbn/django-to-fastapi-store.git
```

**For repo ovner**
1. Open the repository on GitHub.
2. Go to Settings → Collaborators and teams.
3. Click Add people.
4. Enter the contributor’s GitHub username.
5. Send the invitation.


## -- Clone project
---

### -- Front

Create a React frontend using Vite:
```bash
npm create vite@latest frontend -- --template react
cd frontend
npm install
```

Write your React code inside:
```text
src/
```

Build the frontend:
```bash
npm run build
```

### -- Back

Install Nginx:
```bash
sudo apt install nginx
sudo systemctl enable --now nginx
```

Edit the default Nginx config:
```bash
sudo nano /etc/nginx/sites-available/default
```

Things to configure:
* Set the Nginx user correctly (the user that owns the frontend files)
* Configure FastAPI proxying
* Test the configuration

Validate config:
```bash
sudo nginx -t
```

Reload Nginx:
```bash
sudo systemctl reload nginx
```

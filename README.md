# django-to-fastapi-store

git clone https://github.com/common-ac-dbn/django-to-fastapi-store.git

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

## -- Current project

- make venv
- install requirements
```
sudo apt install nginx
sudo systemctl enable --now nginx

- install nodejs
# npm create vite@latest frontend -- --template vanilla
npm create vite@latest frontend -- --template react
cd frontend

npm install

# 3. write your react code in src/
npm run build

sudo cp -r dist/* /var/www/html/


sudo nano /etc/nginx/sites-available/default
- config nginx user as user who own frontend folder
- run nginx - runfastapi - test
sudo nginx -t
sudo systemctl reload nginx
```

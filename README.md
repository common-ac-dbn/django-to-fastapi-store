# django-to-fastapi-store

git clone https://github.com/common-ac-dbn/django-to-fastapi-store.git

## Base project 

*Download - venv - requirements*
```
git clone https://github.com/PythonHubStudio/Django-4-course-Home.git
cd Django-4-course-Home
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
# if get error about psycopg2 replace it by psycopg2-binary in requirements.txt
```

*Postgres install - create db*
```
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql

sudo -i -u postgres psql
CREATE USER home WITH PASSWORD 'home';
CREATE DATABASE home WITH OWNER home;
```

*Run project*
```
python manage.py migrate
python manage.py loaddata fixtures/goods/categories.json
python manage.py loaddata fixtures/goods/products.json
python manage.py createsuperuser
python manage.py runserver
http://127.0.0.1:8000/ in browser
```

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
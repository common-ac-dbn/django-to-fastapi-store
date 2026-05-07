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
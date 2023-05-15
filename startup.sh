cd server
python3 -m venv env
source env/bin/activate
pip3 install -r requirements.txt
python3 manage.py makemigrations
python3 manage.py makemigrations restifyapp
python3 manage.py migrate
# --------------------------------------- SERVICES CONFIGURATION --------------------------------------------------

# DATABASE MYSQL
USER_NAME = 'TYPE YOUR CREDENTIALS'
USER_PASSWORD = 'TYPE YOUR CREDENTIALS'
HOST = 'localhost'
PORT = '8889'
DATABASE = 'images_repository'
MYSQL_ENGINE = f'mysql+pymysql://{USER_NAME}:{USER_PASSWORD}@{HOST}:{PORT}/{DATABASE}'

# CLOUDINARY REPOSITORY
CLOUDINARY_ACCESS_DETAILS = {
    'cloud_name': 'TYPE YOUR CREDENTIALS',
    'api_key': 'TYPE YOUR CREDENTIALS',
    'api_secret': 'TYPE YOUR CREDENTIALS'
}


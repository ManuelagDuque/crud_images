# --------------------------------------- SERVICES CONFIGURATION --------------------------------------------------

# DATABASE MYSQL
USER_NAME = 'root'
USER_PASSWORD = 'root'
HOST = 'localhost'
PORT = '8889'
DATABASE = 'images_repository'
MYSQL_ENGINE = f'mysql+pymysql://{USER_NAME}:{USER_PASSWORD}@{HOST}:{PORT}/{DATABASE}'

# CLOUDINARY REPOSITORY
CLOUDINARY_ACCESS_DETAILS = {
    'cloud_name': 'dqnn9lztw',
    'api_key': '548324252741441',
    'api_secret': 'bDqzhAisdOldsd5A2jXV74XJ5as'
}


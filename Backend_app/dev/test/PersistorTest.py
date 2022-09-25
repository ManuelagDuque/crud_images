import unittest
import mysql.connector as sql
import dev.config.constants_db as database
from dev.app.persistance.MysqlPersistor import MysqlPersistor


class PersistorTest(unittest.TestCase):

    def testClientConnectionOk(self):
        connection_details = database.MY_SQL_DETAILS
        persistor = MysqlPersistor(connection_details).clientConnection()
        print(persistor)
        return self

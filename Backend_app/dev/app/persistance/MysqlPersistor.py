import mysql.connector as sql
from mysql.connector import errorcode


class MysqlPersistor:
    sql_details: dict

    def __init__(self, connection_details):
        self.sql_details = connection_details

    def clientConnection(self):
        connection = sql.connect()
        return connection

    def ask(self):
        return self

    def save(self):
        return self

    def edit(self):
        return self

    def drop(self):
        return self



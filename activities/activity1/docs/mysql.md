# MySQL Setup <--- PLEASE READ (Work Smarter / Not Harder)

Class, I have facilitated this course many times and most students go through the pains of configurations with MySQL.  So here's my Proposal:

INSTEAD OF GOING THROUGH THE PAINS OF INSTALLING MySQL in this course, just go to my instance MySQL Database:

- This will save you time from downloading MySQL
- Installing, Configuring, Creating the Database, Tables, and a lot more
- AND A LOT MORE

When doing the assignments, here is all you need to do, set up your ".env" file as follows in Activity 1:

## [Environmental Variables](https://gitlab.com/bobby.estey/gcuStudent/-/blob/main/CST391/solutions/activity1/MusicAPI/.env)

```
#MySQL Settings
MY_SQL_DB_HOST=cv64us.fatcowmysql.com
MY_SQL_DB_USER=cst391
MY_SQL_DB_PASSWORD=cst391
MY_SQL_DB_PORT=3306
MY_SQL_DB_DATABASE=music
MY_SQL_DB_CONNECTION_LIMIT=10

#Server Settings
PORT=5000
NODE_ENV=development
GREETING=Hello from the environment file. Be kind to the environment!
```

## MySQL History

- Let me pass on History with MySQL.  MySQL was the greatest  Structured Query Language (SQL) engine on the planet and I have been using SQL since 1986.  My first SQL products were Ingres (Which was great) and Oracle (Still is TERRIBLE and the worst Database ever).

- So what happened?  Oracle acquired MySQL and they destroyed the straight forward common sense approach, with Oracle's CONVOLUTED approach.  The original founders were so discussed with what Oracle did, a new database engine was created called [MariaDb](https://mariadb.org/) so if you have to use a Free / Open Source and Straight Forward SQL Engine, my suggestion is use MariaDB (the old MySQL).

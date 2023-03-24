FROM postgres:alpine
COPY scripts/*.sql /docker-entrypoint-initdb.d/

# add SQL scripts to start init
ADD scripts/1_init_tables.sql /docker-entrypoint-initdb.d
ADD scripts/2_fill_test.sql /docker-entrypoint-initdb.d

# init and expose to docker internal port 5432 (mapped to external 5432 in docker-compose.yml)
RUN chmod a+r /docker-entrypoint-initdb.d/*
EXPOSE 5432
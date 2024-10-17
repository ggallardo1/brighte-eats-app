#!/bin/bash
set -e

# Wait for the PostgreSQL server to start
until pg_isready -h db -U postgres; do
  echo "Waiting for database..."
  sleep 2
done

# Execute the SQL scripts
psql -U postgres -d brighte_eats -f /docker-entrypoint-initdb.d/init.sql

exec "$@"
